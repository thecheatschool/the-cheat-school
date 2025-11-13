import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';

// Initialize theme before rendering
const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme-storage');
  if (savedTheme) {
    const themeState = JSON.parse(savedTheme);
    if (themeState.state.theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }
};

initializeTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);