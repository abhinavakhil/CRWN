import { createStore , applyMiddleware } from 'redux';

// add middleware to our store so that whenever actions are fired or dispatched
// we catch them and display them

import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];

// create the store
const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;