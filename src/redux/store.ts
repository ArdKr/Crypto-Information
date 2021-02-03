import { configureStore } from "@reduxjs/toolkit";

// Import reducers
import currencyReducer from "./currencySlice";

export default configureStore({
  reducer: {
    currency: currencyReducer,
  },
});
