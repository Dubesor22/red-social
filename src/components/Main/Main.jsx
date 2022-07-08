import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <div className="body-main">
        <p id="head1" class="header">
          Stratos
        </p>
        <p id="head2" class="header">
          Tu Nueva
        </p>
        <p id="head3" class="header">
          Red Social
        </p>
        <p id="head4" class="header">
          Haz Networking! Amigos! Diviertete!
        </p>
        <p id="head5" class="header">
          Bienvenido a STRATOS
        </p>
        <Link to="/login">
          <button className="button-animate">Entra</button>
        </Link>
        <div class="light x1"></div>
        <div class="light x2"></div>
        <div class="light x3"></div>
        <div class="light x4"></div>
        <div class="light x5"></div>
        <div class="light x6"></div>
        <div class="light x7"></div>
        <div class="light x8"></div>
        <div class="light x9"></div>
      </div>
    </>
  );
};

export default Main;
