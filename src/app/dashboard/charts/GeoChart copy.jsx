// import React from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// // Your Google Maps API key
// const API_KEY = "AIzaSyAv-AfXFq3zCkWShcGCfY05TLR4HsGFI2A";

// const citiesData = [
//   { city: "New York", lat: 40.7128, lng: -74.006, users: 150 },
//   { city: "London", lat: 51.5074, lng: -0.1278, users: 200 },
//   { city: "Tokyo", lat: 35.6895, lng: 139.6917, users: 300 },
//   // Add more cities as needed
// ];

// const mapContainerStyle = {
//   width: "100%",
//   height: "500px",
// };

// const center = {
//   lat: 20, // Initial center latitude
//   lng: 0, // Initial center longitude
// };

// const GoogleMapsComponent = () => {
//   return (
//     <LoadScript googleMapsApiKey={API_KEY}>
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={2} // Initial zoom level
//       >
//         {citiesData.map((data, index) => (
//           <Marker
//             key={index}
//             position={{ lat: data.lat, lng: data.lng }}
//             label={`${data.city} (${data.users} users)`}
//           />
//         ))}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default GoogleMapsComponent;

"use Client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const apiKey = "AIzaSyAv-AfXFq3zCkWShcGCfY05TLR4HsGFI2A";

// Your Google Maps API key is passed as a prop
const GoogleMapsComponent = () => {
  const citiesData = [
    { city: "New York", lat: 40.7128, lng: -74.006, users: 150 },
    { city: "London", lat: 51.5074, lng: -0.1278, users: 200 },
    { city: "Tokyo", lat: 35.6895, lng: 139.6917, users: 300 },
    // Add more cities as needed
  ];

  const mapContainerStyle = {
    width: "100%",
    height: "500px",
  };

  const center = {
    lat: 20, // Initial center latitude
    lng: 0, // Initial center longitude
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={2} // Initial zoom level
      >
        {citiesData.map((data, index) => (
          <Marker
            key={index}
            position={{ lat: data.lat, lng: data.lng }}
            label={`${data.city} (${data.users} users)`}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;
