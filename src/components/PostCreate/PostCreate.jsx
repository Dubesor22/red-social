import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postCreate } from "../../features/posts/PostsSlice";
import "./PostCreate.scss";

function PostCreate() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title,
      body,
      avatar: image,
    };
    setLoading(true);
    dispatch(postCreate(postData));
    setLoading(false);
    setTitle("");
    setBody("");
    setImage("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="panel-activity__status">
        <input
          type="text"
          className="form-control"
          placeholder="Titulalo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="user_activity"
          placeholder="Compartelo con nosotros.."
          className="form-control"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <input
          type="file"
          className="form-control"
          placeholder="sube una imagen"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <div className="actions">
          <div className="btn-group">
            <button
              type="button"
              className="btn-link"
              title=""
              data-toggle="tooltip"
              data-original-title="Post an Image"
            >
              <i className="fa fa-image"></i>
            </button>
            <button
              type="button"
              className="btn-link"
              title=""
              data-toggle="tooltip"
              data-original-title="Post an Video"
            >
              <i className="fa fa-video-camera"></i>
            </button>
            <button
              type="button"
              className="btn-link"
              title=""
              data-toggle="tooltip"
              data="Post a File"
            >
              <i className="fa fa-file-o"></i>
            </button>
          </div>
          <button type="submit" className="btn btn-sm btn-rounded btn-info">
            Post
          </button>
        </div>
      </form>
    </>
  );
}

export default PostCreate;
