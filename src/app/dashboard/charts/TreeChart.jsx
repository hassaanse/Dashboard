import React, {useState,useEffect} from "react";
import { Chart } from "react-google-charts";


// export const 

export function TreeChart({LocationViews}) {

   const [loading, setLoading] = useState(true);
   // State to store formatted data
   const [formattedData, setFormattedData] = useState([]);
 
   // useEffect hook to update loading status and formatted data
   useEffect(() => {
     if (Array.isArray(LocationViews) && LocationViews.length > 0) {
       // Convert campaignData to an array of arrays
       const formattedData = LocationViews;
       setFormattedData(formattedData);
       setLoading(false);
     }
   }, [LocationViews]);
 
   // Render loading message if data is still loading
   if (loading) {
     return <p>Loading...</p>;
   }
 

  const options = {
    curveType: "function",
    legend: { position: "bottom" },
    pointSize: 20,
    series: {
      0: { // Configure series 0 (Sales)
        pointSize: 30, // Adjust the size of the points for Sales
        color: 'blue', // Set color to blue for Sales points
      },
      1: { // Configure series 1 (Expenses)
        pointSize: 20, // Adjust the size of the points for Expenses
        color: 'red', // Set color to red for Expenses points
      }
    }
  };

  return (
    <Chart
      chartType="ScatterChart"
      width="100%"
      height="500px"
      
      data={formattedData}
      options={options}
    />
  );
}
