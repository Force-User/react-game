import { act } from "react-dom/test-utils";

const MOVE_PIPES = "MOVE_PIPES";
const CREATE_PIPES ="CREATE_PIPES"

const initialState = {
  x: -100,
  y: 0,
  pipesCollection: [
      { id: 1, x: -100, y: 0 },
    ],
};

const pipesReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case MOVE_PIPES:
       
        newState.pipesCollection[action.id - 1].x +=1;
      return newState;
    case CREATE_PIPES:
        console.log(state);
      const newPipes = 
      {
        id: newState.pipesCollection.length + 1,
        x:-100,
        y:0,
      };
      newState.pipesCollection.push(newPipes);
      return newState;
    default:
      return newState;
  }
};

export const cereatePipesCreater = () => {
    return {
        type: CREATE_PIPES,
    }
}

export const movePipesCreater = (id) => {
  return {
    type: MOVE_PIPES,
    id,
  };
};

export default pipesReducer;
