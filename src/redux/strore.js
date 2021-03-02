import {combineReducers, createStore} from "redux";
import birdReducer from "./bird-reducer";
import gameReducer from "./game-reducer";
import pipesReducer from "./pipes-reducer";
import settingsReducer from "./settings-reducer";
import statisticsReducer from "./statistics-reducer";
const reducers = combineReducers({
    game:gameReducer,
    bird:birdReducer,
    pipes: pipesReducer,
    statistics: statisticsReducer,
    settings: settingsReducer,
})

const store = createStore(reducers);

export default store;