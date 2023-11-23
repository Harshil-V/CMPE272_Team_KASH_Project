import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Auth } from 'aws-amplify';
import { useState } from 'react';

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

function NavigationBar() {

    const [authUser, setAuthUser] = useState("");
    const [authGroups, setAuthGroups] = useState([]);
    // const [authGroups, setAuthGroups] = useState([]);
    // const [authUserEmail, setAuthUserEmail] = useState("");
    const constainsStudents = authGroups.includes('Students')
    const constainsAdmins = authGroups.includes('Admin')

    Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => {
        const groups = user.signInUserSession.idToken.payload['cognito:groups'];
        setAuthGroups(groups);
        setAuthUser(user.attributes.email)
    }).catch(err => {
        console.log(err)
    });

    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="">
                    <svg style={{ marginBottom: 3 }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg> School System</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />



                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        {
                            constainsAdmins &&
                            <>
                                <Nav.Link href="">Admin</Nav.Link>
                            </>
                        }

                        {
                            constainsStudents &&
                            <>
                                <Nav.Link href="">Home</Nav.Link>
                                <Nav.Link href="">Courses</Nav.Link>
                                <Nav.Link href="">Grades</Nav.Link>
                            </>
                        }


                        <Nav.Link style={{ color: 'red', }} onClick={signOut}>Logout</Nav.Link>

                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Navbar.Text>
                        Signed in as: <a href="/profile">{authUser}</a>
                    </Navbar.Text>

                </Navbar.Collapse>

                {/* :
                        <>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Login</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </> */}


            </Container>
        </Navbar>
    );
}

export default NavigationBar;