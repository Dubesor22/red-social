import React from "react";
import "antd/dist/antd.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Main from "./components/Main/Main";
import Feed from "./components/Feed/Feed";
import Profile from "./components/Profile/Profile";
import Search from "./components/Search/Search";
import PostDetail from "./components/PostDetail/PostDetail";
import PostCreate from "./components/PostCreate/PostCreate";
import PrivateZone from "./guards/PrivateZone";
import LoginZone from "./guards/LoginZone";
import Admin from "./components/Admin/Admin";
import AdminZone from "./guards/AdminZone";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              <LoginZone>
                <Login />
              </LoginZone>
            }
          />
          <Route
            path="/feed"
            element={
              <PrivateZone>
                <Feed />
              </PrivateZone>
            }
          />
          <Route path="/search/:postName" element={<Search />} />
          <Route path="/post/id/:_id" element={<PostDetail />} />
          <Route path="/post/create" element={<PostCreate />} />
          <Route
            path="/header"
            element={
              <PrivateZone>
                <Header />
              </PrivateZone>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateZone>
                <Profile />
              </PrivateZone>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminZone>
                {" "}
                <Admin />{" "}
              </AdminZone>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
