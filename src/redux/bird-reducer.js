const SET_IS_FALL = "SET_IS_FALL";
const SET_SPEED = "SET_SPEED";
const FLY_UP = "FLY_UP";
const FALL_BIRD = "FALL_BIRD";
const RESET_BIRD = "RESET_BIRD";


const initialState = {
  x: 100,
  y: 100,
  speed: 5,
  height: 50,
  limitTop: 0,
  limitBottom: document.body.getBoundingClientRect().bottom - 170,
  isFall: false,
};

const birdReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPEED: {
      const stateCopy = { ...state };
      setSpeed(stateCopy, action);
      return stateCopy;
    }
    case SET_IS_FALL: {
      const stateCopy = { ...state };
      setIsFall(stateCopy, action);
      return stateCopy;
    }
    case FALL_BIRD: {
      const stateCopy = { ...state };
      fallBird(stateCopy);
      return stateCopy;
    }
    case FLY_UP: {
      const stateCopy = { ...state };
      flyUpBird(stateCopy);
      return stateCopy;
    }
    case RESET_BIRD: {
      const stateCopy = {...state};
      resetBird(stateCopy);
      return stateCopy;
    }

    default: {
      return state;
    }
  }
};

const flyUpBird = (stateCopy) => {
  console.log(1);
  if (
    stateCopy.y - stateCopy.height <= stateCopy.limitTop ||
    stateCopy.isFall ==="stop-fall"
  ) {
    return stateCopy;
  } else if (stateCopy.isFall !== "stop-fall") {
    stateCopy.isFall = "fall";
    stateCopy.y -= 30;
    return stateCopy;
  }
  return stateCopy;
};

const fallBird = (stateCopy) => {
  if (
    stateCopy.y + stateCopy.height < stateCopy.limitBottom &&
    stateCopy.isFall !== "stop-fall"
  ) {
    stateCopy.y += stateCopy.speed;
    return stateCopy;
  }
  stateCopy.isFall = "stop-fall";

  return stateCopy;
};

const setSpeed = (stateCopy, action) => {
  switch (action.difficulty) {
    case "easy":
      stateCopy.speed = 5;
      break;
    case "normal":
      stateCopy.speed = 7;
      break;
    case "hard":
      stateCopy.speed = 9;
      break;
  }
  return stateCopy;
};

const setIsFall = (stateCopy, action) => {
    console.log(action.status);
  if (action.status === "play") {
    stateCopy.isFall = "fall";
  } else if (action.status === "stop") {
    stateCopy.isFall = "stop-fall";
  }
};

const resetBird = (stateCopy) => {
  stateCopy.y = 100;
  stateCopy.isFall = false;
}

export const birdFlyUpCreator = () => {
  return {
    type: FLY_UP,
  };
};
export const resetBirdCreator = () => {
  return {
    type: RESET_BIRD,
  }
}
export const fallBirdCreator = () => {
  return {
    type: FALL_BIRD,
  };
};
export const setIsFallCreator = (status) => {
    return {
        type:SET_IS_FALL,
        status,
    }
}
export default birdReducer;