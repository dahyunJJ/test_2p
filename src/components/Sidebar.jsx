import React from "react";
import { Link } from "react-router-dom";

import Logo from "../static/logo-color.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="nav">
        <Link to="/" className="menu menu1">
          날씨정보
        </Link>
        <Link to="/" className="menu menu2">
          설치정보
        </Link>
        <Link to="/" className="menu menu3">
          농도지수
        </Link>
        <Link to="/" className="menu menu4">
          수집기간
        </Link>
      </nav>
      <Link to="/" className="logo">
        <img src={Logo} alt="logo-greenon" />
      </Link>
    </div>
  );
}

export default Sidebar;
