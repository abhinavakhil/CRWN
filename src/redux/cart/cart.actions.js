import { cartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
    //payload is oprional property in actions and here we dont need so leave it
})


export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = (item) => ({
    type:  cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})