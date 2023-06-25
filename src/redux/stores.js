import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "./actions/apiCall";

const initialState = {
  stores: null,
  creation: false,
  oneStore: null
};

const storingSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    storeData: (state, action)=>{
      state.stores = action.payload.data
    },    
    createData: (state, action)=>{
      state.creation = !state.creation
    }, 
    updateData: (state, action)=>{
      state.creation = !state.creation
    },
    editData: (state, action)=>{
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
    url: "stores/getAll.php",
    method: "get",
    onSuccess: storingSlice.actions.storeData.type,
    onFailed: storingSlice.actions.storeData.type,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export const createStores = (name) =>{
  const data = new FormData();
  data.append('name', name);
  
  return apiCall({
    url: "stores/create.php",
    method: "post",
    data,
    onSuccess: storingSlice.actions.createData.type,
    onFailed: storingSlice.actions.createData.type,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
}

export const updateStores = (name, id) =>{
  const data = new FormData();
  data.append('name', name);
  data.append('id', id);
  
  return apiCall({
    url: "stores/update.php",
    method: "post",
    data,
    onSuccess: storingSlice.actions.createData.type,
    onFailed: storingSlice.actions.createData.type,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
}

export const deleteStores = (id) =>{
  const data = new FormData();
  data.append('id', id);
  
  return apiCall({
    url: "stores/delete.php",
    method: "post",
    data,
    onSuccess: storingSlice.actions.deleteData.type,
    onFailed: storingSlice.actions.deleteData.type,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
}



export const { storeData, editData } = storingSlice.actions;
export default storingSlice.reducer;