import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { updateUsers } from "../../features/auth/authSlice";
import { reset } from "../../features/auth/authSlice";

function UpdateUser() {
  const { user } = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    password: "",
    password2: "",
  });
  const { password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, message, isError } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   if (isSuccess) {
  //     notification.success({
  //       message: " exito",

  //       description: message,
  //     });
  //   }
  //   if (isError) {
  //     notification.error({ message: "Error", description: message });
  //   }
  //   dispatch(reset());
  // }, [isSuccess, isError, message]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({
        message: "Error",
        description: "Passwords do not match",
      });
    } else {
      dispatch(updateUsers(formData));
      notification.success({
        message: "Success",
        description: "You have successfully update",
      });
    }
  };

  return (
    <>
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
              <p className="numberCircle col-sm-10">{user.wishList.length}</p>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title">Seguridad</h4>
          </div>
          <div className="panel-body">
            <form onSubmit={onSubmit} className="form-horizontal">
              <div className="form-group">
                <label className="col-sm-2 control-label">
                  Password actual
                </label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    name="password"
                    id="pwd"
                    placeholder="tu Password"
                    onChange={onChange}
                    value={password}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">Nuevo password</label>
                <div className="col-sm-10">
                  <input
                    type="password"
                    name="password2"
                    id="pwd2"
                    placeholder="repita password"
                    onChange={onChange}
                    value={password2}
                  />
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
            </form>
          </div>
        </div>
      </form>
    </>
  );
}

export default UpdateUser;
