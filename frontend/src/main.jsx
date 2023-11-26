import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.jsx'
// import './App.css'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.css';

import { Amplify, Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports'
import '@aws-amplify/ui-react/styles.css'

window.global ||= window;

Amplify.configure(awsExports);
Auth.configure(awsExports)

// console.log(import.meta.env.AUTH0_APP_NAME)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Authenticator>
            <App />
        </Authenticator>
    </React.StrictMode>,
)
