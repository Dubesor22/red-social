import axios from "axios";

const API_URL = "https://stratos-backend.herokuapp.com";

const register = async (userdata) => {
  const res = await axios.post(API_URL + "/users", userdata);
  return res.data;
};

const login = async (userdata) => {
  const res = await axios.post(API_URL + "/users/login", userdata);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  console.log(res.data);
  return res.data;
};

const getUserById = async (id) => {
  const res = await axios.get(API_URL + "/users/id/" + id);
  if (res.data) {
    localStorage.setItem(
      "user",
      JSON.stringify({ user: res.data, token: res.data.tokens[0] })
    );
  }
  return res.data;
};

const logout = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + "/users/logout", {
    headers: {
      authorization: user?.token,
    },
  });
  if (res.data) {
    localStorage.removeItem("user");
  }
  return res.data;
};

const authService = {
  register,
  login,
  logout,
  getUserById,
};

export default authService;
