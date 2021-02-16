import { createStore , applyMiddleware } from 'redux';
import { persistStore } from "redux-persist"
// add middleware to our store so that whenever actions are fired or dispatched
// we catch them and display them

import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];

// create the store
export const store = createStore(rootReducer,applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store , persistor };