import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers, follow, unfollow } from "../../../features/auth/authSlice";

const API_URL = "http://localhost:8080/users/";

function User() {
  const dispatch = useDispatch();
  const { user, users } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const allUsers = users?.map((el) => {
    const isAlreadyFollowed = el.followers?.includes(user?.user?._id);
    return (
      <>
        <div className="activity__list__header">
          <div className="user-follow" key={el._id}>
            <div>
              <Link to={`/profile/${el._id}`}>
                <img src={API_URL + el.avatar}></img>
                {el.username}
              </Link>
            </div>
            <div>
              {isAlreadyFollowed ? (
                <button
                  className="btn btn-outline-warning"
                  onClick={() => dispatch(unfollow(el._id))}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className="btn btn-outline-primary"
                  onClick={() => dispatch(follow(el._id))}
                >
                  Follow
                </button>
              )}
            </div>
          </div>

          <br />
          <hr />
        </div>
      </>
    );
  });
  return <>{allUsers}</>;
}

export default User;
