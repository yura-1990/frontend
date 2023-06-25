import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  method: "Add",
  title: "Add Store",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toogleModal: (state, action)=>{
      state.showModal = !action.payload
    },
    changeMethod: (state, action)=>{
      state.method = action.payload
    },
    changeTitle: (state, action)=>{
      state.title = action.payload
    }
  },
});

export const { toogleModal, changeMethod, changeTitle } = modalSlice.actions;
export default modalSlice.reducer;