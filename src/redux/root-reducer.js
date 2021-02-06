// main reducer - it is the main reducer which will have all the reducers
// this is the one gaint object of state

import { combineReducers } from "redux"; // combineReducer comes from reduc library and it combines the whole reducers to one

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})