import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./features/User/userSlice";
import jobSliceReducer from "./features/Job/jobSlice";
import jobSlice from "./features/Job/jobSlice";
export const store = configureStore({
  reducer: { user: userSliceReducer, job: jobSliceReducer },
});
