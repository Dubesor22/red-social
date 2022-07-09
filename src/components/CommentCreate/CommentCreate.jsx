import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { commentCreate } from "../../features/comments/commentsSlice";
import "../PostCreate/PostCreate.scss";

function CommentCreate (props) {
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(body);
    const postData = {
      body,
    };
    setLoading(true);
    dispatch(commentCreate(postData));
    setLoading(false);
    setBody("")
  };

  
  return (
    <>
      <form onSubmit={handleSubmit} className="panel-activity__status">
        <textarea
          name="user_activity"
          placeholder="..."
          className="form-control"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <div className="actions">
          <button type="submit" className="btn btn-sm btn-rounded btn-info">
            Commenta
          </button>
        </div>
      </form>
    </>
  );
}

export default CommentCreate; ;
