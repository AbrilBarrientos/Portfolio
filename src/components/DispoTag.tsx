import React, { useState } from 'react';


const DispoTag = () => {
    const [status, setStatus] = useState('Disponible');

    // Function to get the appropriate background and text color based on the status
    const getStatusClass = (status) => {
        switch (status) {
            case 'Disponible':
            return 'bg-green-100 text-green-800';
            case 'A Considerar':
            return 'bg-yellow-100 text-yellow-800';
            default:
            return 'bg-gray-500 text-white'; // Default case
        }
        };
    
        return (
        <div>
            {/* Status Button */}
            <button
            onClick={() => setStatus(status === 'Disponible' ? 'A Considerar' : 'Disponible')}
            className={`flex items-center space-x-2 py-2 px-4 rounded-full ${getStatusClass(status)}`}
            >
            
            {/* Status Text */}
            <span>{status}</span>
            </button>
        </div>
    );
};

export default DispoTag;