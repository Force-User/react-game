const CHEK_BIRD_TO_PIPE = "CHEK_BIRD_TO_PIPE";
const FLY_UP = "FLY_UP";
const FALL = "FALL";
const MOVE_PIPES = "MOVE_PIPES";
const CREATE_PIPES = "CREATE_PIPES";

let idCounter = 0;

const initialState = {
  game: {
    status: null,
  },

  bird: {
    x: 100,
    y: 100,
    limitTop: 0,
    limitBottom: document.body.getBoundingClientRect().bottom - 170,
  },
  pipes: {
    pipesCollection: [
      {
        id: ++idCounter,
        x: -150,
        y: Math.floor(Math.random() * (0 - -300 + 1)) + -300,
        leftSide: document.body.getBoundingClientRect().width,
      },
    ],
  },
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLY_UP: {
      const stateCopy = { ...state };
      flyUpBird(stateCopy);
    }

    case FALL: {
      const stateCopy = { ...state };
      fallBird(stateCopy);
    }

    case MOVE_PIPES: {
      const stateCopy = { ...state };
      stateCopy.pipes.pipesCollection = [...state.pipes.pipesCollection];
      movePipes(stateCopy, action);
      deletePipes(stateCopy);

      return stateCopy;
    }

    case CREATE_PIPES: {
      const stateCopy = { ...state };
      stateCopy.pipes.pipesCollection = [...state.pipes.pipesCollection];
      createPipes(stateCopy);
    }
    default: {
      return state;
    }
  }
};


const flyUpBird = (stateCopy) => {
    if (stateCopy.bird.y - 50 <= stateCopy.bird.limitTop) {
      return stateCopy;
    }
    stateCopy.game.status = stateCopy.game.status !== "stop" ? "play" : "stop";
    stateCopy.bird.y -= 50;
    return stateCopy;
  };
  
  const fallBird = (stateCopy) => {
    if (stateCopy.bird.y + 42 < stateCopy.bird.limitBottom) {
      stateCopy.bird.y += 1;
      return stateCopy;
    }
    stateCopy.game.status = "stop";
    return stateCopy;
  };
  
  const movePipes = (stateCopy, action) => {
    const [pipe] = stateCopy.pipes.pipesCollection.filter(
      (item) => item.id === action.id
    );
    if (pipe) {
      pipe.leftSide = pipe.leftSide - 1;
      pipe.x = pipe.x + 1;
    }
  };
  
  const deletePipes = (stateCopy) => {
    if (stateCopy.pipes.pipesCollection[0].leftSide < -300) {
      stateCopy.pipes.pipesCollection.reverse().pop();
      stateCopy.pipes.pipesCollection.reverse();
    }
  };
  
  const createPipes = (stateCopy) => {
    const newPipes = {
      id: ++idCounter,
      x: -150,
      y: Math.floor(Math.random() * (0 - -300 + 1)) + -300,
      leftSide: document.body.getBoundingClientRect().width,
    };
    stateCopy.pipes.pipesCollection.push(newPipes);
    return stateCopy;
  };

export const birdFlyUpCreater = () => {
  return {
    type: FLY_UP,
  };
};

export const fallBirdCreater = () => {
  return {
    type: FALL,
  };
};

export const cereatePipesCreater = () => {
  return {
    type: CREATE_PIPES,
  };
};

export const movePipesCreater = (id, leftSide) => {
  return {
    type: MOVE_PIPES,
    id,
    leftSide,
  };
};

export default gameReducer;
