import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout, getUserById } from "../../features/auth/authSlice";
import { notification } from "antd";
import "../Feed/Feed.scss";
const API_URL = "https://stratos-backend.herokuapp.com/users/";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const onLogout = async () => {
    await dispatch(logout());
    notification.success({ message: "Hasta la proxima!" });
    navigate("/login");
  };

  const goHome = () => {
    navigate("/feed");
  };

  useEffect(() => {
    dispatch(getUserById(user?.user?._id));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="col-lg-8 container-fluid">
          <div className="panel profile-cover">
            <Link to="/profile">
              <div className="profile-cover__img">
                <img src={API_URL + user?.user?.avatar} alt="avatar" />
                <h3 className="h3">{user?.user?.username}</h3>
              </div>
            </Link>

            <div className="profile-cover__action bg--img" data-overlay="0.3">
              <div className="button-box">
                <button onClick={goHome} className="btn btn-rounded btn-info">
                  Home
                </button>
                {user?.user?.role === "admin" ? (
                  <button
                    onClick={() => navigate("/admin")}
                    className="btn btn-rounded btn-info"
                  >
                    Admin
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/profile")}
                    className="btn btn-rounded btn-info"
                  >
                    Perfil
                  </button>
                )}
                <button onClick={onLogout} className="btn btn-rounded btn-info">
                  Salir
                </button>
              </div>
            </div>
            <div className="profile-cover__info">
              <ul className="nav">
                <li>
                  <strong>{user?.user?.postIds.length}</strong>Posts
                </li>
                <li>
                  <strong>{user?.user?.followers.length}</strong>Seguidores
                </li>
                <li>
                  <strong>{user?.user?.following.length} </strong>Siguiendo
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
