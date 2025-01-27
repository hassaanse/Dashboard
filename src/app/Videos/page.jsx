// import React, { useEffect, useState } from 'react';
// import { ArrowBack } from '@mui/icons-material';
// // import { useRouter } from 'next/router';
// // import { useHistory } from 'react-router-dom';
// // import { useNavigate } from 'react-router-dom';
// import { useRouter } from 'next/navigation';

// const VideoGallery = ({ videos }) => {
//   // Define the VideoCard component directly within the same file
//   const VideoCard = ({ videoId, title, path, views }) => {
//     return (
//       <div className="video-card" key={videoId} style={styles.card}>
//         <h3>{title}</h3>
//         <video controls width="400" style={styles.video}>
//           <source src={path} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <p>{views} views</p>
//       </div>
//     );
//   };

//   return (
//     <div className="video-gallery" style={styles.gallery}>
//       {videos.map((video) => (
//         <VideoCard
//           key={video.videoId}
//           videoId={video.videoId}
//           title={video.title}
//           path={'https://thekoi.ca/backened/'+video.path}
//           views={video.views}
//         />
//       ))}
//     </div>
//   );
// };

// const App = ({ campaignId, onBack }) => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   // const navigate = useNavigate();
//   const router = useRouter();

//   // const history = useHistory();

//   useEffect(() => {
//     // Fetch video data from API
//     const fetchVideos = async () => {
//       try {
//         const response = await fetch('https://thekoi.ca/backened/campaign/videowithID', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ campaignId }), });
//         // const response = await fetch('http://localhost:8000/campaign/videowithID'); // Replace 'YOUR_API_URL' with your actual API URL
//         const data = await response.json();
//         console.log('data of videoID is : ')
//         setVideos(data); // Assuming the data returned is an array of video objects
//         setLoading(false);
//       } catch (error) {
        
//         console.error('Error fetching videos:', error);
//         setLoading(false); 
//       }
//     };

//     fetchVideos();
//   }, []);

//   if (loading) {
//     return <p>Loading videos...</p>;
//   }

//   return (
//     <div>
//       {/* <h1>Video Gallery</h1> */}
//       {/* <div className="flex justify-left" onClick={onBack}>
//         <ArrowBack className="mr-2 cursor-pointer" />
//         <h2 className="font-bold mb-4 cursor-pointer">Back</h2>
//       </div> */}
//       {/* <div className="flex justify-left" onClick={() => history.replace('/campaigns')}>
//         <ArrowBack className="mr-2 cursor-pointer" />
//         <h2 className="font-bold mb-4 cursor-pointer">Back</h2>
//       </div> */}
//       {/* <div className="flex justify-left" onClick={() => navigate('/campaigns')}>
//         <ArrowBack className="mr-2 cursor-pointer" />
//         <h2 className="font-bold mb-4 cursor-pointer">Back</h2>
//       </div> */}
//        <div className="flex justify-left" onClick={() => router.push('/campaigns')}>
//         <ArrowBack className="mr-2 cursor-pointer" />
//         <h2 className="font-bold mb-4 cursor-pointer">Back</h2>
//       </div>
//       <VideoGallery videos={videos} />
//     </div>
//   );
// };

// // Inline CSS for simplicity
// const styles = {
//   gallery: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '20px',
//     justifyContent: 'center',
//   },
//   card: {
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     padding: '16px',
//     textAlign: 'center',
//     width: '400px',
//   },
//   video: {
//     width: '100%',
//     height: 'auto',
//   },
// };

// export default App;


// import React, { useEffect, useState } from 'react';
// import { ArrowBack } from '@mui/icons-material';

// const VideoGallery = ({ videos, onBack }) => {
//   const VideoCard = ({ videoId, title, path, views }) => {
//     return (
//       <div className="video-card" key={videoId} style={styles.card}>
//         <h3>{title}</h3>
//         <video controls width="400" style={styles.video}>
//           <source src={path} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <p>{views} views</p>
//       </div>
//     );
//   };

//   return (
//     <div className="video-gallery" style={styles.gallery}>
//       {videos.map((video) => (
//         <VideoCard
//           key={video.videoId}
//           videoId={video.videoId}
//           title={video.title}
//           path={'https://thekoi.ca/backened/' + video.path}
//           views={video.views}
//         />
//       ))}
//     </div>
//   );
// };

// const App = ({ campaignId, onBack }) => {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await fetch('https://thekoi.ca/backened/campaign/videowithID', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ campaignId }),
//         });
//         const data = await response.json();
//         setVideos(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, []);

//   if (loading) {
//     return <p>Loading videos...</p>;
//   }

//   return (
//     <div>
//       <div className="flex justify-left" onClick={onBack}>
//         <ArrowBack className="mr-2 cursor-pointer" />
//         <h2 className="font-bold mb-4 cursor-pointer">Back</h2>
//       </div>
//       <VideoGallery videos={videos} onBack={onBack} />
//     </div>
//   );
// };

// const styles = {
//   gallery: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '20px',
//     justifyContent: 'center',
//   },
//   card: {
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     padding: '16px',
//     textAlign: 'center',
//     width: '400px',
//   },
//   video: {
//     width: '100%',
//     height: 'auto',
//   },
// };

// export default App;

"use client";

import React, { useEffect, useState } from 'react';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/navigation'; // Import from next/navigation

const VideoGallery = ({ videos }) => {
  const VideoCard = ({ videoId, title, path, views }) => {
    return (
      <div className="video-card" key={videoId} style={styles.card}>
        <h3>{title}</h3>
        <video controls width="400" style={styles.video}>
          <source src={path} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>{views} views</p>
      </div>
    );
  };

  return (
    <div className="video-gallery" style={styles.gallery}>
      {videos.map((video) => (
        <VideoCard
          key={video.videoId}
          videoId={video.videoId}
          title={video.title}
          path={'https://thekoi.ca/backened/' + video.path}
          views={video.views}
        />
      ))}
    </div>
  );
};

const App = ({ campaignId, onBack }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Use the correct hook

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://thekoi.ca/backened/campaign/videowithID', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ campaignId }),
        });
        const data = await response.json();
        setVideos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <p>Loading videos...</p>;
  }

  return (
    <div>
      <div className="flex justify-left" onClick={() => router.push('/campaigns')}>
        <ArrowBack className="mr-2 cursor-pointer" />
        <h2 className="font-bold mb-4 cursor-pointer">Back</h2>
      </div>
      <VideoGallery videos={videos} />
    </div>
  );
};

const styles = {
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    width: '400px',
  },
  video: {
    width: '100%',
    height: 'auto',
  },
};

export default App;