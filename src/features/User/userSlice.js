import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customAxios from "../../utils/axios";
import { toast } from "react-toastify";

export const updateUserLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const getUserFromLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
};
export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      console.log("user :", user);
      const data = user;
      // console.log("registered user:", user);
      const response = await customAxios.post("/auth/register", data);
      console.log("response :", response);
      return response.data;
    } catch (error) {
      console.log("error :", error.response.data.msg);
      toast.error("error :", error.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser", // action name
  async (user, thunkAPI) => {
    try {
      console.log("logged in user :", user);
      const data = user;
      // console.log("data in thunk for login :", user);
      const response = await customAxios.post("/auth/login", data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  try {
    const response = await customAxios.post("/auth/logout");
  } catch (error) {}
});
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    const data = user;
    console.log("data dispatched :", data);
    try {
      const response = await customAxios.patch("/auth/updateUser", data);
      return response.data;
    } catch (error) {
      // return error.response.data.msg;
      if ((error.response.data.status = 401)) {
        return thunkAPI.rejectWithValue("UnAuthorized, Logging out...");
      }
      return thunkAPI.rejectWithValue(error.reponse.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    userData: getUserFromLocalStorage(),
  },

  reducers: {
    // login: (state) => {},
    // register: (state) => {},
  },
  // extraReducers: {
  //   [registerUser.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [registerUser.fulfilled]: (state, { payload }) => {
  //     state.isLoading = false;
  //     // const { user } = payload;
  //     console.log("user from server :", payload);
  //     // state.user = user;
  //   },
  //   [registerUser.rejected]: (state) => {
  //     state.isLoading = false;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      // .addCase(registerUser.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(registerUser.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   console.log("@@@@@@@@@ ", payload);
      //   const { user } = payload;
      //   state.isLoading = false;
      //   state.userData = user;
      // })
      // .addCase(registerUser.rejected, (state) => {
      //   state.isLoading = false;
      // })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        console.log("payload on login :", payload);
        state.isLoading = false;
        console.log("payload :", payload);
        const { user } = payload;
        addUserToLocalStorage(user);
        state.userData = user;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        console.log("login rejected");
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        // state.user = [];
      })
      .addCase(logoutUser.rejected, (state) => {
        state.isLoading = false;
        console.log("logout rejected");
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { user } = payload;
        console.log("user fulfilled :", payload);
        state.userData = user;
        updateUserLocalStorage(user);
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = userSlice.actions; // this is an action creator

export default userSlice.reducer;
