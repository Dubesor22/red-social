import React, { useEffect } from "react";
import Post from "./Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../../features/posts/PostsSlice";
import { Space, Spin } from "antd";
import "./Posts.scss";

const Posts = () => {
  const { isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const getAllPostAndReset = async () => {
    await dispatch(getAll());
    dispatch(reset());
  };

  useEffect(() => {
    getAllPostAndReset();
  }, []);

  if (isLoading) {
    return (
      <Space className="spin">
        <Spin size="large" />
      </Space>
    );
  }

  return (
    <>
      <Post />
    </>
  );
};

export default Posts;
