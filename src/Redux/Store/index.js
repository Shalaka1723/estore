import { configureStore } from "@reduxjs/toolkit";
import categorySlice from '../../Redux/Category/categorySlice.js';

export const store = configureStore({
  reducer:{
    categoryReducer : categorySlice
  }
});