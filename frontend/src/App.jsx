// import './App.css'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

import Profile from './components/Profile'
// import { useAuth0 } from '@auth0/auth0-react'
// import LoginButton from './components/Login'
// import LogoutButton from './components/Logout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
// import Dashboard from './pages/Dashboard'
// import NavigationBar from './components/NavBar'
import Dashboard from './components/Dashboard';
// import ClassDetail from './pages/ClassDetails';
import ClassView from './pages/ClassView';
import Courses from './pages/Courses';
import GradesPage from './pages/StudentGrades';
import ManageClass from './pages/teacher/ManageClass';

import GradeAssignment from './components/teacher/GradeAssignment';
// import StudentDashboard from './pages/StudentDashboard';
// import SignUp from './components/SignUp'
// import ConfirmSignUp from './components/ConfirmSignUp'
// import CognitoIdentityProviderClient from '@aws-sdk/client-cognito-identity-provider'
// import AdminLayout from './components/AdminLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

            {/* <Route path="/" element={<NavigationBar />} /> */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/grades" element={<GradesPage />} />
            <Route path="/class/:className" element={<ClassView />} />
            <Route path="/course/:courseID" element={<GradeAssignment />} />
            <Route path="/manage/:className" element={<ManageClass />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

// import { Amplify } from 'aws-amplify';

// import { Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';

// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

// export default function App() {
//     return (
//         <Authenticator>
//             {({ user }) => (
//                 <>
//                     {
//                         user ?
//                             <>
//                               <p style={{color: 'red'}}>{user.attributes.email}</p>                              
//                                 <BrowserRouter>
//                                     <Routes>
//                                         <Route path="/" element={<NavigationBar />} />
//                                         <Route path="*" element={<NotFound />} />
//                                     </Routes>
//                                 </BrowserRouter>
//                             </> :
//                             <>
//                                 <p>Not Authenticated</p>
//                             </>
//                     }
//                 </>
//             )}
//         </Authenticator>
//     );
// }
