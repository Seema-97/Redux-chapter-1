import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {},
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    formFillUp: (state, action) => {
      return {
        formData: {
          ...state.formData,
          [action.payload?.name]: action.payload?.value,
        },
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { formFillUp } = formSlice.actions;

export default formSlice.reducer;
