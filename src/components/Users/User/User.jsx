import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers, follow, unfollow } from "../../../features/users/usersSlice";

const API_URL = "http://localhost:8080/users/";
function User() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const { users } = useSelector((state) => state.users);
  return (
    <>
      {users.map((user) => (
        <div className="activity__list__header">
          <div className="user-follow" key={user._id}>
            <div>
              {console.log(user)}
              <Link to={`/profile/${user._id}`}>
                <img src={API_URL + user.avatar}></img>
                {user.username}
              </Link>
            </div>
            <div>
              <button
                className="btn btn-primary"
                type="primary"
                onClick={() => dispatch(follow(user._id))}
              >
                Seguir
              </button>
            </div>
          </div>

          <br />
          <hr />
        </div>
      ))}
    </>
  );
}

export default User;
