import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Este es el archivo CSS global de tu aplicación
import App from './App.tsx';  // Componente principal de la aplicación
// Si estás usando reportWebVitals

// Crea una raíz de React y renderiza la aplicación en el DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Si quieres medir el rendimiento de la aplicación, puedes usar reportWebVitals
