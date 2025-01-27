// "use client";
// import { useState, useEffect } from "react";
// import { format, formatDistance, formatRelative, subDays } from 'date-fns'
// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { get } from "http";
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// import { ToastContainer, toast, Bounce  } from 'react-toastify';
// import Button from '@mui/material/Button';
// import Layout from "../components/layout"; // Ensure the import path is correct
// import UsersList from './comList'
// import { Add, ArrowBack } from "@mui/icons-material";
// import { Typography } from "@mui/material/Typography";
// import UserDetails from "./compDetails";
// import SendToMobile from '@mui/icons-material/SendToMobile';
// import { SnackbarProvider, useSnackbar, enqueueSnackbar } from 'notistack';
// import ReactPlayer from 'react-player';
// import Modal from '@mui/material/Modal';

// import VideoPage from './Videos/page';

// import { styled } from "@mui/material/styles";




// export default function StickyHeadTable() {


//   const [divCampId,setDivCampId] = useState();
//   const [activatedButtons, setActivatedButtons] = useState({});

//   const [buttonStates, setButtonStates] = useState({});

//   const handleToggle = (campaignId) => {
//     setButtonStates((prevState) => ({
//       ...prevState,
//       [campaignId]: !prevState[campaignId], // Toggle the activation state
//     }));
//     if (!buttonStates[campaignId]) {
//       activateCampaign(campaignId); // Call activation logic
//     } else {
//       deactivateCampaign(campaignId); // Call deactivation logic
//     }
//   };



//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [data, setData] = useState([]);
//   const [allData, setAllData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [addUser, setAddUser] = useState(false);
//   const [rows, setRows] = useState(null);
//   const [SearchQuery, setSearchQuery] = useState("");
//   const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
//   const [open, setOpen] = useState(false);

//   const HandleIsAddClose = () => {
//     setAddUser(false);
//   }

//     useEffect(() => {
//         getData();
//     }, [addUser]);

    
//     useEffect(() => {
//       searchData(SearchQuery);
//   }, [SearchQuery]);

//   const handleOpen = (videoUrl) => {
//     setSelectedVideoUrl(videoUrl);
//     setOpen(true);
//   };


//   const handleClose = () => {
//     setOpen(false);
//   };

//     const searchData = (SearchQuery) =>{
//       let filterData;
//       if(SearchQuery){
//         filterData = data.filter(usr => 
//           usr.campaignName.toLowerCase().includes(SearchQuery.toLowerCase()) ||
//           usr.description.toLowerCase().includes(SearchQuery.toLowerCase()) ||
//           usr.campaignId.toString().toLowerCase().includes(SearchQuery.toLowerCase()) 
          
//         )
//         setData(filterData);
//       }
//       else{
//         setData(allData);
//       }

//     }

