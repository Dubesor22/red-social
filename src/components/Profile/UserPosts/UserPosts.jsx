import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserById } from "../../../features/auth/authSlice";
import { Link } from "react-router-dom";
import { deletePost } from "../../../features/posts/PostsSlice";
import "./UserPosts.scss";

const API = "http://localhost:8080/users/";

function UserPosts() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getUserById(user._id));
  }, []);
  if (!user) {
    return <span>cargando</span>;
  }
  const userPosts = user.postIds?.map((post) => {
    console.log(post);
    return (
      <>
        <div className="card" key={post?._id}>
          <div className="card-header">{post?.title}</div>
          <div className="card-body">
            <Link to={"/post/id/" + post?._id}>
              <p className="card-text post-body">{post?.body}</p>
            </Link>
          </div>
          <div class="card-footer text-muted">
            <span>
              <i
                onClick={() => dispatch(deletePost(post._id))}
                className="fa fa-trash"
              >
                {" "}
                <span>Eliminar</span>
              </i>
            </span>
          </div>
        </div>
      </>
    );
  });
  return <div>{userPosts}</div>;
}

export default UserPosts;
