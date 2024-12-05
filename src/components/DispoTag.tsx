import React, { useState } from 'react';

const DispoTag = () => {
    const [status, setStatus] = useState('Disponible');

    // Function to get the appropriate background and text color based on the status
    const getStatusClass = (status) => {
        switch (status) {
        case 'Disponible':
            return 'bg-green-400 text-green-800'; // Más intenso para resaltar
        default:
            return 'bg-gray-300 text-gray-800'; // Color neutro por defecto
        }
    };

    return (
        <div
        className={`px-4 py-2 rounded-3xl ${getStatusClass(status)} transform transition-all duration-500 ease-in-out
            hover:scale-100 hover:shadow-xl hover:bg-green-450 hover:text-green animate-pulse cursor-pointer`}
        style={{
            display: 'inline-block',
        }}
        >
        <span className="font-semibold text-lg">{status}</span>
        </div>
    );
};

export default DispoTag;
