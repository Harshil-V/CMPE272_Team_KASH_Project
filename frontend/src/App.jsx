// import './App.css'
import Profile from './components/Profile'
// import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './components/Login'
// import LogoutButton from './components/Logout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
// import Dashboard from './pages/Dashboard'
import NavigationBar from './components/NavBar'
// import AdminLayout from './components/AdminLayout'

function App() {

  // const { isAuthenticated } = useAuth0();

  return (
    <>
      <BrowserRouter>
        <Routes>
           
            <Route index element={<NavigationBar />} />
            <Route path="login" element={<LoginButton />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* {
        isAuthenticated ?
          <>
            <Profile />
            <LogoutButton />
          </>

          :
          <LoginButton />
      } */}
    </>
  )
}

export default App
