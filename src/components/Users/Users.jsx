import React, { useEffect, useState } from "react";

import "./Users.scss";
import { notification } from "antd";
import User from "./User/User";

function Users() {
  return (
    <div className="container users-list">
      <br />
      <h2>Nuestros usuarios</h2>
      <hr />
      <br />
      <ul>
        <User />
      </ul>
    </div>
  );
}

export default Users;
