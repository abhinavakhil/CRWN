import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
// ReactComponent as Logo - this is a special syntax in react for importing svg

import "./header.styles.scss";

//firebase
import { auth } from "../../firebase/firebase.utils";

const Header = ({currentUser}) => {
    return(
        <div className="header">
          <Link to="/" className="logo-container">
            <Logo className="logo"/>
          </Link>
          <div className="options">
              <Link to="/shop" className="option">Shop</Link>
              <Link to="/shop" className="option">Contact</Link>
              {
                currentUser ? 
                (<div className="option" onClick={()=> auth.signOut()}>{currentUser.displayName}/SIGN OUT</div>) 
                : <Link to="/signin" className="option">Login</Link>
              }
          </div>
        </div>
    )
}

export default Header;

//onClick={()=> auth.signOut()}
// Anonymous fn- ()=> auth.signOut()