import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getById } from "../../features/posts/PostsSlice";
import { logout } from "../../features/auth/authSlice";
import { Card } from "antd";
import Header from "../Header/Header";
import "./PostDetail.scss";

const API_URL = "https://stratos-backend.herokuapp.com/users/";

const PostDetail = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getById(_id));
  }, []);

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <Header />

      <Card title="Card title" className="post-card">
        <Card type="inner" title={post.title}>
          {post.body}
        </Card>
        <div className="activity__list__footer">
          <a href="#">
            {" "}
            <i className="fa fa-thumbs-up"></i>
            {post.likes?.length}
          </a>
          <a href="#">
            {" "}
            <i className="fa fa-comments"></i>
            {post.comments?.length}
          </a>
          <span>
            {" "}
            <i className="fa fa-clock"></i>
            {post.createdAt?.slice(0, 10)}
          </span>
        </div>
      </Card>
    </>
  );
};

export default PostDetail;
