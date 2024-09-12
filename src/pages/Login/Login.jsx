import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, logoutAction } from '../../redux/loginSlice'



const Login = () => {

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn) 
  const dispatch = useDispatch()
 
   console.log(isLoggedIn)
  return (
    <>
    
   { isLoggedIn ? (<button className='btn btn-primary' onClick={()=> {dispatch(logoutAction())}}>LogOut</button>) :
   (<button className='btn btn-primary' onClick={()=> {dispatch(loginAction())}}>LogIn</button> )}
  
    </>

  )
}

export default Login