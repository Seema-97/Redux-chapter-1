// import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleOpen, loginAction, logoutAction } from '../../redux/loginSlice'


const LogoutMessage = "You are LOGGED OUT successfully!";
const LoginMessage = "You are logged in successfully!";


const Login = () => {

  const status = useSelector((state) => state.login.satus)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutAction(LogoutMessage));
    handleTimer();
  }

  const handleLogin = () => {
    dispatch(loginAction(LoginMessage))
    handleTimer();
  }



  const handleTimer = () => {
    dispatch(handleOpen(true))

    setTimeout(() => {
      dispatch(handleOpen(false))
    }, 3000);
  }

  return (
    <>

      {status.isLoggedIn ? (
        <button className='btn btn-primary' onClick={handleLogin}>LogIn</button>
      ) :
        (<button className='btn btn-danger' onClick={handleLogout}>LogOut</button>)}

    </>

  )
}

export default Login