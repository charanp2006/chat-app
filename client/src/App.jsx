import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import { Toaster } from 'react-hot-toast'
import { AuthContext } from '../context/AuthContext'

const App = () => {

  const { authUser } = useContext(AuthContext)

  return (
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain">
      <Toaster/>
      <Routes>
        <Route element={authUser ? <Homepage/> : <Navigate to={"/login"} /> } path='/'/>
        <Route element={!authUser ? <LoginPage/> : <Navigate to={"/"} /> }  path='/login'/>
        <Route element={authUser ? <ProfilePage/> : <Navigate to={"/login"} /> } path='/profile'/>
      </Routes>
    </div>
  )
}

export default App
