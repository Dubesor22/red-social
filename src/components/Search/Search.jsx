import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostByName } from "../../features/posts/PostsSlice";
import Post from "../Feed/Posts/Post/Post";
import Header from "../Header/Header";

const Search = () => {
  const { postName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostByName(postName));
  }, [postName]);

  return (
    <>
      <Header />
      <div className="container outside">
        <div className="col-lg-8 container-fluid">
          <h2 className="text-center">resultados de la busqueda</h2>
          <div className="panel">
            <Post />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
