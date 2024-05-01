import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
