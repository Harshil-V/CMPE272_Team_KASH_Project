import { Auth } from "aws-amplify";
import { useState } from "react";
import NavigationBar from "./NavBar";
import Card from 'react-bootstrap/Card';
import UserList from "./admin/UserList";

const Profile = () => {

    const [authUserEmail, setAuthUserEmail] = useState("");
    const [authGroups, setAuthGroups] = useState([]);

    Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {
        const groups = user.signInUserSession.idToken.payload['cognito:groups'];
        setAuthGroups(groups)
        setAuthUserEmail(user.attributes.email)
    }).catch(err => {
        console.log(err)
    });

    return (


        authUserEmail && (
            <div>
                <NavigationBar />


                <div style={{ padding: 8 }}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{authUserEmail}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{authGroups}</Card.Subtitle>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>

                </div>
                <div>
                    <UserList /> {/* TODO: REMOVE IF UNUSED*/}
                </div>
            </div>
        )
    );
};

export default Profile;