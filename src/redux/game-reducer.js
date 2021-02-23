const CHEK_BIRD_TO_PIPE = "CHEK_BIRD_TO_PIPE";
const FLY_UP = "FLY_UP";
const FALL = "FALL";
const MOVE_PIPES = "MOVE_PIPES";
const CREATE_PIPES = "CREATE_PIPES";
const SET_METRIC_PIPE = "SET_VALUE_PIPE";
const ADD_SCORE = "ADD_SCORE";

let idCounter = 0;

const initialState = {
  game: {
    status: null,
  },

  score: {
    count: 0,
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
        top: 0,
        bottom: 0,
        isCheked: false,
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
    case CHEK_BIRD_TO_PIPE: {
      const stateCopy = { ...state };
      stateCopy.pipes.pipesCollection = [...state.pipes.pipesCollection];
      checkBirdToPipes(stateCopy);
    }
    case SET_METRIC_PIPE: {
      const stateCopy = { ...state };
      stateCopy.pipes.pipesCollection = [...state.pipes.pipesCollection];
      setMetricPipe(stateCopy, action);
    }

    case ADD_SCORE: {
      const stateCopy = { ...state };
      stateCopy.pipes.pipesCollection = [...state.pipes.pipesCollection];
      addScore(stateCopy);
    }
    default: {
      return state;
    }
  }
};

const flyUpBird = (stateCopy) => {
  if (stateCopy.bird.y - 50 <= stateCopy.bird.limitTop) {
    return stateCopy;
  } else if (stateCopy.game.status !== "stop") {
    stateCopy.game.status = "play";
    stateCopy.bird.y -= 100;
  }

  return stateCopy;
};

const fallBird = (stateCopy) => {
  if (stateCopy.bird.y + 42 < stateCopy.bird.limitBottom) {
    stateCopy.bird.y += 5;
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
    pipe.leftSide = pipe.leftSide - 4;
    pipe.x = pipe.x + 4;
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
    y: Math.floor(Math.random() * (-100 - -300 + 1)) + -300,
    leftSide: document.body.getBoundingClientRect().width,
    isCheked: false,
  };
  stateCopy.pipes.pipesCollection.push(newPipes);
  return stateCopy;
};

const setMetricPipe = (stateCopy, action) => {
  const [pipe] = stateCopy.pipes.pipesCollection.filter(
    (item) => item.id === action.id
  );
  if (pipe) {
    pipe.top = action.top + 30;
    pipe.bottom = action.bottom - 30;
  }

  return stateCopy;
};

const checkBirdToPipes = (stateCopy) => {
  stateCopy.pipes.pipesCollection.forEach((item) => {
    if (
      item.leftSide - 35 <= stateCopy.bird.x &&
      item.leftSide + 85 >= stateCopy.bird.x &&
      (stateCopy.bird.y >= item.top - 50 ||
        stateCopy.bird.y <= item.bottom + 10)
    ) {
      stateCopy.game.status = "stop";
    }
  });
  return stateCopy;
};

const addScore = (stateCopy) => {
  stateCopy.pipes.pipesCollection.forEach((item) => {
    if (
      item.leftSide - 35 <= stateCopy.bird.x &&
      item.leftSide + 85 >= stateCopy.bird.x &&
      !item.isCheked
    ) {
      stateCopy.score.count++;
      item.isCheked = true;
      return stateCopy;
    }
  });
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

export const checkBirdToPipesCreator = () => {
  return {
    type: CHEK_BIRD_TO_PIPE,
  };
};

export const setMetricPipeCreator = (id, top, bottom) => {
  return {
    type: SET_METRIC_PIPE,
    id,
    top,
    bottom,
  };
};

export const addScoreCreator = () => {
  return {
    type: ADD_SCORE,
  };
};


export default gameReducer;
