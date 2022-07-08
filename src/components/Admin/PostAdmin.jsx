import { useDispatch, useSelector } from "react-redux";
import { deletePostAdmin } from "../../features/posts/PostsSlice";
import "./PostAdmin.scss";

const API_URL = "http://stratos-backend.herokuapp.com/users/";
const PostAdmin = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const post = posts.map((post) => {
    console.log(post);
    return (
      <>
        <div className="container bootstrap snippets bootdey">
          <div className="row">
            <div className="panel panel-default widget">
              <div className="panel-heading">
                <span className="glyphicon glyphicon-comment"></span>
                <h3 className="panel-title" key={post._id}>
                  Recent Comments
                </h3>
                <span className="label label-info">
                  {post.likes.length}{" "}
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </span>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-xs-2 col-md-1">
                        <img
                          src={API_URL + post.userId.avatar}
                          className="img-circle img-responsive img-user"
                          alt=""
                        />
                      </div>
                      <div className="col-xs-10 col-md-11">
                        <div>
                          <a href="#">{post.title}</a>
                          <div className="mic-info">
                            By: <a href="#">{post.userId.username}</a> on 2 Aug
                            2013
                          </div>
                        </div>
                        <div className="comment-text">{post.body}</div>
                        <div className="action">
                          <button
                            type="button"
                            className="btn btn-primary btn-xs"
                            title="Edit"
                          >
                            <i
                              className="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </button>
                          <button
                            onClick={() => dispatch(deletePostAdmin(post._id))}
                            type="button"
                            className="btn btn-danger btn-xs"
                            title="Delete"
                          >
                            <i className="fa fa-trash" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
  return <div>{post}</div>;
};

export default PostAdmin;
