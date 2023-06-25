import { configureStore } from "@reduxjs/toolkit";
import apiMiddleware from "../middleware/apiMiddleware";
import auth from "../auth";
import stores from "../stores";
import modal from "../modal";
import products from "../products"

export default configureStore({
  reducer:{
    auth,
    stores,
    modal,
    products
  },

  middleware:[
    apiMiddleware,
  ]
  
})