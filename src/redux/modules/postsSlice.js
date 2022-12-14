import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

const initialState = {
  postsList: [],
};

export const _postsList = createAsyncThunk(
  "getPostsList",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.get(`posts/all/${payload}`);
      if (response.data.success === false) {
        return (
          window.alert("로그인이 만료되었습니다"),
          console.log(response),
          localStorage.clear(),
          window.location.replace("/")
        );
      } else {
        return thunkAPI.fulfillWithValue(response.data.data);
      }
    } catch (e) {
      return (
        window.alert("로그인이 만료되었습니다"),
        localStorage.clear(),
        window.location.replace("/")
      );
    }
  }
);

export const addPostsList = createAsyncThunk(
  "addPostsList",
  async (payload, thunkAPI) => {
    console.log("12321321312321123", payload);
    try {
      const response = await instance.post("posts", payload, {
        "Content-Type": "multipart/form-data",
      });
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const editPostsList = createAsyncThunk(
  "editPostsList",
  async (payload, thunkAPI) => {
    // payload = data
    // postId = author ????

    try {
      const response = await instance.put(
        `posts/${payload.postId}`,
        payload.formData,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      return thunkAPI.fulfillWithValue(response.data);
      // return console.log("3333333333", response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePostsList = createAsyncThunk(
  "deletePostsList",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.delete(`posts/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// 게시물 좋아요 /posts/{postId}/like
export const likeCntThunk = createAsyncThunk(
  "postLikeCnt",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.post(`posts/${payload}/like`);
      // return console.log(response.data.data);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postsListSlice = createSlice({
  name: "postsList",
  initialState,
  reducers: {
    onAddCommentHandler: (state, action) => {
      state.postsList.map((post) => {
        if (post.postId == action.payload.postId) {
          return (post.commentCnt = post.commentCnt + 1);
        } else {
          return post;
        }
      });
    },

    onModalApearHandler: (state, action) => {
      state.postsList.map((post) => {
        if (post.postId == action.payload.postId) {
          return (post.isModalMode = !post.isModalMode);
        } else {
          return post;
        }
      });
    },

    onDetailLikeHandler: (state, action) => {
      state.postsList.map((post) => {
        if (post.postId == action.payload) {
          return (
            (post.isLike = !post.isLike),
            post.isLike
              ? (post.postLikeCnt = post.postLikeCnt + 1)
              : (post.postLikeCnt = post.postLikeCnt - 1)
          );
        } else {
          return post;
        }
      });
    },
  },

  extraReducers: {
    [_postsList.fulfilled]: (state, action) => {
      state.postsList = action.payload;
    },
    [_postsList.rejected]: (state, action) => {
      console.log(action);
    },
    [addPostsList.fulfilled]: (state, action) => {
      state.postsList = [...state.postsList, action.payload];
    },
    [addPostsList.rejected]: (state, action) => {
      console.log(action);
    },
    [editPostsList.fulfilled]: (state, action) => {
      state.postsList = state.postsList.map((item, index) => {
        if (item.postId === action.payload.postId) {
          return {
            ...item,
            content: action.payload.content,
            imgUrl: action.payload.imgUrl,
          };
        } else {
          return { ...item };
        }
      });
    },
    [editPostsList.rejected]: (state, action) => {
      console.log(action);
    },
    [deletePostsList.fulfilled]: (state, action) => {
      state.postsList = state.postsList.filter(
        (post) => post.postId != action.payload
      );
    },
    [deletePostsList.rejected]: (state, action) => {
      console.log(action);
    },
    [likeCntThunk.fulfilled]: (state, action) => {
      state.postsList.map((post) => {
        if (post.postId == action.payload.postId) {
          return (
            (post.isLike = action.payload.isLike),
            (post.postLikeCnt = action.payload.postLikeCnt)
          );
        } else {
          return post;
        }
      });
    },
  },
});

export const { onAddCommentHandler, onModalApearHandler, onDetailLikeHandler } =
  postsListSlice.actions;
export default postsListSlice.reducer;
