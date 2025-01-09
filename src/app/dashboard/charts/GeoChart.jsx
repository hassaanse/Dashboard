import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "pas",
    1,
    4
],
[
    "lahore",
    1,
    1
],
[
    "sialkot",
    1,
    1
],
[
    "sgd",
    0,
    1
],
[
    "avwkdvmawd",
    0,
    1
]
];

export const options = {
    title: "Company Performance",
    
  };

export default function App() {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
    />
  );
}
