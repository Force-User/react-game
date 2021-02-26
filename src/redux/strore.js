import {combineReducers, createStore} from "redux";
import birdReducer from "./bird-reducer";
import gameReducer from "./game-reducer";
import pipesReducer from "./pipes-reducer";
const reducers = combineReducers({
    game:gameReducer,
    bird:birdReducer,
    pipes: pipesReducer,
})

const store = createStore(reducers);

export default store;