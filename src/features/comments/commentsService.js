import axios from "axios";

const API_URL = "https://stratos-backend.herokuapp.com";

const commentCreate = async (comment) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.post(API_URL + "/comments", comment, {
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};

const commentsService = {
  commentCreate,
};

export default commentsService;
