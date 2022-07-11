import PostAdmin from "./PostAdmin";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../features/posts/PostsSlice";
import { useEffect } from "react";
import Header from "../Header/Header";
import { Space, Spin } from "antd";

const Admin = () => {
  const { isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const getPostsAndReset = async () => {
    await dispatch(getAll());
    await dispatch(reset());
  };
  useEffect(() => {
    getPostsAndReset();
  }, []);

  if (isLoading) {
    return (
      <Space className="spin">
        <Spin size="large" />
      </Space>
    );
  }

  return (
    <div>
      <Header />
      <PostAdmin />
    </div>
  );
};

export default Admin;
