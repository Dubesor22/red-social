import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  deletePost,
  getById,
  dislike,
  like,
} from "../../../../features/posts/PostsSlice";
import {
  HeartOutlined,
  HeartFilled,
  // DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import EditModal from "./EditModal";

const API_URL = "http://localhost:8080/users/";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = (id) => {
    dispatch(getById(id));
    setIsModalVisible(true);
  };

  const post = posts?.map((post) => {
    const isAlreadyLiked = post.likes?.includes(user?.user._id);
    return (
      <>
        <li>
          <i className="activity__list__icon fa fa-question-circle-o"></i>
          <div className="activity__list__header">
            <Link to="/profile">
              <img src={API_URL + post.userId.avatar} alt="avatar" />
            </Link>
            <a href="#">{post.userId?.username}</a> Ha posteado:{" "}
            <div className="post" key={post._id}>
              <Link to={"/post/id/" + post._id}>{post.title}</Link>
            </div>
          </div>
          <div className="activity__list__body entry-content">
            <blockquote>
              <div className="post" key={post._id}>
                <Link to={"/post/id/" + post._id}>
                  <p className="post-body">{post.body}</p>
                </Link>
              </div>
            </blockquote>
          </div>
          <div className="activity__list__footer">
            <span className="like">
              {" "}
              {post.likes?.length}{" "}
              {isAlreadyLiked ? (
                <HeartFilled onClick={() => dispatch(dislike(post._id))} />
              ) : (
                <HeartOutlined onClick={() => dispatch(like(post._id))} />
              )}
            </span>
            <span>
              {" "}
              <i className="fa fa-comments"></i>
              {post.comments?.length}
            </span>
            <EditOutlined onClick={() => handleModal(post._id)} />

            <span>
              <i
                onClick={() => dispatch(deletePost(post._id))}
                className="fa fa-trash"
              >
                {" "}
                <span>Eliminar</span>
              </i>
            </span>
            <span>
              {" "}
              <i className="fa fa-clock"></i>
              {post.createdAt.slice(0, 10)}
            </span>
          </div>
        </li>
      </>
    );
  });
  return (
    <div>
      {post}
      <EditModal visible={isModalVisible} setVisible={setIsModalVisible} />
    </div>
  );
};

export default Post;
