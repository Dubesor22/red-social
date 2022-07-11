import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout, getUserById } from "../../features/auth/authSlice";
import { notification } from "antd";
import "../Feed/Feed.scss";
const API_URL = "http://localhost:8080/users/";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth.user);

  const onLogout = () => {
    dispatch(logout());
    notification.success({ message: "Hasta la proxima!" });
    navigate("/login");
  };

  const goHome = () => {
    navigate("/feed");
  };

  useEffect(() => {
    dispatch(getUserById(user._id));
  }, []);

  return (
    <>
      <div className="container outside">
        <div className="col-lg-8 container-fluid">
          <div className="panel profile-cover">
            <Link to="/profile">
              <div className="profile-cover__img">
                <img src={API_URL + user.avatar} alt="avatar" />
                <h3 className="h3">{user.username}</h3>
              </div>
            </Link>
            <div className="profile-cover__action bg--img" data-overlay="0.3">
              <button onClick={goHome} className="btn btn-rounded btn-info">
                Home
              </button>
              {user.role === "admin" ? (
                <button
                  onClick={() => navigate("/admin")}
                  className="btn btn-rounded btn-info"
                >
                  <span>Admin Pannel</span>
                </button>
              ) : (
                <button
                  onClick={() => navigate("/profile")}
                  className="btn btn-rounded btn-info"
                >
                  <span>Profile</span>
                </button>
              )}
              <button onClick={onLogout} className="btn btn-rounded btn-info">
                Salir
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
                  <strong>{user?.following.length} </strong>Siguiendo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
