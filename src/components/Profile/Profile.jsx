import React, { useEffect } from "react";
import "./Profile.scss";
import { useSelector, useDispatch } from "react-redux";
import UserPosts from "./UserPosts/UserPosts";
import { getUserById } from "../../features/auth/authSlice";
import Header from "../Header/Header";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.user);

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
                  <label className="col-sm-2 control-label">Username</label>
                  <div className="col-sm-10">
                    <input
                      value={user.username}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">
                    E-mail address
                  </label>
                  <div className="col-sm-10">
                    <input
                      value={user.email}
                      type="email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Work address</label>
                  <div className="col-sm-10">
                    <textarea rows="3" className="form-control"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">Security</h4>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label className="col-sm-2 control-label">
                    Current password
                  </label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">New password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-10 col-sm-offset-2">
                    <div className="checkbox">
                      <input type="checkbox" id="checkbox_1" />
                      <label for="checkbox_1">Make this account public</label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-10 col-sm-offset-2">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    <button type="reset" className="btn btn-default">
                      Cancel
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
