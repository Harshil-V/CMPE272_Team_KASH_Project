import { Auth } from "aws-amplify";
import { useState } from "react";
import NavigationBar from "./NavBar";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Dashboard = () => {

    const [authUserEmail, setAuthUserEmail] = useState("");
    // const [authGroups, setAuthGroups] = useState([]);

    Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {
        // const groups = user.signInUserSession.idToken.payload['cognito:groups'];
        // setAuthGroups(groups)
        setAuthUserEmail(user.attributes.email)
    }).catch(err => {
        console.log(err)
    });

    const [key, setKey] = useState('home');

    return (
        authUserEmail && (
            <div>
                <NavigationBar />


                <div style={{ padding: 8 }}>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Home">
                            Tab content for Home
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            Tab content for Profile
                        </Tab>
                        <Tab eventKey="contact" title="Contact" disabled>
                            Tab content for Contact
                        </Tab>
                    </Tabs>
                </div>
            </div>
        )
    );
};

export default Dashboard;