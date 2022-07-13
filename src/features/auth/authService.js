import axios from "axios";

const API_URL = "https://stratos-backend.herokuapp.com";

const register = async (userdata) => {
  const res = await axios.post(API_URL + "/users", userdata);
  return res.data;
};

const updateUsers = async (data) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(API_URL + "/users/", data, {
    headers: {
      authorization: user.token,
    },
  });
  if (res.data) {
    localStorage.setItem("userUpdated", JSON.stringify(res.data));
  }
  return res.data;
};

const login = async (userdata) => {
  const res = await axios.post(API_URL + "/users/login", userdata);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
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
const follow = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(
    API_URL + "/users/follow/" + _id,
    {},
    {
      headers: {
        authorization: user?.token,
      },
    }
  );
  if (res.data) {
    localStorage.setItem(
      "user",
      JSON.stringify({ user: res.data.user2, token: res.data.user2.tokens[0] })
    );
  }
  return res.data;
};

const unfollow = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(
    API_URL + "/users/unfollow/" + _id,
    {},
    {
      headers: {
        authorization: user?.token,
      },
    }
  );
  if (res.data) {
    localStorage.setItem(
      "user",
      JSON.stringify({ user: res.data.user2, token: res.data.user2.tokens[0] })
    );
  }
  return res.data;
};

const getUsers = async () => {
  const res = await axios.get(API_URL + "/users");
  return res.data;
};

const authService = {
  register,
  login,
  logout,
  getUserById,
  follow,
  unfollow,
  getUsers,
  updateUsers,
};

export default authService;
