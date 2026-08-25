import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import React from 'react';
import AuthProvider from './context/AuthContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
  </AuthProvider>,
)
