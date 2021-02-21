import {combineReducers, createStore} from "redux";
import birdReducer from "./bird-reducer";
import pipesReducer from "./pipes-reducer";

const reducers = combineReducers({
    bird:birdReducer,
    pipes: pipesReducer,
})

const store = createStore(reducers);

export default store;