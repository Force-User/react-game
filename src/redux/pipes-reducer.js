const MOVE_PIPES = "MOVE_PIPES";
const CREATE_PIPES = "CREATE_PIPES";
const DELETE_PIPES = "DELETE_PIPES";
let idCounter = 1;

const initialState = {
  pipesCollection: [
  ],
};

const pipesReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case MOVE_PIPES:
      const [pipe] = newState.pipesCollection.filter(
        (item) => item.id === action.id
      );
      if (pipe) {
        pipe.leftSide = pipe.leftSide - 1;
        pipe.x = pipe.x + 1;
      }

      if (newState.pipesCollection[0].leftSide < -300) {
        newState.pipesCollection.reverse().pop();
        newState.pipesCollection.reverse();
      }
      return newState;
    case CREATE_PIPES:
      const newPipes = {
        id: ++idCounter,
        x: -150,
        y: Math.floor(Math.random() * (0 - -300 + 1)) + -300,
        leftSide: document.body.getBoundingClientRect().width,
      };
      newState.pipesCollection.push(newPipes);
      return newState;
    case DELETE_PIPES:
      return newState;
    default:
      return newState;
  }
};

export const cereatePipesCreater = () => {
  return {
    type: CREATE_PIPES,
  };
};

export const deletePipesCreater = (id) => {
  return {
    type: DELETE_PIPES,
  };
};

export const movePipesCreater = (id, leftSide) => {
  return {
    type: MOVE_PIPES,
    id,
    leftSide,
  };
};

export default pipesReducer;
