import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import './cart-dropdown.styles.scss';

//withrouter Hoc
import { withRouter } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions"; 

const CartDropdown = ({ cartitems, history, dispatch }) =>{
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartitems.length ?(
                    cartitems.map(cartItem => {
                        return <CartItem key={cartItem.id} item={cartItem}/>
                    })
                    ):
                    <span className="empty-message">
                     Your cart is Empty
                    </span>
                }
            </div>
            <CustomButton onClick={() => {
                dispatch(toggleCartHidden())
                history.push('/checkout')
                }}>Go TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state)=> ({
   cartitems: state.cart.cartItems
});

//dispatch sorthand-> (dispatch(toggleCartHidden()))- see lect-27 

export default withRouter(connect(mapStateToProps)(CartDropdown));