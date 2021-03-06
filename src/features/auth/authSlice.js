import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  message: "",
  users: [],
};

export const register = createAsyncThunk(
  "auth/register",

  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message = error.response.data.errors[0].message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateUsers = createAsyncThunk("auth/update", async (data) => {
  try {
    return await authService.updateUsers(data);
  } catch (error) {
    console.error(error);
  }
});

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message = error.response.data.message;

    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    return await authService.logout();
  } catch (error) {
    console.error(error);
  }
});

export const getUserById = createAsyncThunk("auth/getUserById", async (id) => {
  try {
    return await authService.getUserById(id);
  } catch (error) {
    console.error(error);
  }
});
export const follow = createAsyncThunk("users/follow", async (_id) => {
  try {
    return await authService.follow(_id);
  } catch (error) {
    console.error(error);
  }
});

export const unfollow = createAsyncThunk("users/unfollow", async (_id) => {
  try {
    return await authService.unfollow(_id);
  } catch (error) {
    console.error(error);
  }
});

export const getUsers = createAsyncThunk("users/get", async () => {
  try {
    return await authService.getUsers();
  } catch (error) {
    console.error(error);
  }
});
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateUsers.fulfilled, (state, action) => {
        state.userUpdated = action.payload;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.user = { user: action.payload, token: action.payload.tokens[0] };
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(follow.fulfilled, (state, action) => {
        const users = state.users.map((user) => {
          if (user._id === action.payload.user._id) {
            user = action.payload.user;
          }
          return user;
        });
        state.users = users;
        state.user = {
          user: action.payload.user2,
          token: action.payload.user2.tokens[0],
        };
      })
      .addCase(unfollow.fulfilled, (state, action) => {
        const users = state.users.map((user) => {
          if (user._id === action.payload.user._id) {
            user = action.payload.user;
          }
          return user;
        });
        state.users = users;
        state.user = {
          user: action.payload.user2,
          token: action.payload.user2.tokens[0],
        };
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});
export const { reset } = authSlice.actions;

export default authSlice.reducer;
