import axios from "axios";

const API_URL = "https://stratos-backend.herokuapp.com";

const getUsersByName = async (name) => {
  const res = await axios.get(API_URL + "/users/searchByName/" + name);
  return res.data;
};

const deleteUsers = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + "/users/id/" + _id, {
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};

const getUsersById = async (_id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.get(API_URL + "/users/id/" + _id, {
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};

const usersService = {
  getUsersByName,
  deleteUsers,
  getUsersById,
};

export default usersService;
