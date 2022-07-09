import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getById } from "../../features/posts/PostsSlice";
import { logout } from "../../features/auth/authSlice";
import { Card } from "antd";
import "./PostDetail.scss";

const API = "https://stratos-backend.herokuapp.com/users/";

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
      <div className="container">
        <div className="col-lg-8 container-fluid">
          <div className="panel profile-cover">
            <Link to="/profile">
              <div className="profile-cover__img">
                <img src={API + user.avatar} alt="avatar" />
                <h3 className="h3">{user.username}</h3>
              </div>
            </Link>
            <div className="profile-cover__action bg--img" data-overlay="0.3">
              <button className="btn btn-rounded btn-info">
                <i className="fa fa-plus"></i>
                <span>Seguir</span>
              </button>
              <button className="btn btn-rounded btn-info">
                <span onClick={onLogout}>Salir</span>
              </button>
            </div>
            <div className="profile-cover__info">
              <ul className="nav">
                <li>
                  <strong>{user.postIds.length}</strong>Posts
                </li>
                <li>
                  <strong>{user.followers.length}</strong>Seguidores
                </li>
                <li>
                  <strong>0</strong>Siguiendo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
