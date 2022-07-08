import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { notification } from "antd";
import "./Feed.scss";
import Header from "../Header/Header";
import Posts from "./Posts/Posts";
import PostCreate from "../PostCreate/PostCreate";

const API = "http://stratos-backend.herokuapp.com/users/";

const Feed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth.user);
  const [text, setText] = useState("");

  console.log(user);
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate(`/search/${text}`);
    }
  };

  const onLogout = () => {
    dispatch(logout());
    notification.success({ message: "Hasta la proxima!" });
    navigate("/login");
  };

  return (
    <>
      <Header />
      <div className="container outside">
        <div className="col-lg-8 container-fluid">
          <div className="panel">
            <div className="panel-heading">
              <h3 className="panel-title">Actividad</h3>
              <div>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input
                  className="search-box"
                  onKeyUp={handleChange}
                  placeholder="search post"
                  name="text"
                />
              </div>
            </div>
            <div className="panel-content panel-activity">
              <PostCreate />
              <ul className="panel-activity__list">
                <Posts />
                <li>
                  <i className="activity__list__icon fa fa-image"></i>
                  <div className="activity__list__header">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt="avatar"
                    />
                    <a href="#">{user.username}</a> Uploaded 4 Image:{" "}
                    <a href="#">Mis colegas de la ofi:</a>
                  </div>
                  <div className="activity__list__body entry-content">
                    <ul className="gallery">
                      <li>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          alt="img"
                        />
                      </li>
                      <li>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          alt="img"
                        />
                      </li>
                      <li>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar3.png"
                          alt="img"
                        />
                      </li>
                      <li>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar4.png"
                          alt="img"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="activity__list__footer">
                    <a href="#">
                      {" "}
                      <i className="fa fa-thumbs-up"></i>123
                    </a>
                    <a href="#">
                      {" "}
                      <i className="fa fa-comments"></i>23
                    </a>
                    <span>
                      {" "}
                      <i className="fa fa-clock"></i>hace 2 horas
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
