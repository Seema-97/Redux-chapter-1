import { configureStore } from '@reduxjs/toolkit' 
import counterReducer from './counterSlice'
import formReducer from './formSlice'
import loginReducer from './loginSlice'
 

  export const store = configureStore({
    reducer : {
        counter : counterReducer,
        form : formReducer,
        login : loginReducer
    }
  })