//     const getData = () => {
//         fetch('https://thekoi.ca/backened/campaign/getAllCompaigns')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log('Data is', data);
//                 setData(data);
//                 setAllData(data);
//                 setLoading(false);
//                 return data;
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }
 
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const activateCampaign = (divCampId) => {

//     // setDivCampId(divCampId)

//     fetch('https://thekoi.ca/backened/campaign/activated', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({campaignId:divCampId}) 
//        }).then(response => {
//         console.log("data", response);
//         getData()
//        }).then(response =>{
//         enqueueSnackbar('Activated Campaign',  {
//           variant: 'success',
//           anchorOrigin: {
//             vertical: 'top', // Customize the vertical position
//             horizontal: 'right', // Customize the horizontal position
//           },
//           style: {
//             backgroundColor: '#00ff00', // Customize the background color
//             color: '#ffffff', // Customize the text color
//             fontWeight: 'bold', // Customize the font weight
//           },
//         })  
//        })
//   };

//   const deactivateCampaign = (divCampId) => {

//     setDivCampId(divCampId)

//     fetch('https://thekoi.ca/backened/campaign/deactivated', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({campaignId:divCampId}) 
//        }).then(response => {
//         console.log("data", response);
//         getData()
//        }).then(response =>{
//         enqueueSnackbar('Deactivated Campaign',  {
//           variant: 'success',
//           anchorOrigin: {
//             vertical: 'top', // Customize the vertical position
//             horizontal: 'right', // Customize the horizontal position
//           },
//           style: {
//             backgroundColor: '#00ff00', // Customize the background color
//             color: '#ffffff', // Customize the text color
//             fontWeight: 'bold', // Customize the font weight
//           },
//         })  
//        })
//   };

//   const PushNotification = (row) => {

    
//     const title = "Watch Campaign "+{row};
//     const body = "Complete watching this campaign to rank up!"

//     fetch('https://thekoi.ca/backened/campaign/CreateNotification', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({title:title, body:body}) 
//        }).then(response => {
//         console.log("data", response);
//         getData()
//        }).then(response =>{
//         enqueueSnackbar('Successfuly send notification',  {
//           variant: 'success',
//           anchorOrigin: {
//             vertical: 'top', // Customize the vertical position
//             horizontal: 'right', // Customize the horizontal position
//           },
//           style: {
//             backgroundColor: '#00ff00', // Customize the background color
//             color: '#ffffff', // Customize the text color
//             fontWeight: 'bold', // Customize the font weight
//           },
//         })  
//        })
//   };


  
//   const addRecord = (row) => {
//     console.log("Edit Record is : ", row)
//     setRows(null);
//     setAddUser(true);
//   };
    
//   const [isVideoOpen, setIsVideoOpen] = useState(false);
//   const [selectedCampaignId, setSelectedCampaignId] = useState(null);

//   const handleOpenVideo = (campaignId) => {
//     setSelectedCampaignId(campaignId);  // Set the campaignId
//     setIsVideoOpen(true);               // Show the Video page
//   };

//   const handleBackToTable = () => {
//     setIsVideoOpen(false);              // Go back to the table
//   };


//   const deleteRecord = (row) => {
//     console.log("Delete Record is : ", row);
//     confirmAlert({
//       title: 'Confirm to submit',
//       message: 'Are you sure to do this.',
//       buttons: [
//         {
//           label: 'Yes',
//           onClick: () => deleteRow(row)
//         },
//         {
//           label: 'No',
        
          
//         }
//       ]
//     });
    
    
//   };
//   const deleteRow = (row) => {
//     fetch('https://thekoi.ca/backened/campaign/deleteCompaign', {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({campaignId:row.campaignId}) 
//        }).then(response => {
//         console.log("data", response);
//         getData()
//        }).then(response =>{
      
//         enqueueSnackbar('Campaign is Deleted!',  {
//           variant: 'success',
//           anchorOrigin: {
//             vertical: 'top', // Customize the vertical position
//             horizontal: 'right', // Customize the horizontal position
//           },
//           style: {
//             backgroundColor: '#00ff00', // Customize the background color
//             color: '#ffffff', // Customize the text color
//             fontWeight: 'bold', // Customize the font weight
//           },
//         })  
//        })
       



//   }
//   const dataFormatter = (dataString) => {
//     const parsedDate = new Date(dataString);
//     return format(parsedDate, "MMMM d, yyyy h:mm a")

//   };
    

//   return (
//     <>
    
   
//     {/* <ToastContainer /> */}
//     <SnackbarProvider maxSnack={3}>
      
//       </SnackbarProvider>

//       {/* {isVideoOpen ? (
       
//         <VideoPage campaignId={selectedCampaignId} handleBackToTable={handleBackToTable} />
//       ) : (
//         <>


//     {addUser ? (<UserDetails HandleIsAddClose = {HandleIsAddClose} />): (<>
//       <h2 className="font-bold mb-4">Campaigns</h2>
//       <div className="flex justify-between ">
      
//       <div>
//         <input type="text" placeholder="Search Campaigns"  value={SearchQuery} onChange={handleInputChange} className="mb-2 px-2 py-2 rounded-lg border-2">
//         </input>
//       </div>
//       <Button variant="outlined" className="mb-2" onClick={()=>addRecord()} startIcon={<Add />}>
//           Add Campaign
//       </Button>
//       </div>
//      */}

// {isVideoOpen ? (
//     // Render the Video page when video is open
//     <VideoPage campaignId={selectedCampaignId} handleBackToTable={handleBackToTable} />
//   ) : (
//     <>


// {addUser ? (<UserDetails HandleIsAddClose = {HandleIsAddClose} />): (<>
//   <h2 className="font-bold mb-4">Campaigns</h2>
//   <div className="flex justify-between ">
  
//   <div>
//     <input type="text" placeholder="Search Campaigns"  value={SearchQuery} onChange={handleInputChange} className="mb-2 px-2 py-2 rounded-lg border-2">
//     </input>
//   </div>
//   <Button variant="outlined" className="mb-2" onClick={()=>addRecord()} startIcon={<Add />}>
//       Add Campaign
//   </Button>
//   </div>
//     {/* <ToastContainer /> */}


// <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
          
//         <TableHead>
//             <TableRow>
//             <TableCell
                  
//                   align="center"
//                   style={{ minWidth: 70 }}
//                 >
//                   ID
//             </TableCell>
//             <TableCell
                  
//                   align="center"
//                   style={{ minWidth: 170 }}
//                 >
//                   NAME
//             </TableCell>
//             <TableCell
                  
//                   align="center"
//                   style={{ minWidth: 170 }}
//                 >
//                   Description
//             </TableCell>
//             <TableCell
                  
//                   align="center"
//                   style={{ minWidth: 170 }}
//                 >
//                   Campaign
//             </TableCell>
//             <TableCell
                  
//                   align="center"
//                   style={{ minWidth: 170 }}
//                 >
//                   Views
//             </TableCell>
//             <TableCell
                  
//                   align="center"
//                   style={{ minWidth: 170 }}
//                 >
//                   Creation Date
//             </TableCell>
//             <TableCell
                  
//                   align="center"
//                   style={{ minWidth: 170 }}
//                 >
//                   Activate Campaign
//             </TableCell>


//             <TableCell
                  
//                   align="center"
//                   style={{ minWidth: 170 }}
//                 >
//                   Push Notification
//             </TableCell>
//             <TableCell
                  
//                   align="center"
//                   style={{ minWidth: 170 }}
//                 >
//                   Delete Campaign
//             </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {
            
            
//             data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, index) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    
                     
//                     <TableCell key={index} align="center">
//                         {row.campaignId}
//                     </TableCell>
//                     <TableCell key={index} align="center">
//                         {row.campaignName}
//                     </TableCell>
                   
//                     <TableCell key={index} align="center">
//                         {row.description}
//                     </TableCell>
//                     <TableCell key={index} align="center">
                      
//                       <Button onClick={() => handleOpenVideo(row.campaignId)} 
//                     variant="contained">
//                     Play Video</Button>
//                     </TableCell>
//                     <Modal
//                       open={open}
//                       onClose={handleClose}
//                       aria-labelledby="modal-modal-title"
//                       aria-describedby="modal-modal-description"
//                     >
//                       <div style={{ display: 'flex', flexDirection: 'column', gap: '-1rem',alignItems: 'center', justifyContent: 'center', height: '100%' }}>
//                         <ReactPlayer url={selectedVideoUrl} controls />
//                         <Button onClick={handleClose} style={{ marginTop: '1rem'}} className="bg-red-600 text-white">Close</Button>
//                       </div>
//                     </Modal>
//                     <TableCell key={index} align="center">
//                         {row.views}
//                     </TableCell>
//                     <TableCell key={index} align="center">
                        
//                         {dataFormatter(row.createdAt)}
//                     </TableCell>
           
//                     <TableCell key={index} align="center">

//                     <div key={row.campaignId} className="flex justify-center gap-2">
//                       <Button
//                         onClick={() => handleToggle(row.campaignId)}
//                         variant="contained"
//                         color={buttonStates[row.campaignId] ? "inherit" : "success"} // Gray for deactivated, green for activated
//                       >
//                         {buttonStates[row.campaignId] ? "Deactivate" : "Activate"}
//                       </Button>
//                     </div>
 
//                     </TableCell>

//                     <TableCell key={index} align="center">
//                       <div className="flex justify-center gap-2">
//                         <div className="cursor-pointer text-green-500 " onClick={() => { PushNotification(row.campaignName) }}>
//                           <SendToMobile />
//                         </div>
//                       </div>
//                     </TableCell>
//                     <TableCell key={index} align="center">
//                       <Button onClick={() => deleteRecord(row)} variant="contained" color="error" startIcon={<DeleteIcon />}>Delete</Button>
//                     </TableCell>       
                    
//                   </TableRow>
//                 );
//               })}
//           </TableBody>


//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={data.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />


//     <div>
//           {/* Active Campaign Id {divCampId}     */}

//     </div>

//     </>)}
    

//     </>  
//       )}
//     </>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { format, formatDistance, formatRelative, subDays } from 'date-fns'
// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { get } from "http";
// import { confirmAlert } from 'react-confirm-alert'; // Import
// import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// import { ToastContainer, toast, Bounce  } from 'react-toastify';
// import Button from '@mui/material/Button';
// import Layout from "../components/layout"; // Ensure the import path is correct
// import UsersList from './comList'
// import { Add, ArrowBack } from "@mui/icons-material";
// import { Typography } from "@mui/material/Typography";
// import UserDetails from "./compDetails";
// import SendToMobile from '@mui/icons-material/SendToMobile';
// import { SnackbarProvider, useSnackbar, enqueueSnackbar } from 'notistack';
// import ReactPlayer from 'react-player';
// import Modal from '@mui/material/Modal';

// import VideoPage from './Videos/page';

// import { styled } from "@mui/material/styles";

import React, { useState, useEffect } from "react";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { get } from "http";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { ToastContainer, toast, Bounce  } from 'react-toastify';
import Button from '@mui/material/Button';
import Layout from "../components/layout"; // Ensure the import path is correct
import UsersList from './comList'
import { Add, ArrowBack } from "@mui/icons-material";
import { Typography } from "@mui/material/Typography";
import UserDetails from "./compDetails";
import SendToMobile from '@mui/icons-material/SendToMobile';
import { SnackbarProvider, useSnackbar, enqueueSnackbar } from 'notistack';
import ReactPlayer from 'react-player';
import Modal from '@mui/material/Modal';

import VideoPage from './Video';

import { styled } from "@mui/material/styles";

export default function StickyHeadTable({ onBack }) {
  const [divCampId, setDivCampId] = useState();
  const [activatedButtons, setActivatedButtons] = useState({});

  const [buttonStates, setButtonStates] = useState({});

  const handleToggle = (campaignId) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [campaignId]: !prevState[campaignId], // Toggle the activation state
    }));
    if (!buttonStates[campaignId]) {
      activateCampaign(campaignId); // Call activation logic
    } else {
      deactivateCampaign(campaignId); // Call deactivation logic
    }
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addUser , setAddUser ] = useState(false);
  const [rows, setRows] = useState(null);
  const [SearchQuery, setSearchQuery] = useState("");
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
  const [open, setOpen] = useState(false);

  const HandleIsAddClose = () => {
    setAddUser (false);
  }

  useEffect(() => {
    getData();
  }, [addUser ]);

  useEffect(() => {
    searchData(SearchQuery);
  }, [SearchQuery]);

  const handleOpen = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const searchData = (SearchQuery) => {
    let filterData;
    if (SearchQuery) {
      filterData = data.filter(usr =>
        usr.campaignName.toLowerCase().includes(SearchQuery.toLowerCase()) ||
        usr.description.toLowerCase().includes(SearchQuery.toLowerCase()) ||
        usr.campaignId.toString().toLowerCase().includes(SearchQuery.toLowerCase())
      )
      setData(filterData);
    } else {
      setData(allData);
    }
  }

  const getData = () => {
    fetch('https://thekoi.ca/backened/campaign/getAllCompaigns')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data is', data);
        setData(data);
        setAllData(data);
        setLoading(false);
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  }

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

  const activateCampaign = (divCampId) => {
    fetch('https://thekoi.ca/backened/campaign/activated', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ campaignId: divCampId })
    }).then(response => {
      console.log("data", response);
      getData()
    }).then(response => {
      enqueueSnackbar('Activated Campaign', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top', // Customize the vertical position
          horizontal: 'right', // Customize the horizontal position
        },
        style: {
          backgroundColor: '#00ff00', // Customize the background color
          color: '#ffffff', // Customize the text color
          fontWeight: 'bold', // Customize the font weight
        },
      })
    })
  };

  const deactivateCampaign = (divCampId) => {
    setDivCampId(divCampId)
    fetch('https://thekoi.ca/backened/campaign/deactivated', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ campaignId: divCampId })
    }).then(response => {
      console.log("data", response);
      getData()
    }).then(response => {
      enqueueSnackbar('Deactivated Campaign', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top', // Customize the vertical position
          horizontal: 'right', // Customize the horizontal position
        },
        style: {
          backgroundColor: '#00ff00', // Customize the background color
          color: '#ffffff', // Customize the text color
          fontWeight: 'bold', // Customize the font weight
        },
      })
    })
  };

  const PushNotification = (row) => {
    const title = "Watch Campaign " + { row };
    const body = "Complete watching this campaign to rank up!"
    fetch('https://thekoi.ca/backened/campaign/CreateNotification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: title, body: body })
    }).then(response => {
      console.log("data", response);
      getData()
    }).then(response => {
      enqueueSnackbar('Successfuly send notification', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top', // Customize the vertical position
          horizontal: 'right', // Customize the horizontal position
        },
        style: {
          backgroundColor: '#00ff00', // Customize the background color
          color: '#ffffff', // Customize the text color
          fontWeight: 'bold', // Customize the font weight
        },
      })
    })
  };

  const addRecord = (row) => {
    console.log("Edit Record is : ", row)
    setRows(null);
    setAddUser (true);
  };

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedCampaignId, setSelectedCampaignId] = useState(null);

  const handleOpenVideo = (campaignId) => {
    setSelectedCampaignId(campaignId); // Set the campaignId
    setIsVideoOpen(true); // Show the Video page
  };

  const handleBackToTable = () => {
    setIsVideoOpen(false); // Go back to the table
  };

  const deleteRecord = (row) => {
    console.log("Delete Record is : ", row);
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteRow(row)
        },
        {
          label: 'No',
        }
      ]
    });
  };

  const deleteRow = (row) => {
    fetch('https://thekoi.ca/backened/campaign/deleteCompaign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ campaignId: row.campaignId })
    }).then(response => {
      console.log("data", response);
      getData()
    }).then(response => {
      enqueueSnackbar('Campaign is Deleted!', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top', // Customize the vertical position
          horizontal: 'right', // Customize the horizontal position
        },
        style: {
          backgroundColor: '#00ff00', // Customize the background color
          color: '#ffffff', // Customize the text color
          fontWeight: 'bold', // Customize the font weight
        },
      })
    })
  }

  const dataFormatter = (dataString) => {
    const parsedDate = new Date(dataString);
    return format(parsedDate, "MMMM d, yyyy h:mm a")
  };

  return (
    <>
      <SnackbarProvider maxSnack={3}>
        {isVideoOpen ? (
          <VideoPage campaignId={selectedCampaignId} handleBackToTable={handleBackToTable} />
        ) : (
          <>

            {addUser  ? (
              <User Details HandleIsAddClose={HandleIsAddClose} />
            ) : (
              <>
                <h2 className="font-bold mb-4">Campaigns</h2>
                <div className="flex justify-between ">
                  <div>
                    <input type="text" placeholder="Search Campaigns" value={SearchQuery} onChange={handleInputChange} className="mb-2 px-2 py-2 rounded-lg border-2">
                    </input>
                  </div>
                  <Button variant="outlined" className="mb-2" onClick={() => addRecord()} startIcon={<Add />}>
                    Add Campaign
                  </Button>
                </div>

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
                          Description
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ minWidth: 170 }}
                        >
                          Campaign
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
                          Activate Campaign
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ minWidth: 170 }}
                        >
                          Push Notification
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ minWidth: 170 }}
                        >
                          Delete Campaign
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => {
                          return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                              <TableCell key={index} align="center">
                                {row.campaignId}
                              </TableCell>
                              <TableCell key={index} align="center">
                                {row.campaignName}
                              </TableCell>
                              <TableCell key={index} align="center">
                                {row.description}
                              </TableCell>
                              <TableCell key={index} align="center">
                                <Button onClick={() => handleOpenVideo(row.campaignId)}
                                  variant="contained">
                                  Play Video
                                </Button>
                              </TableCell>
                              <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                              >
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '-1rem', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                  <ReactPlayer url={selectedVideoUrl} controls />
                                  <Button onClick={handleClose} style={{ marginTop: '1rem' }} className="bg-red-600 text-white">Close</Button>
                                </div>
                              </Modal>
                              <TableCell key={index} align="center">
                                {row.views}
                              </TableCell>
                              <TableCell key={index} align="center">
                                {dataFormatter(row.createdAt)}
                              </TableCell>
                              <TableCell key={index} align="center">
                                <div key={row.campaignId} className="flex justify-center gap-2">
                                  <Button
                                    onClick={() => handleToggle(row.campaignId)}
                                    variant="contained"
                                    color={buttonStates[row.campaignId] ? "inherit" : "success"} // Gray for deactivated, green for activated
                                  >
                                    {buttonStates[row.campaignId] ? "Deactivate" : "Activate"}
                                  </Button>
                                </div>
                              </TableCell>
                              <TableCell key={index} align="center">
                                <div className="flex justify-center gap-2">
                                  <div className="cursor-pointer text-green-500 " onClick={() => { PushNotification(row.campaignName) }}>
                                    <SendToMobile />
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell key={index} align="center">
                                <Button onClick={() => deleteRecord(row)} variant="contained" color="error" startIcon={<DeleteIcon />}>Delete</Button>
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
              </>
            )}
          </>
        )}
      </SnackbarProvider>
    </>
  );
}