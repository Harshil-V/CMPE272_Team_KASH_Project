import { Auth } from "aws-amplify";
import { useState } from "react";
import BasicExample from "./NavBar";

const Profile = () => {
   
    const [authUserEmail, setAuthUserEmail] = useState("");
    const [authGroups, setAuthGroups] = useState([]);

    Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {
        // console.log(user)
        const groups = user.signInUserSession.idToken.payload['cognito:groups'];
        // console.log('User groups:', groups);
        setAuthGroups(groups)
        setAuthUserEmail(user.attributes.email)
    }).catch(err => {
        console.log(err)
    });

    return (
       

        authUserEmail && (
            <div>
                <BasicExample />
                <h2>{authUserEmail}</h2>
                <p>Group Status: {authGroups}</p>
                <p></p>
            </div>
        )
    );
};

export default Profile;