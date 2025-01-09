"use client";
import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dynamic from "next/dynamic";
import axios from "axios";
import { ArrowUpward as ArrowUpwardIcon } from '@mui/icons-material';
import { Button, Menu } from '@mui/material';
// import dynamic from "next/dynamic";


import Pie from "./charts/pieChart";
import Area from "./charts/AreaChart";
import Bubble from "./charts/BubbleChart";
import Geo from "./charts/GeoChart";



const PieChart = dynamic(() => import("./charts/pieChart"), {
  loading: () => <p>Chart Loading...</p>
});

const AreaChart = dynamic(() => import("./charts/AreaChart"), {
  loading: () => <p>Chart Loading...</p>
});
const GeoChart = dynamic(() => import("./charts/GeoChart"), {
  loading: () => <p>Chart Loading...</p>
});

const BubbleChart = dynamic(() => import("./charts/BubbleChart"), {
  loading: () => <p>Chart Loading...</p>
});

const Copymap = dynamic(() => import("./charts/GeoChart copy"), { ssr: false });


export default function Dashboard() {
  const [uType, setUType] = useState('CampaignViews');
  const [LocationuType, setLocationUType] = useState('LocationCampaign'); 
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [CampaignViews, setCampaignViews] = useState([]);
  const [LocationViews, setLocationViews] = useState([]);
  




  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState('All Time');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async (option) => {
    setSelectedOption(option);
    setAnchorEl(null);
    await fetchData(option); // Call the fetch function with the selected option
  };




  const handleDateRangeChange = (dateRange) => {
    setSelectedDateRange(dateRange);
  };

  const handleReset = () => {
    setSelectedDateRange([null, null]);
  };

  const handleChange = (event) => {
    setUType(event.target.value);
  };

  const handleLocationChange = (event) =>{
    setLocationUType(event.target.value);
  };

  const getfetchCampaignViews = async () => {
    try {

      const response = await axios.get('https://thekoi.ca/backened/analytics/TotalViewsAllCampain');
      setData( response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getfetchCampaignViews();
  }, []);

  useEffect(() => {
    if (!loading) {
      // Your code here that depends on the fetched data
      if (uType === "CampaignViews") {
        let dataVal = data.CampaignViews;
        setCampaignViews([["Campaigns", "Views"], ...dataVal]);
      } else if (uType === "CampaignUsers") {
        let dataVal = data.CampaignUsers;
        setCampaignViews([["Campaigns", "Users"], ...dataVal]);
      } else if (uType === "UserViews") {
        let dataVal = data.UserViews;
        setCampaignViews([["Users", "Views"], ...dataVal]);
      }
    }
  }, [loading, uType, data]);

  useEffect(() => {
    if (!loading) {
      // Your code here that depends on the fetched data
      if (LocationuType === "LocationCampaign") {
        let dataVal2 = data.LocationVScampaigns;
        setLocationViews([["Locations","Campaigns"], ...dataVal2]);
      } else if (LocationuType === "LocationViews") {
        let dataVal2 = data.LocationVSviews;
        setLocationViews([["Locations", "Views"], ...dataVal2]);
      } else if (LocationuType === "LocationUsers") {
        let dataVal2 = data.LocationVSusers;
        setLocationViews([["Locations", "Users"], ...dataVal2]);
      }
    }
  }, [loading, LocationuType, data]);

  const postDataToAPI = () => {
    // Your code for posting data to API
  };

    return (
        <>
            <Layout>
        
            <div className="flex flex-col items-center mb-4">
                <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-4 w-full">
                  {/* Button Section */}
                  <div className="flex flex-col items-center">
                    <Button
                      className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                      variant="contained"
                      onClick={handleClick}
                    >
                      {selectedOption}
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={() => setAnchorEl(null)}
                    >
                      <MenuItem onClick={() => handleClose('All Time')}>All Time</MenuItem>
                      <MenuItem onClick={() => handleClose('7 Days')}>7 Days</MenuItem>
                      <MenuItem onClick={() => handleClose('1 Month')}>1 Month</MenuItem>
                      <MenuItem onClick={() => handleClose('6 Months')}>6 Months</MenuItem>
                      <MenuItem onClick={() => handleClose('12 Months')}>12 Months</MenuItem>
                    </Menu>
                  </div>

                  {/* 1st Graph Selection */}
                  <div>
                  <FormControl className="w-64">
                    <InputLabel style={{ fontSize: '0.9rem' }}>1st Graph</InputLabel>
                    <Select
                      value={uType}
                      label="1st Graph"
                      onChange={handleChange}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: '200px',
                          },
                        },
                      }}
                    >
                      <MenuItem value="CampaignViews">Campaigns vs Views</MenuItem>
                      <MenuItem value="CampaignUsers">Campaigns vs Users</MenuItem>
                      <MenuItem value="UserViews">Users vs Views</MenuItem>
                    </Select>
                  </FormControl>
                  </div>

                  {/* 2nd Graph Selection */}
                  <div>
                  <FormControl className="w-64 ">
                    <InputLabel style={{ fontSize: '0.9rem' }}>2nd Graph</InputLabel>
                    <Select
                      value={LocationuType}
                      label="2nd Graph"
                      onChange={handleLocationChange}
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: '200px',
                          },
                        },
                      }}
                    >
                      <MenuItem value="LocationCampaign">Location vs Campaign</MenuItem>
                      <MenuItem value="LocationViews">Location vs Views</MenuItem>
                      <MenuItem value="LocationUsers">Location vs Users</MenuItem>
                    </Select>
                  </FormControl>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">


                <div className="grid lg:grid-cols-2 md:grid-cols-1 col-span-2 gap-4  ">

                <div className="bg-white rounded-md shadow-md p-6 pb-1">
                <div className="flex items-center justify-between mb-2">
                    <div className="text-lg font-semibold text-gray-800">Total Views</div>
                </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-7xl font-semibold text-gray-800 mt-8">{data.totalViews}</div>
                        <div className="mt-4 text-xl font-semibold text-green-500"><ArrowUpwardIcon/>100%</div>
                        <div className="text-sm text-gray-500 mt-11">on total campaigns of {data.totalCampaigns}</div>
                    </div>
                </div>
                <div className="bg-white rounded-md shadow-md p-6 pb-1">
                <div className="flex items-center justify-between mb-2">
                    <div className="text-lg font-semibold text-gray-800">Total Campaigns </div>
                </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-7xl font-semibold text-gray-800 mt-8">{data.totalCampaigns}</div>
                        <div className="mt-4 text-xl font-semibold text-green-500"><ArrowUpwardIcon/>100%</div>
                        <div className="text-sm text-gray-500 mt-11">runs on this server </div>
                    </div>
                </div>
                <div className="bg-white rounded-md shadow-md p-6 pb-1">
                <div className="flex items-center justify-between mb-2">
                    <div className="text-lg font-semibold text-gray-800">Total Watch Time</div>
                </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-7xl font-semibold text-gray-800 mt-8">{data.totalWatchTime}</div>
                        <div className="mt-4 text-xl font-semibold text-green-500"><ArrowUpwardIcon/>100%</div>
                        <div className="text-sm text-gray-500 mt-11">on total campaigns of {data.totalCampaigns}</div>
                    </div>
                </div>
                <div className="bg-white rounded-md shadow-md p-6 pb-1">
                <div className="flex items-center justify-between mb-2">
                    <div className="text-lg font-semibold text-gray-800">Total Locations</div>
                </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-7xl font-semibold text-gray-800 mt-8">{data.totalLocations}</div>
                        <div className="mt-4 text-xl font-semibold text-green-500"><ArrowUpwardIcon/>100%</div>
                        <div className="text-sm text-gray-500 mt-11">from where campaigns are viewed</div>
                    </div>
                </div>

                <div className="bg-white rounded-md shadow-md p-6 pb-1">
                <div className="flex items-center justify-between mb-2">
                    <div className="text-lg font-semibold text-gray-800">Active Campaigns</div>
                </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-7xl font-semibold text-gray-800 mt-8">{data.totalCampaignsRunningUsers}</div>
                        <div className="mt-4 text-xl font-semibold text-green-500"><ArrowUpwardIcon/>100%</div>
                        <div className="text-sm text-gray-500 mt-11"> running by users</div>
                    </div>
                </div>
                <div className="bg-white rounded-md shadow-md p-6 pb-1">
                <div className="flex items-center justify-between mb-2">
                    <div className="text-lg font-semibold text-gray-800">Active Users</div>
                </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-7xl font-semibold text-gray-800 mt-8">{data.totalUsersRunningCampaign}</div>
                        <div className="mt-4 text-xl font-semibold text-green-500"><ArrowUpwardIcon/>100%</div>
                        <div className="text-sm text-gray-500 mt-11"> on our application</div>
                    </div>
                </div>

                </div>    
                
                <div className="col-span-2" > 
                <div className="col-span-2 rounded-lg shadow-lg px-2 py-2 bg-white">
                    <Area
                    CampaignViews= {CampaignViews}
                    />
                </div>

                <div className="col-span-2 rounded-lg shadow-lg mt-5 px-2 py-2 bg-white">
                    {/* <Bubble></Bubble> */}
                    <Pie
                    LocationViews = {LocationViews}

                    />
                </div>
                </div>

                {/* <div className="bg-white rounded-md shadow-md p-6">
                  <div className="text-lg font-semibold text-gray-800 mb-4">
                    Data for {LocationuType}
                  </div>
                  <div className="text-sm text-gray-600">
                    {LocationViews && LocationViews.length > 1 ? (
                      <ul>
                        {LocationViews.slice(1).map((item, index) => (
                          <li key={index} className="mb-2">
                            {item[0]}: {item[1]}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No data available for {LocationuType}.</p>
                    )}
                  </div>
                </div> */}
                                

            </div>

            </Layout>
        </>
    );
}
