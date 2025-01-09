// import React, {useState,useEffect} from "react";
// import { Chart } from "react-google-charts";

// export const data = [
//   ["location","users"]
//   ,
//   [
//     "pas",
//     4
// ],
// [
//     "lahore",
//     1
// ],
// [
//     "sialkot",
//     1
// ],
// [
//     "sgd",
//     1
// ],
// [
//     "avwkdvmawd",
//     1
// ]
// ];

// export const options = {
//   title: "Location vs active users",
//   is3D: true,
// };

// export default function App() {
//   return (
//     <Chart
//       chartType="PieChart"
//       data={data}
//       options={options}
//       width={"100%"}
//       height={"400px"}
//     />
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export const options = {
  title: "Data on Different Locations ",
  is3D: true,
};

export default function App({ LocationViews }) {
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State to store formatted data
  const [formattedData, setFormattedData] = useState([]);

  // useEffect hook to update loading status and formatted data
  useEffect(() => {
    if (Array.isArray(LocationViews) && LocationViews.length > 0) {
      // Format data for Pie Chart
      const formattedData = [ ...LocationViews];
      setFormattedData(formattedData);
      setLoading(false);
    }
  }, [LocationViews]);

  // Render loading message if data is still loading
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render Pie Chart once data is loaded
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={formattedData}
      options={options}
    />
  );
}
