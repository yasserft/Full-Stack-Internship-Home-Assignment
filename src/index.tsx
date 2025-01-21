import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// Find the root element
const root =ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

if (root) {
  // Create a root and render the app
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}