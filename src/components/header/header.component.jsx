import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
// ReactComponent as Logo - this is a special syntax in react for importing svg

import "./header.styles.scss";

const Header = () => {
    return(
        <div className="header">
          <Link to="/" className="logo-container">
            <Logo className="logo"/>
          </Link>
          <div className="options">
              <Link to="/shop" className="option">Shop</Link>
              <Link to="/shop" className="option">Contact</Link>
              <Link to="/signin" className="option">Login</Link>
          </div>
        </div>
    )
}

export default Header;