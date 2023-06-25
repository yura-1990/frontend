import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "./actions/apiCall";

const initialState = {
  user: null,
  error: null,
  authorized: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem('token', action.payload.data.token)
      state.authorized = true
    },
    loginFailure: (state, action) => {
      console.log(action.payload);
    },
    logout: (state, action) => {
      localStorage.removeItem('token');
      state.user = null
      state.authorized = false
    },
    userData: (state, action)=>{
      state.user = action.payload
      state.authorized = true
    }
  },
});

export const register = (name, email, password) =>{
  const data = new FormData();
  data.append('name', name);
  data.append('email', email);
  data.append('password', password);
  
  return apiCall({
    url: "users/create.php",
    method: "post",
    data,
    onSuccess: authSlice.actions.loginSuccess.type,
    onFailed: authSlice.actions.loginSuccess.type,
    headers: {'Content-Type': 'multipart/form-data'}
  });
}

export const login = (email, password) =>{
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);
  
  return apiCall({
    url: "users/login.php",
    method: "post",
    data,
    onSuccess: authSlice.actions.loginSuccess.type,
    onFailed: authSlice.actions.loginSuccess.type,
    headers: {'Content-Type': 'multipart/form-data'}
  });
}

export const { loginSuccess, loginFailure, logout, userData } = authSlice.actions;

export default authSlice.reducer;
