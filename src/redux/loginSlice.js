import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   isLoggedIn : false
  };


export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginAction: (state) => { 
       state.isLoggedIn = true
    },
    logoutAction : (state) =>{
        state.isLoggedIn = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginAction , logoutAction } = loginSlice.actions

export default loginSlice.reducer