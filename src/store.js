import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./features/User/userSlice";
import jobSliceReducer from "./features/Job/jobSlice";
import searchJobSliceReducer from "./features/Search/searchJobSlice";
export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    job: jobSliceReducer,
    search: searchJobSliceReducer,
  },
});
