import React from 'react';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"; 

import './cart-icon.styles.scss';

// redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/card.selectors";

const CartIcon = ({ toggleCartHidden ,itemCount }) => {
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
         <ShoppingIcon className="shopping-icon"/>
         <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    // itemCount: cartItems.reduce(
    //     (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
    // )
    itemCount: selectCartItemsCount(state)
   }
}

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);