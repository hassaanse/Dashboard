import React, { useState } from 'react';
import { ArrowBack } from '@mui/icons-material';

// import React, { useState } from 'react';

const CampaignForm = ({ HandleIsAddClose }) => {
  const [campaignData, setCampaignData] = useState({
    campaignName: '',
    description: '',
    endDate: '',
    tags: '',
    videos: [],
  });

  const [videoOrder, setVideoOrder] = useState([]);
  const [formDataLog, setFormDataLog] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaignData({
      ...campaignData,
      [name]: value,
    });
  };
  // const [formDataLog, setFormDataLog] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newOrder = selectedFiles.map((file, index) => ({
      name: file.name, // Use the file name instead of the file object
      order: campaignData.videos.length + index,
    }));

    setCampaignData((prevState) => ({
      ...prevState,
      videos: [...prevState.videos, ...selectedFiles],
    }));

    setVideoOrder((prevOrder) => [...prevOrder, ...newOrder]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!campaignData.videos.length) {
      return alert('Please upload at least one video.');
    }

    try {
      const formData = new FormData();
      formData.append('campaignName', campaignData.campaignName);
      formData.append('description', campaignData.description);
      formData.append('endDate', campaignData.endDate.toString());
      formData.append('tags', campaignData.tags);

      campaignData.videos.forEach((video) => {
        formData.append('videos', video); // Append videos
      });

      // Append video order as a JSON string
      formData.append('videoOrder', JSON.stringify(videoOrder));

      const logEntries = [];
      for (const [key, value] of formData.entries()) {
        logEntries.push({ key, value: value instanceof File ? value.name : value });
      }
      setFormDataLog(logEntries);

      const response = await fetch('https://thekoi.ca/backened/campaign/createCampaigns', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to add campaign');
      }
      else{
        console.log('Campaign added successfully');
        setCampaignData({
          campaignName: '',
          description: '',
          endDate: '',
          tags: '',
          videos: [],
        });
        setVideoOrder([]);
        HandleIsAddClose()
      }
      
      
    } catch (error) {
      console.error('Error adding campaign:', error.message);
    }
  };

  return (
    <>
      <div className="flex justify-left" onClick={HandleIsAddClose}>
        <ArrowBack className="mr-2 cursor-pointer" />
        <h2 className="font-bold mb-4 cursor-pointer">Back</h2>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Add Campaign</h2>
        <div className="mb-4">
          <label htmlFor="campaignName" className="block font-semibold mb-2">
            Campaign Name
          </label>
          <input
            type="text"
            id="campaignName"
            name="campaignName"
            value={campaignData.campaignName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={campaignData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            rows="4"
          ></textarea>
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label htmlFor="endDate" className="block font-semibold mb-2">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={campaignData.endDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="tags" className="block font-semibold mb-2">
              Tags
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={campaignData.tags}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="videos" className="block font-semibold mb-2">
            Video Upload (First Video Gets Priority)
          </label>
          <input
            type="file"
            id="videos"
            name="videos"
            accept="video/*"
            onChange={handleFileChange}
            className="hidden"
            multiple // Allow multiple file selection
          />
          <label
            htmlFor="videos"
            className="block cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Choose Files
          </label>
          <ul className="mt-2">
            {campaignData.videos.map((video, index) => (
              <li key={index} className="text-sm">
                {index === 0 ? `⭐ ${video.name}` : video.name}
              </li>
            ))}
          </ul>
        </div>
        <button
          type="submit"
          className="mt-5 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
      {/* <div className="mt-4">
        <h3>Form Data Log:</h3>
        <ul>
          {formDataLog.map((entry, index) => (
            <li key={index}>
              <strong>Key:</strong> {entry.key}, <strong>Value:</strong> {entry.value}
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

export default CampaignForm;
