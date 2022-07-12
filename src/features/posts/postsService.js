import axios from "axios";

const API_URL = "http://localhost:8080";

const getAll = async () => {
  const res = await axios.get(API_URL + "/posts");
  return res.data.reverse();
};

const getPostByName = async (postTitle) => {
  const res = await axios.get(API_URL + "/posts/search/" + postTitle);
  return res.data;
};

const getById = async (id) => {
  const res = await axios.get(API_URL + "/posts/id/" + id);

  return res.data;
};

const postCreate = async (post) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.post(API_URL + "/posts", post, {
    headers: {
      authorization: user?.token,
    },
  });

  return res.data;
};

const like = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(
    API_URL + "/posts/likes/" + id,
    {},
    {
      headers: {
        authorization: user?.token,
      },
    }
  );
  return res.data;
};

const dislike = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(
    API_URL + "/posts/removelikes/" + id,
    {},
    {
      headers: {
        authorization: user?.token,
      },
    }
  );
  return res.data;
};

const deletePost = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + "/posts/id/" + id, {
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};
const deletePostAdmin = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + "/posts/delete/" + id, {
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};

const update = async (post) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.put(API_URL + "/posts/id/" + post._id, post, {
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};

const postsService = {
  getAll,
  getPostByName,
  getById,
  postCreate,
  deletePost,
  like,
  dislike,
  deletePostAdmin,
  update,
};

export default postsService;
