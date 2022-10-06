import React from "react";
import "./Header.css";
import Logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/order">Order </Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Header;
