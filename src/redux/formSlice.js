import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   formData : {}
  };



export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    formFillUp: (state , dispatchParam) => { 
    //   state.formData = {
    //     ...state.formData,
    //     [dispatchParam.payload?.name]: dispatchParam.payload?.value
    // }

 
    if(dispatchParam.payload?.name === 'languagues'){
        return {
            formData : {
                ...state.formData,
                [dispatchParam.payload?.name]: [ ...state.formData.dispatchParam.payload?.name, dispatchParam.payload?.value]
            }
          }
    }
  else{
    return {
        formData : {
            ...state.formData,
            [dispatchParam.payload?.name]: dispatchParam.payload?.value
        }
      }

  }
      

    },
  },
})

// Action creators are generated for each case reducer function
export const { formFillUp } = formSlice.actions

export default formSlice.reducer