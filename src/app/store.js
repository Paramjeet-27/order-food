import { configureStore } from "@reduxjs/toolkit";
import thaliItemsReducer from "./../reducers/thaliSlice";

export default configureStore({
  reducer: {
    thaliItems: thaliItemsReducer,
  },
});
