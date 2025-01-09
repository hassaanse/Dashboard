"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addUser, setAddUser] = useState(false);
  const [rows, setRows] = useState(null);
  const [SearchQuery, setSearchQuery] = useState("");

  const HandleIsAddClose = () => {
    setAddUser(false);
  };

  useEffect(() => {
    getData();
  }, [addUser]);

  useEffect(() => {
    searchData(SearchQuery);
  }, [SearchQuery]);

  const searchData = (SearchQuery) => {
    if (SearchQuery) {
      const filterData = allData.filter(
        (usr) =>
          usr.userName.toLowerCase().includes(SearchQuery.toLowerCase()) ||
          usr.userEmail.toLowerCase().includes(SearchQuery.toLowerCase()) ||
          usr.location.toLowerCase().includes(SearchQuery.toLowerCase())
      );
      setData(filterData);
    } else {
      setData(allData);
    }
  };

  const getData = () => {
    fetch("https://thekoi.ca/backened/user/list")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched:", data);
        setData(data.users || []); // Use `data.users` if the API returns an object with a `users` key
        setAllData(data.users || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err.message);
      });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const editRecord = (row) => {
    setRows(row);
    setAddUser(true);
  };

  const addRecord = () => {
    setRows(null);
    setAddUser(true);
  };

  const deleteRecord = (row) => {
    confirmAlert({
      title: "Confirm deletion",
      message: "Are you sure you want to delete this user?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteRow(row),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const deleteRow = (row) => {
    fetch("https://thekoi.ca/backened/user/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: row.id }),
    })
      .then((response) => {
        console.log("Delete response:", response);
        getData();
      })
      .then(() => {
        toast.error("User successfully deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          transition: Bounce,
        });
      });
  };

  const dataFormatter = (dataString) => {
    const parsedDate = new Date(dataString);
    return format(parsedDate, "MMMM d, yyyy h:mm a");
  };

  return (
    <>
    
   
    <ToastContainer />
    {addUser ? (<UserDetails HandleIsAddClose = {HandleIsAddClose} rows ={rows}/>): (<>
      <h2 className="font-bold mb-4">Users</h2>
      <div className="flex justify-between ">
      
      <div>
        <input type="text" placeholder="Search Users"  value={SearchQuery} onChange={handleInputChange} className="mb-2 px-2 py-2 rounded-lg border-2">
        </input>
      </div>
     
      </div>
    
    {/* <ToastContainer /> */}
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            <TableCell
                  
                  align="center"
                  style={{ minWidth: 70 }}
                >
                  ID
            </TableCell>
            <TableCell
                  
                  align="center"
                  style={{ minWidth: 170 }}
                >
                  NAME
            </TableCell>
            <TableCell
                  
                  align="center"
                  style={{ minWidth: 170 }}
                >
                  EMAIL
            </TableCell>
            <TableCell
                  
                  align="center"
                  style={{ minWidth: 170 }}
                >
                  Phone Number
            </TableCell>
            <TableCell
                  
                  align="center"
                  style={{ minWidth: 170 }}
                >
                  LOCATION
            </TableCell>
            <TableCell
                  
                  align="center"
                  style={{ minWidth: 170 }}
                >
                  Views
            </TableCell>
            <TableCell
                  
                  align="center"
                  style={{ minWidth: 170 }}
                >
                  Creation Date
            </TableCell>
            <TableCell
                  
                  align="center"
                  style={{ minWidth: 170 }}
                >
                  Action Center
            </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    
                     
                    <TableCell key={index} align="center">
                        {row.id}
                    </TableCell>
                    <TableCell key={index} align="center">
                        {row.firstName + " " + row.lastName}
                    </TableCell>
                    <TableCell key={index} align="center">
                        {row.email}
                    </TableCell>
                    <TableCell key={index} align="center">
                        {row.number}
                    </TableCell>
                    <TableCell key={index} align="center">
                        {row.city + ", " + row.country}
                    </TableCell>
                    
                    <TableCell key={index} align="center">
                        {row.views}
                    </TableCell>
                    <TableCell key={index} align="center">
                        {/* {row.createdAt} */}
                        {dataFormatter(row.createdAt)}
                    </TableCell>
                    <TableCell key={index} align="center">
                        <div className="flex justify-center gap-2">
                            <div className="cursor-pointer text-red-500" onClick={()=>{deleteRecord(row)}}>
                                <DeleteIcon></DeleteIcon>
                            </div>

                            
                        </div>
                    </TableCell>     
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>)}
    
      
   
    </>
  );
}