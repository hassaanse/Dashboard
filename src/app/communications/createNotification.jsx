// pages/create-topic.js
import React, { useState } from 'react';
import { ArrowBack } from '@mui/icons-material';

const CreateTopic = ({ HandleIsAddClose }) => {

    const [topic, setTopic] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object to handle the file upload
        const formData = new FormData();
        formData.append('topic', topic);
        formData.append('title', title);
        formData.append('body', body);
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await fetch('http://localhost:8000/campaign/CreateNotification', {
                method: 'POST',
                body: formData,
            });

            HandleIsAddClose();

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Handle the response from the API
            const result = await response.json();
            console.log('Success:', result);
            // Reset the form
            setTopic('');
            setTitle('');
            setBody('');
            setImage(null);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
        <div className="flex justify-left" onClick={HandleIsAddClose}>
        <ArrowBack className='mr-2 cursor-pointer' />
        <h2 className="font-bold mb-4 cursor-pointer">Back</h2>   
        </div>
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl">
                <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Create a New Notification</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700">Topic</label>
                        <input
                            type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="Enter topic here..."
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter title here..."
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700">Body</label>
                        <textarea
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            placeholder="Enter body content here..."
                            rows="4"
                            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    {/* <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700">Image</label>
                        <div className="flex items-center space-x-4">
                            <div className="w-24 h-24 border border-gray-300 rounded-lg flex items-center justify-center bg-gray-100">
                                <i className="fas fa-image text-gray-400 text-4xl"></i>
                            </div>
                            <div className="ml-4 flex flex-col">
                                <p className="text-gray-700">Upload an image</p>
                                <input
                                    type="file"
                                    onChange={(e) => setImage(e.target.files[0])}
                                    className="mt-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-sm file:font-medium file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                                />
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="mb-6">
                        <div className="flex items-center justify-between">
                            <div className="text-gray-700 flex items-center">
                                <i className="fas fa-chevron-down mr-2"></i> Attached Applications
                            </div>
                            <a href="#" className="text-blue-500 hover:underline">Edit</a>
                        </div>
                    </div> */}


                    <div className="flex justify-end space-x-4">
                        <button type="button" className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow-sm hover:bg-gray-600">Cancel</button>
                        <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-sm hover:bg-green-600">Create</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default CreateTopic;
