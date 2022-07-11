import { Navigate } from "react-router-dom";

const LoginZone = ({ children }) => {
  const user = localStorage.getItem("user");
  return user ? <Navigate to="/feed" /> : children;
};

export default LoginZone;
