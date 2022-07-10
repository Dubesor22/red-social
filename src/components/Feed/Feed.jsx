import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { notification, Sider, Layout, Content } from "antd";
import "./Feed.scss";
import Header from "../Header/Header";
import Posts from "./Posts/Posts";
import PostCreate from "../PostCreate/PostCreate";
import Users from "../Users/Users";

const Feed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth.user);
  const [text, setText] = useState("");

  // console.log(user);
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate(`/search/${text}`);
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid outside column">
        <Users />
        <div class="col-12">
          <div className="col-lg-12 container">
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
