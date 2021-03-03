const CREATE_PIPES = "CREATE_PIPES";
const MOVE_PIPES = "MOVE_PIPES";
const SET_VERTICAL_POSITION = "SET_VERTICAL_POSITION";
const RESET_PIPES = "RESET_PIPES";

let counterID = 0;
const startPosition = -150;

const initialState = {
  speed: 4,
  pipesCollection: [],
};

const pipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PIPES: {
      const stateCopy = { ...state };
      stateCopy.pipesCollection = [...state.pipesCollection];
      deletePipes(stateCopy);
      createPipes(stateCopy);
      return stateCopy;
    }
    case MOVE_PIPES: {
      const stateCopy = { ...state };
      movePipes(stateCopy, action);
      return stateCopy;
    }
    case SET_VERTICAL_POSITION: {
      const stateCopy = { ...state };
      setVerticalPosition(stateCopy, action);
      return stateCopy;
    }
    case RESET_PIPES: {
      const stateCopy = { ...state };
      resetPipes(stateCopy);
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};

const setVerticalPosition = (stateCopy, action) => {
  const [pipe] = stateCopy.pipesCollection.filter(
    (item) => item.id === action.id
  );
  if (pipe) {
    pipe.top = action.top + 30;
    pipe.bottom = action.bottom - 30;
  }

  return stateCopy;
};

const movePipes = (stateCopy, action) => {
  const [pipe] = stateCopy.pipesCollection.filter((item) => {
    return item.id === action.id;
  });
  if (pipe) {
    pipe.leftSide = pipe.leftSide - stateCopy.speed;
    pipe.x = pipe.x + stateCopy.speed;
  }
};

const deletePipes = (stateCopy) => {
  if (
    stateCopy.pipesCollection[0] &&
    stateCopy.pipesCollection[0].leftSide < -300
  ) {
    stateCopy.pipesCollection.reverse().pop();
    stateCopy.pipesCollection.reverse();
  }
};

const createPipes = (stateCopy) => {
  const newPipes = {
    id: ++counterID,
    top: 0,
    bottom: 0,
    x: startPosition,
    y: Math.floor(Math.random() * (-100 - -300 + 1)) + -300,
    leftSide: document.body.getBoundingClientRect().width,
    isCheked: false,
  };
  stateCopy.pipesCollection.push(newPipes);
  return stateCopy;
};
const resetPipes = (stateCopy) => {
  stateCopy.pipesCollection = [];
};

export const cereatePipesCreator = () => {
  return {
    type: CREATE_PIPES,
  };
};
export const resetPipesCreator = () => {
  return {
    type: RESET_PIPES,
  };
};
export const movePipesCreator = (id, leftSide) => {
  return {
    type: MOVE_PIPES,
    id,
    leftSide,
  };
};
export const setVerticalPositionCreator = (id, top, bottom) => {
  return {
    type: SET_VERTICAL_POSITION,
    id,
    top,
    bottom,
  };
};

export default pipesReducer;
