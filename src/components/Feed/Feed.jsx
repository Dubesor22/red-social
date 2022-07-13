import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Feed.scss";
import Header from "../Header/Header";
import Posts from "./Posts/Posts";
import PostCreate from "../PostCreate/PostCreate";
import Users from "../Users/Users";

const Feed = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate(`/search/${text}`);
    }
  };

  return (
    <>
      <Header />
      <div className="container-fluid outside column">
        <Users />
        <div class="col-12">
          <div className="col-lg-12 container feed-list">
            <div className="panel">
              <div className="panel-heading">
                <div class="container">
                  <br />
                  <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-8">
                      <div class="card card-sm">
                        <div class="card-body row no-gutters align-items-center">
                          <div class="col-auto">
                            <i class="fa fa-search h4 text-body"></i>
                          </div>

                          <div class="col">
                            <input
                              className="search-box form-control form-control-lg form-control-borderless"
                              onKeyUp={handleChange}
                              placeholder="Buscar..."
                              name="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-content panel-activity">
                <PostCreate />
                <ul className="panel-activity__list">
                  <Posts />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
