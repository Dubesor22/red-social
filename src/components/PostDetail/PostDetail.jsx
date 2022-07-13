import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../features/posts/PostsSlice";
import { Card } from "antd";
import Header from "../Header/Header";
import { Space, Spin } from "antd";
import "./PostDetail.scss";

const PostDetail = () => {
  const { isLoading } = useSelector((state) => state.posts);
  const { post } = useSelector((state) => state.posts);
  const { _id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(_id));
  }, []);

  if (isLoading) {
    return (
      <Space className="spin">
        <Spin size="large" />
      </Space>
    );
  }

  return (
    <>
      <Header />

      <Card title="Detalles del Post" className="post-card">
        <Card type="inner" title={post.title}>
          {post.body}
        </Card>

        <div className="activity__list__footer">
          <a href="#">
            {" "}
            <i className="fa fa-thumbs-up"></i>
            {post.likes?.length}
          </a>
          <a href="#">
            {" "}
            <i className="fa fa-comments"></i>
            {post.comments?.length}
          </a>
          <span>
            {" "}
            <i className="fa fa-clock"></i>
            {post.createdAt?.slice(0, 10)}
          </span>
        </div>
      </Card>
    </>
  );
};

export default PostDetail;
