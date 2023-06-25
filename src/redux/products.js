import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "./actions/apiCall";

const initialState = {
  products: null,
  creation: false,
  oneStore: null
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productData: (state, action)=>{
      state.products = action.payload.data
    },    
    createData: (state, action)=>{
      state.creation = !state.creation
    }, 
    updateData: (state, action)=>{
      state.creation = !state.creation
    },
    editProductData: (state, action)=>{
      state.oneStore = action.payload
    },
    deleteData: (state, action)=>{
      console.log(action.payload)
      state.creation = !state.creation
    },
  },
});

export const getAllData = () =>{
  return apiCall({
    url: "products/getAll.php",
    method: "get",
    onSuccess: productSlice.actions.productData.type,
    onFailed: productSlice.actions.productData.type,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export const { productData, editProductData } = productSlice.actions;
export default productSlice.reducer;
