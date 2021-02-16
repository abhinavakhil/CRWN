// main reducer - it is the main reducer which will have all the reducers
// this is the one gaint object of state

import { combineReducers } from "redux"; // combineReducer comes from reduc library and it combines the whole reducers to one
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // this is similar to localstorage


import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}

const rootreducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});


export default persistReducer(persistConfig,rootreducer);
