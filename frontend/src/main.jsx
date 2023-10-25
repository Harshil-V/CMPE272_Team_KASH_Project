import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';

console.log(import.meta.env.AUTH0_APP_NAME)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-gngrdvheb76au01w.us.auth0.com'
      clientId='G4h07LqYp6Ac6tvThQcidRMQVDPmZhvJ'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
