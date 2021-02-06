import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
// ReactComponent as Logo - this is a special syntax in react for importing svg

import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

//firebase
import { auth } from "../../firebase/firebase.utils";

// redux
import { connect } from "react-redux";

const Header = ({currentUser , hiddenValue}) => {
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
              <CartIcon />
          </div>
          {
           hiddenValue ? null : <CartDropdown />
          }
        </div>
    )
}

// getting data from store
const mapStateToProps = (state) => ({ //state is the roort reducer and then we trake the state.user from root-reducer and thenthe value from userreducer 
  currentUser: state.user.currentUser,
  hiddenValue: state.cart.hidden
})

// or using advanced destructuring lect-13 ,redux-1
// const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({ //state is the roort reducer and then we trake the state.user from root-reducer and thenthe value from userreducer 
//   currentUser,
//   hidden
// })

export default connect(mapStateToProps)(Header);

//onClick={()=> auth.signOut()}
// Anonymous fn- ()=> auth.signOut()