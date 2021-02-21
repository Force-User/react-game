const FLY_UP = "FLY_UP";
const FALL = "FALL";

const initialState = {
  x: 100,
  y: 100,
  limitTop: 0,
  limitBottom: 200,
  status: "play",
};

const birdReducer = (state = initialState, action) => {
  let newState = null;
  switch (action.type) {
    case FLY_UP:
      if ((state.y -= 50 < state.limitTop)) {
        newState = { ...state };
        newState.status = "play";
        newState.y -= 50;
        return newState;
      }
      return state;
    case FALL:
      if (state.y - 50 < state.limitBottom) {
        newState = { ...state };
        newState.y += 1;
        return newState;
      }
      newState = {...state};
      newState.status = "stop";

      return newState;
    default:
      return state;
  }
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
export default birdReducer;
