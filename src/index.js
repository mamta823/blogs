import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { LoaderProvider } from './context/LoaderProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LoaderProvider>
      <App />
    </LoaderProvider>

  </BrowserRouter>
);
reportWebVitals();
