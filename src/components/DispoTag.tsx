import React, { useState } from 'react';


const DispoTag = () => {
    const [status, setStatus] = useState('Disponible');

    // Function to get the appropriate background and text color based on the status
    const getStatusClass = (status) => {
        switch (status) {
            case 'Disponible':
            return 'bg-green-100 text-green-800';
            
        }
        };
    
        return (
        <div>
            
            <span>{status}</span>
            
        </div>
    );
};

export default DispoTag;