import { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import AWS from 'aws-sdk';


const UserList = () => {
    // const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                // Get the current authenticated user
                const currentUser = await Auth.currentAuthenticatedUser();
                const currentSession = await Auth.currentSession();
                console.log('Token Expiration:', new Date(currentSession.idToken.payload.exp * 1000));
                // Set up AWS SDK using the user's credentials
                AWS.config.update({
                    accessKeyId: currentUser.signInUserSession.accessToken.payload.accessKeyId,
                    secretAccessKey: currentUser.signInUserSession.accessToken.payload.secretKey,
                    sessionToken: currentUser.signInUserSession.accessToken.payload.sessionToken,
                    region: 'us-west-2', // replace with your AWS region
                    // credentials: Auth.essentialCredentials(currentUser),
                });

                console.log('Current User:', currentUser);
                // console.log('Essential Credentials:', Auth.essentialCredentials(currentUser));


                // Create a Cognito IdentityServiceProvider object
                const cognitoISP = new AWS.CognitoIdentityServiceProvider();
                console.log(cognitoISP)
                // // Get the list of users from the User Pool
                const userList = await cognitoISP.listUsers({
                    UserPoolId: 'us-west-2_5OcKJK4oN', // replace with your User Pool ID
                }).promise();

                console.log(userList);
                // setUsers(userList.Users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User List</h2>
            {/* <ul>
                {users.map((user) => (
                    <li key={user.Username}>{user.Username}</li>
                ))}
            </ul> */}
        </div>
    );
};

export default UserList;
