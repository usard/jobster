import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customAxios from "../../utils/axios";
import { toast } from "react-toastify";
// import { Navigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
const initialState = {
  searchText: "",
  status: "all",
  statusOptions: ["declined", "pending", "accepted"],
  jobType: "all",
  jobTypeOptions: ["full-time", "part-time", "internship", "remote"],
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
  page: 1,
  numOfPages: 1,
  jobs: [],
  stats: {},
  monthlyApplications: [],
};

export const showStats = createAsyncThunk(
  "search/showStats",
  async (_, thunkAPI) => {
    try {
      const response = await customAxios.get("/jobs/stats");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.config);
    }
  }
);
export const findJobs = createAsyncThunk(
  "search/findJobs",
  async (_, thunkAPI) => {
    try {
      const {
        searchText,
        status: searchStatus,
        jobType: searchType,
        sort,
        page,
      } = thunkAPI.getState().search;

      let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
      if (searchText) {
        url = url + `&search=${searchText}`;
      }
      console.log("url :", url);
      const response = await customAxios.get(url);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.msg + ", logging out...");
      console.log(error.response.data.msg);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
const searchJobSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleInput: (state, { payload }) => {
      console.log(" search job slice handleINput  :", payload);
      const { name, value } = payload;
      state[name] = value;
      state.page = 1;
    },
    changePage: (state, { payload }) => {
      const { name, value } = payload;
      state[name] = value;
    },
    showLoading: (state) => {
      console.log(state.isLoading, "isloading");
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(findJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(findJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.jobs = payload.jobs;
        state.numOfPages = payload.numOfPages;
        console.log("payload from server as response  :", payload);
      })
      .addCase(findJobs.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(showStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showStats.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.stats = payload.defaultStats;
        state.monthlyApplications = payload.monthlyApplications;
      })
      .addCase(showStats.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { handleInput, showLoading, hideLoading, changePage } =
  searchJobSlice.actions;
export default searchJobSlice.reducer;
