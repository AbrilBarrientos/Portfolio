import React, { useState } from 'react';

const DispoTag = () => {
    const [status, setStatus] = useState('Disponible');

  // Function to get the appropriate background and text color based on the status
    const getStatusClass = (status) => {
        switch (status) {
        case 'Disponible':
            return 'bg-green-100 text-green-800';
        default:
            return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div
        className={`p-4 rounded-md ${getStatusClass(status)} transform transition-all duration-300 ease-in-out 
            hover:scale-105 hover:shadow-lg animate-pulse`}
        style={{
            display: 'inline-block',
            cursor: 'pointer',
        }}
        onMouseEnter={() => setStatus('Disponible')}
        onMouseLeave={() => setStatus('Disponible')}
        >
        <span>{status}</span>
        </div>
    );
};

export default DispoTag;
