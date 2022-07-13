import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { register, reset } from "../../features/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const { username, email, password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Success",

        description: message,
      });
    }

    if (isError) {
      notification.error({ message: "Error", description: message });
    }
    dispatch(reset());
  }, [isSuccess, isError, message]);

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
      dispatch(register(formData));
      notification.success({
        message: "Success",
        description: "You have successfully registered",
      });
      // navigate("/login");
    }
  };
  return (
    <div className="outside">
      <div className="wrapper">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcswt2V3g7HF51V44xQVqfetJq7B_QkB9zKA&usqp=CAU"
            alt="logo"
          />
        </div>
        <div className="text-center mt-4 name">registrate en Stratos</div>
        <form onSubmit={onSubmit} className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-user"></span>
            <input
              type="test"
              name="username"
              id="username"
              placeholder="tu usuario"
              value={username}
              onChange={onChange}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-envelope-o"></span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="tu email"
              onChange={onChange}
              value={email}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <i className="fa fa-key" aria-hidden="true"></i>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="tu Password"
              onChange={onChange}
              value={password}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fa fa-key"></span>
            <input
              type="password"
              name="password2"
              id="pwd2"
              placeholder="repita password"
              onChange={onChange}
              value={password2}
            />
          </div>
          <button type="submit" className="btn mt-3">
            Registrate
          </button>
        </form>
        <div className="text-center fs-6">
          <Link to="/login">Ya tienes una cuenta?</Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
