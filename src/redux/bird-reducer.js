const SET_IS_FALL = "SET_IS_FALL";
const SET_SPEED_BIRD_FALL = "SET_SPEED_BIRD_FALL";
const FLY_UP = "FLY_UP";
const FALL_BIRD = "FALL_BIRD";
const RESET_BIRD = "RESET_BIRD";
const SET_SKIN = "SET_SKIN";
const SKIN_BIRD_STANDART =
  "https://www.pngkey.com/png/full/325-3257134_flappy-bird-flappy-bird-sprite-png.png";
const SKIN_BIRD_HEAD =
  "https://www.pngkey.com/png/full/151-1515297_blue-flappy-bird-flappy-bird-new-sprite-bird.png";
const SKIN_BIRD_DRAGON =
  "https://www.pngkey.com/png/full/549-5494704_flappy-bird-flippy-monster-game-monster-app-flappy.png";
const wingSound = new Audio();
wingSound.src = "../sounds/sfx_wing.ogg";
const initialState = {
  x: 100,
  y: 100,
  speed: initSpeed(),
  _height: 50,
  limitTop: 0,
  limitBottom: document.body.getBoundingClientRect().bottom - 170,
  isFall: false,
  skin: initSkin(),
  rotate: 0,
  upTo: 70,
};

const birdReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SKIN: {
      const stateCopy = { ...state };
      setSkin(stateCopy, action);
      return stateCopy;
    }
    case SET_SPEED_BIRD_FALL: {
      const stateCopy = { ...state };
      setSpeedBirdFall(stateCopy, action);
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
      const stateCopy = { ...state };
      resetBird(stateCopy);
      return stateCopy;
    }

    default: {
      return state;
    }
  }
};

const flyUpBird = (stateCopy) => {
  if (
    stateCopy.y - stateCopy._height <= stateCopy.limitTop ||
    stateCopy.isFall === "stop-fall"
  ) {
    return stateCopy;
  } else if (stateCopy.isFall !== "stop-fall") {
    stateCopy.isFall = "fall";

    stateCopy.rotate = -45;
    stateCopy.y -= stateCopy.upTo;
    return stateCopy;
  }
  return stateCopy;
};

const fallBird = (stateCopy) => {
  if (
    stateCopy.y + stateCopy._height < stateCopy.limitBottom &&
    stateCopy.isFall !== "stop-fall"
  ) {
    stateCopy.y += stateCopy.speed;
    setTimeout(() => {
      stateCopy.rotate = 5;
    }, 30);

    return stateCopy;
  }
  stateCopy.isFall = "stop-fall";

  return stateCopy;
};

const setSpeedBirdFall = (stateCopy, action) => {
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
  stateCopy.rotate = 0;
  stateCopy.isFall = false;
};
const setSkin = (stateCopy, action) => {
  switch (action.skin) {
    case "standart":
      stateCopy.skin = SKIN_BIRD_STANDART;
      break;
    case "head":
      stateCopy.skin = SKIN_BIRD_HEAD;
      break;
    case "dragon":
      stateCopy.skin = SKIN_BIRD_DRAGON;
      break;
  }
};

function initSpeed() {
  switch (localStorage.getItem("difficulty")) {
    case "easy":
      return 5;
    case "normal":
      return 7;
    case "hard":
      return 9;
    default:
      return 7;
  }
}
function initSkin() {
  switch (localStorage.getItem("birdSkin")) {
    case "standart":
      return SKIN_BIRD_STANDART;
    case "head":
      return SKIN_BIRD_HEAD;
    case "dragon":
      return SKIN_BIRD_DRAGON;
    default:
      return SKIN_BIRD_STANDART;
  }
}

export const setSpeedBirdFallCreator = (difficulty) => {
  return { type: SET_SPEED_BIRD_FALL, difficulty };
};
export const setSkinCreator = (skin) => {
  return {
    type: SET_SKIN,
    skin,
  };
};
export const birdFlyUpCreator = () => {
  return {
    type: FLY_UP,
  };
};
export const resetBirdCreator = () => {
  return {
    type: RESET_BIRD,
  };
};
export const fallBirdCreator = () => {
  return {
    type: FALL_BIRD,
  };
};
export const setIsFallCreator = (status) => {
  return {
    type: SET_IS_FALL,
    status,
  };
};
export default birdReducer;
