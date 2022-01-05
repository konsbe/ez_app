import React from "react";
import "./styles.scss";
import logo from "./../../assets/graphics/logo.png";

function Header(props) {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img src={logo} alt="logo" data-test="logoIMG"></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
