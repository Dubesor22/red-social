import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./usersService";

const initialState = {
  users: [],
  user: {},
};

export const getUsers = createAsyncThunk("users/get", async () => {
  try {
    return await userService.getUsers();
  } catch (error) {
    console.error(error);
  }
});

export const getUsersByName = createAsyncThunk("users/byName", async (name) => {
  try {
    return await userService.getUsersByName(name);
  } catch (error) {
    console.error(error);
  }
});

export const deleteUsers = createAsyncThunk("users/delete", async (name) => {
  try {
    return await userService.deleteUsers(name);
  } catch (error) {
    console.error(error);
  }
});

// export const updateUsers = createAsyncThunk("users/update", async (data) => {
//   try {
//     return await userService.updateUsers(data);
//   } catch (error) {
//     console.error(error);
//   }
// });

export const getUsersById = createAsyncThunk("users/byId", async (_id) => {
  try {
    return await userService.getUsersById(_id);
  } catch (error) {
    console.error(error);
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
    resetSearch: (state) => {
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(getUsersByName.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.users = state.users.filter(
          (user) => user._id !== action.payload.user._id
        );
      })
      .addCase(getUsersById.fulfilled, (state, action) => {
        state.user = action.payload;
      });
    // .addCase(updateUsers.fulfilled, (state, action) =>{
    //   state.user = action.payload.user
    // })
  },
});

export const { reset, resetSearch } = usersSlice.actions;
export default usersSlice.reducer;
