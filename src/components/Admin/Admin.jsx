import PostAdmin from "./PostAdmin";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../features/posts/PostsSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const Admin = () => {
  const { isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getPostsAndReset = async () => {
    await dispatch(getAll());
    await dispatch(reset());
  };
  useEffect(() => {
    getPostsAndReset();
  }, []);

  if (isLoading) {
    return <h1>Cargando posts...</h1>;
  }
  return (
    <div>
      <Header />
      <PostAdmin />
    </div>
  );
};

export default Admin;
