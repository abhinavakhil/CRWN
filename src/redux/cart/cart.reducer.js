import { cartActionTypes } from "./cart.types";
import { addItemsTocart, removeItemsFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [] // add items to  thius item and remove
}

const cartReducer = (state=INITIAL_STATE, action) => {
   switch(action.type){
       case cartActionTypes.TOGGLE_CART_HIDDEN:
           return{
            ...state,
            hidden: !state.hidden //toggle
         }
       case cartActionTypes.ADD_ITEM:
           return{
             ...state,
            //  cartItems: [...state.cartItems, action.payload]
            cartItems: addItemsTocart(state.cartItems, action.payload)
           }
        case cartActionTypes.REMOVE_ITEM:
            return{
              ...state,
             cartItems: removeItemsFromCart(state.cartItems, action.payload)
         }
      case cartActionTypes.CLEAR_ITEM_FROM_CART:
           return{
              ...state,
              cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
              // action.payload.id - it is the id of item we want to remove
          }
       default:
          return state;
   }
}

export default cartReducer;

// in this -> cartItems: [...state.cartItems, action.payload]
// [...state.cartItems, action.payload] here we are creating a new array
// in which we are spreading the old state cartitems(...state.cartItems)
// and then adding the newly items which comes from action.payload(action.payload)