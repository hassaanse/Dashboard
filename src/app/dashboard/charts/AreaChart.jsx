"use Client";

import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export const options = {
  chart: {
    // title: "Campaigns vs Views ",
    // subtitle: "Shows Views on Each Campaign",
  },
};

export default function App({ CampaignViews }) {
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State to store formatted data
  const [formattedData, setFormattedData] = useState([]);

  // useEffect hook to update loading status and formatted data
  useEffect(() => {
    if (Array.isArray(CampaignViews) && CampaignViews.length > 0) {
      // Convert campaignData to an array of arrays
      const formattedData = CampaignViews;
      setFormattedData(formattedData);
      setLoading(false);
    }
  }, [CampaignViews]);

  // Render loading message if data is still loading
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render chart once data is loaded
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={formattedData} // Merge fetched data with the header row
      options={options}
    />
  );
}
