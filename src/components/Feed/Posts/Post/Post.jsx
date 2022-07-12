import React, { useEffect, useState } from "react";
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
  CommentOutlined,
  EditOutlined,
} from "@ant-design/icons";
import EditModal from "./EditModal";
import CommentCreate from "../../../CommentCreate/CommentCreate";
import "./Post.scss";

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

  const postList = posts?.map((post) => {
    const isAlreadyLiked = post.likes?.includes(user?.user._id);

    return (
      <>
        <li>
          <i className="activity__list__icon fa fa-question-circle-o"></i>
          <div className="activity__list__header">
            <Link to="/profile">
              <img src={API_URL + post.userId?.avatar} alt="avatar" />
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
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <i>Comentarios:</i>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  {" "}
                  {post.comments.map((comment) => (
                    <div class="accordion-body">
                      <div className="activity__list__header">
                        <p>
                          <b>{comment.userId?.username}: </b>
                          <img src={API_URL + comment.userId?.avatar}></img>
                          {comment.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
              <CommentOutlined />
              {post.comments?.length}
            </span>
            <EditOutlined onClick={() => handleModal(post._id)} />{" "}
            {user.user.username === post.userId.username ? (
              <span>
                <i
                  onClick={() => dispatch(deletePost(post._id))}
                  className="fa fa-trash"
                >
                  <span>Eliminar</span>
                </i>
              </span>
            ) : (
              " "
            )}
            <span>
              {" "}
              <i className="fa fa-clock"></i>
              {post.createdAt.slice(0, 10)}
            </span>
          </div>
          <p></p>
          <br />
        </li>
        <CommentCreate postId={post._id} />
        <br />
        <hr />
      </>
    );
  });
  return (
    <div>
      {postList}
      <EditModal visible={isModalVisible} setVisible={setIsModalVisible} />
    </div>
  );
};

export default Post;
