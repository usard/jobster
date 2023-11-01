import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customAxios from "../../utils/axios";
import { toast } from "react-toastify";
import { showLoading, hideLoading, findJobs } from "../Search/searchJobSlice";
import { useDispatch, useSelector } from "react-redux";

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
export const editJob = createAsyncThunk(
  "job/editJob",
  async (job, thunkAPI) => {
    // const dispatch = useDispatch();
    const data = thunkAPI.getState().job;
    // console.log()
    const { editJobId: jobID } = job;

    console.log("updted data for server :", data);
    try {
      const response = await customAxios.patch(`/jobs/${jobID}`, data);
      return response.data;
    } catch (error) {
      console.log("error in editing job :", error.response.data.config);
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
    setJobId: (state, { payload }) => {
      const { editJobId, company, position, status, jobLocation, jobType } =
        payload;
      console.log("payload  for edit in reducer :", payload);
      state.isEditing = true;
      state.editJobId = editJobId;
      state.company = company;
      state.position = position;
      state.status = status;
      state.jobLocation = jobLocation;
      state.jobType = jobType;
    },
    // changePageToEdit: (state, { payload }) => {
    //   state.isEditing = true;
    //   state.editJobId = payload.job_id;
    // },
    handleInput: (state, { payload }) => {
      const { name, value } = payload;
      console.log("values in handleINput dispathc :", payload);
      state[name] = value;
    },
    clearJob: (state) => {
      console.log("state in clear job bedor :", state);
      state.editJobId = "";
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
        console.log("payload for new job from server :", payload);
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
      })
      .addCase(editJob.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        toast.success("updated successfully");
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { handleInput, clearJob, changePageToEdit, setJobId } =
  jobSlice.actions;
export default jobSlice.reducer;
