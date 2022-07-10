import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";

const Login = () => {
  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();
  const { isError, isSuccess, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  useEffect(() => {
    if (isError) {
      notification.error({ message: "Error", description: message });
    }

    if (isSuccess) {
      notification.success({ message: "Success", description: message });

      setTimeout(() => {
        navigate("/feed");
      }, 2000);
    }

    dispatch(reset());
  }, [isError, isSuccess, message]);

  // useEffect(() => {
  //   if (user) {
  //     console.log("user is already logged in");
  //     navigate("/feed");
  //   }
  // }, []);

  return (
    <div className="outside">
      <div className="wrapper">
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcswt2V3g7HF51V44xQVqfetJq7B_QkB9zKA&usqp=CAU"
            alt="logo"
          />
        </div>
        <div className="text-center mt-4 name">entra en Stratos</div>
        <form onSubmit={onSubmit} className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <i className="fa fa-key" aria-hidden="true"></i>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              onChange={onChange}
              value={password}
            />
          </div>
          <button type="submit" className="btn mt-3">
            Login
          </button>
        </form>
        <div className="text-center fs-6">
          <Link to="#">Forget password?</Link> or{" "}
          <Link to="/register">Sign up</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
