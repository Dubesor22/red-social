import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  posts: [],
  isLoading: false,
  post: {},
};

export const getAll = createAsyncThunk("posts/getAll", async () => {
  try {
    return await postsService.getAll();
  } catch (err) {
    console.error(err);
  }
});

export const getPostByName = createAsyncThunk(
  "posts/getPostByName",
  async (postName) => {
    try {
      return await postsService.getPostByName(postName);
    } catch (err) {
      console.error(err);
    }
  }
);

export const getById = createAsyncThunk("posts/getById", async (id) => {
  try {
    return await postsService.getById(id);
  } catch (err) {
    console.error(err);
  }
});

export const postCreate = createAsyncThunk("posts/postCreate", async (post) => {
  try {
    return await postsService.postCreate(post);
  } catch (err) {
    console.error(err);
  }
});

export const deletePost = createAsyncThunk("posts/deletePost", async (_id) => {
  try {
    return await postsService.deletePost(_id);
  } catch (error) {
    console.error(error);
  }
});

export const deletePostAdmin = createAsyncThunk(
  "posts/deletePostAdmin",
  async (_id) => {
    try {
      return await postsService.deletePostAdmin(_id);
    } catch (error) {
      console.error(error);
    }
  }
);

export const like = createAsyncThunk("posts/like", async (_id) => {
  try {
    return await postsService.like(_id);
  } catch (error) {
    console.error(error);
  }
});

export const dislike = createAsyncThunk("posts/dislike", async (_id) => {
  try {
    return await postsService.dislike(_id);
  } catch (error) {
    console.error(error);
  }
});

export const update = createAsyncThunk("posts/update", async (post) => {
  try {
    return await postsService.update(post);
  } catch (error) {
    console.error(error);
  }
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(getAll.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getPostByName.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(getById.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(postCreate.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload.post._id
      );
    });
    builder.addCase(deletePostAdmin.fulfilled, (state, action) => {
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload.post._id
      );
    });
    builder.addCase(like.fulfilled, (state, action) => {
      const posts = state.posts.map((post) => {
        if (post._id === action.payload._id) {
          post = action.payload;
        }
        return post;
      });
      state.posts = posts;
    });
    builder.addCase(dislike.fulfilled, (state, action) => {
      const posts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) {
          post = action.payload.post;
        }
        return post;
      });
      state.posts = posts;
    });
    builder.addCase(update.fulfilled, (state, action) => {
      const posts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) {
          post = action.payload.post;
        }
        return post;
      });
      state.posts = posts;
    });
  },
});
export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
