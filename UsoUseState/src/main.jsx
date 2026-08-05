import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Buscamos el elemento "root" del HTML y montamos la aplicación de React dentro
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
