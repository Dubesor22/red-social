import React, { useEffect } from "react";
import "./Profile.scss";
import { useSelector, useDispatch } from "react-redux";
import UserPosts from "./UserPosts/UserPosts";
import { getUserById } from "../../features/auth/authSlice";
import Header from "../Header/Header";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.user);

  console.log(user);

  useEffect(() => {
    dispatch(getUserById(user._id));
  }, []);
  if (!user) {
    return <span>cargando</span>;
  }
  return (
    <>
      <Header />
      <div className="container outside">
        <div className="col-lg-8 container-fluid">
          <form className="form-horizontal">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">Tu info Personal</h4>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label className="col-sm-2 control-label">
                    Nombre de usuario:
                  </label>
                  <div className="col-sm-10">
                    <input
                      value={user.username}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">email:</label>
                  <div className="col-sm-10">
                    <input
                      value={user.email}
                      type="email"
                      className="form-control"
                    />
                  </div>
                </div>
                <br />
                <div className="container d-flex justify-content-start gap-5 form-group">
                  <label className="col-sm-2 control-label">
                    Cuantos Posts te Han gustado:{" "}
                  </label>
                  <p className="numberCircle col-sm-10">
                    {user.wishList.length}
                  </p>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">Seguridad</h4>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label className="col-sm-2 control-label">
                    Password actual
                  </label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">
                    Nuevo password
                  </label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <div className="col-sm-10 col-sm-offset-2">
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                    <button type="reset" className="btn btn-default">
                      Volver
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <UserPosts />
        </div>
      </div>
    </>
  );
};

export default Profile;
