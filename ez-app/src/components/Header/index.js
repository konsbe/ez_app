import React from "react";
import "./styles.scss";
import logo from "./../../assets/graphics/logo.png";

function Header(props) {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
