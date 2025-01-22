import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);



reportWebVitals();
