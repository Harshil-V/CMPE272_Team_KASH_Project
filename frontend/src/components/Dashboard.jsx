import { Auth } from "aws-amplify";
import { useState } from "react";
import NavigationBar from "./NavBar";
import StudentDashboard from "../pages/StudentDashboard";

const Dashboard = () => {

    const [authUserEmail, setAuthUserEmail] = useState("");
    const [authGroups, setAuthGroups] = useState([]);
    const containsStudents = authGroups.includes('Students');
    const containsAdmins = authGroups.includes('Admin');
    const containsTeachers = authGroups.includes('Teachers');


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

                { containsAdmins &&
                    <>
                        {/* TODO: ADD ADMIN DASHBOARD */}
                    </>
                }

                { containsStudents &&
                    <StudentDashboard />
                }

                { containsTeachers &&
                    <>
                        {/* TODO: ADD TEACHER DASHBOARD */}
                    </>
                }
            </div>
        )
    );
};

export default Dashboard;