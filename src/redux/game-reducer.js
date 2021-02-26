const CHEK_BIRD_TO_PIPE = "CHEK_BIRD_TO_PIPE";
const ADD_SCORE = "ADD_SCORE";
const SET_DIFFICULTY = "SET_DIFFICULTY";
const RESET_GAME = "RESET_GAME";
const GAME_START = "GAME_START";
const GAME_END = "GAME_END";
const SET_BACKGROUND = "SET_BACKGROUND";
const DAY_BACKGROUND = "https://wallpapercave.com/wp/wp6956942.png";
const NIGHT_BACKGROUND  = "https://images.alphacoders.com/966/thumb-1920-966313.jpg";

const initialState = {
  status: null,
  difficulty: "normal",
  background: DAY_BACKGROUND,
  score: {
    count: 0,
  },
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUND: {
      const stateCopy = {...state};
      setBackground(stateCopy,action);
      return stateCopy;
    }
    case GAME_START: {
      const stateCopy = { ...state };
      gameStart(stateCopy);
      return stateCopy;
    }
    case GAME_END: {
      const stateCopy = { ...state };
      gameEnd(stateCopy);
      return stateCopy;
    }

    case SET_DIFFICULTY: {
      const stateCopy = { ...state };
      setDifficulty(stateCopy, action);
      return stateCopy;
    }

    case CHEK_BIRD_TO_PIPE: {
      const stateCopy = { ...state };
      checkBirdToPipes(stateCopy, action);
      return stateCopy;
    }

    case ADD_SCORE: {
      const stateCopy = { ...state };
      addScore(stateCopy, action);
      return stateCopy;
    }
    case RESET_GAME: {
      const stateCopy = { ...state };
      stateCopy.pipes = { ...state.pipes };
      stateCopy.pipesCollection = { ...state.pipesCollection };
      stateCopy.bird = { ...state.bird };
      resetGame(stateCopy);
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};
const setBackground = (stateCopy,action) => {
  switch(action.background) {
    case "day":
      stateCopy.background = DAY_BACKGROUND;
    break;
    case "night":
      stateCopy.background = NIGHT_BACKGROUND;
    break;
  }
}
const gameStart = (stateCopy) => {
  if (!stateCopy.status) {
    stateCopy.status = "play";
  }
  return stateCopy;
};
const gameEnd = (stateCopy) => {
  stateCopy.status = "stop";
};
const checkBirdToPipes = (stateCopy, action) => {
  action.pipes.forEach((item) => {
    if (
      item.leftSide - 70 <= action.bird.x &&
      item.leftSide + 85 >= action.bird.x &&
      (action.bird.y >= item.top - 50 || action.bird.y <= item.bottom + 10)
    ) {
      stateCopy.status = "stop";
    }
  });
  return stateCopy;
};
const addScore = (stateCopy, action) => {
  action.pipes.forEach((item) => {
    if (
      item.leftSide - 35 <= action.bird.x &&
      item.leftSide + 85 >= action.bird.x &&
      !item.isCheked
    ) {
      stateCopy.score.count++;
      item.isCheked = true;
      return stateCopy;
    }
  });
  return stateCopy;
};
const setDifficulty = (stateCopy, action) => {
  stateCopy.difficulty = action.difficulty;
  return stateCopy;
};
const resetGame = (stateCopy) => {
  stateCopy.status = null;
  stateCopy.score.count = 0;
  return stateCopy;
};
export const setBackgroundCreator = (background) => {
  return {
    type:SET_BACKGROUND,
    background,
  }
}
export const checkBirdToPipesCreator = (bird, pipes) => {
  return {
    type: CHEK_BIRD_TO_PIPE,
    bird,
    pipes,
  };
};
export const addScoreCreator = (bird, pipes) => {
  return {
    type: ADD_SCORE,
    bird,
    pipes,
  };
};
export const setDifficultyCreator = (difficulty) => {
  return {
    type: SET_DIFFICULTY,
    difficulty,
  };
};
export const resetGameCreator = () => {
  return {
    type: RESET_GAME,
  };
};
export const gameStartCreator = () => {
  return {
    type: GAME_START,
  };
};
export const gameEndCreator = () => {
  return {
    type: GAME_END,
  };
};

export default gameReducer;
