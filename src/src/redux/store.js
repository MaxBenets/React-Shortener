import {createStore, applyMiddleware, combineReducers} from "redux";
import Middleware from "redux-thunk";

import link from "./shortReducer"

let reducers = combineReducers({
    link
})

let store = createStore(reducers, applyMiddleware(Middleware))


export default store
window.store = store