import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  satus: {
    isLoggedIn: true,
    message: "",
  },
  isOpen: false,
};


export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.satus.isLoggedIn = false;
      state.satus.message = action.payload
    },
    logoutAction: (state, action) => {
      state.satus.isLoggedIn = true;
      state.satus.message = action.payload
    },
    handleOpen: (state, action) => {
      state.isOpen = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginAction, logoutAction, handleOpen } = loginSlice.actions

export default loginSlice.reducer