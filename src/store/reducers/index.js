import { combineReducers } from "redux";
import beersReducer from "./beersReducers";
import userReducer from './user';

export default combineReducers({
    user: userReducer,
    beers: beersReducer
})