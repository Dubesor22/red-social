import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentsService from "./commentsService";

const initialState = {
  comments: [],
  isLoading: false,
  comment: {},
}

export const commentCreate = createAsyncThunk("comments/commentCreate", async (comment) => {
  try {
    return await commentsService.commentCreate(comment); 
  } catch (err) {
    console.error(err);
  }
});



export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    reset:(state) => {
    state.isLoading = false;
  },
},
 extraReducers: (builder) => {
  builder.addCase(commentCreate.fulfilled, (state, action) => {
    state.comments.push(action.payload);
  });
}
  
});
export default commentsSlice.reducer;
