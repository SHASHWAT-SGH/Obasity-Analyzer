import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <div className="header-container">
      <span className="active">Home</span>
      <span className="inactive">Analyze</span>
      <span className="inactive">Contact Us</span>
    </div>
  );
}

export default Header;
