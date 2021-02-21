import {combineReducers, createStore} from "redux";
import birdReducer from "./bird-reducer";

const reducers = combineReducers({
    bird:birdReducer,
})

const store = createStore(reducers);

export default store;