import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customAxios from "../../utils/axios";
import { toast } from "react-toastify";
import { showLoading, hideLoading, findJobs } from "../Search/searchJobSlice";

export const newJob = createAsyncThunk("job/newJob", async (job, thunkAPI) => {
  try {
    const data = job;
    const response = await customAxios.post("/jobs", data);
    console.log("reponse after submit :", response);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
});

export const deleteJob = createAsyncThunk(
  "job/deleteJob",
  async (jobID, thunkAPI) => {
    thunkAPI.dispatch(showLoading());
    try {
      const response = await customAxios.delete(`/jobs/${jobID}`);
      thunkAPI.dispatch(findJobs());
      return response.data;
    } catch (error) {
      toast.error(error.response.data.config);
      thunkAPI.dispatch(hideLoading());
      return thunkAPI.rejectWithValue(error.response.data.config);
    }
  }
);

const jobSlice = createSlice({
  // name: "job",
  // initialState: {
  //   isLoading: false,
  //   name: "",
  //   position: "",
  //   jobLocation: "",
  //   jobType: "",
  //   jobTypeOptions: ["partime", "fulltime"],
  //   company: "",
  //   status: "",
  //   statusOptions: ["pending", "rejected", "accepted"],
  // },
  name: "job",
  initialState: {
    isLoading: false,
    position: "",
    company: "",
    jobLocation: "",
    jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
    jobType: "full-time",
    statusOptions: ["interview", "declined", "pending"],
    status: "pending",
    isEditing: false,
    editJobId: "",
    isError: null,
  },
  reducers: {
    handleInput: (state, { payload }) => {
      const { name, value } = payload;
      console.log("values in handleINput dispathc :", payload);
      state[name] = value;
    },
    clearJob: (state) => {
      console.log("state in clear job bedor :", state);
      state.isLoading = false;
      state.company = "";
      state.position = "";
      state.jobLocation = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(newJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newJob.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { job } = payload;
        state.jobData = job;
      })
      .addCase(newJob.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteJob.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log("deleteJob :", payload);
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { handleInput, clearJob } = jobSlice.actions;
export default jobSlice.reducer;
