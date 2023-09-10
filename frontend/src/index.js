import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Auth0Provider
    domain="dev-5v0st7xe68nn70td.us.auth0.com"
    clientId="22ujqW9dIoRlFKRIgl3PN1exxyIML8Jl"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>

  


  // </React.StrictMode>
);


