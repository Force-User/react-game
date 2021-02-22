const FLY_UP = "FLY_UP";
const FALL = "FALL";

const initialState = {
  x: 300,
  y: 100,
  limitTop: 0,
  limitBottom:document.body.getBoundingClientRect().bottom - 170,
  status: "play",
};

const birdReducer = (state = initialState, action) => {
  
  const newState = {...state};
  switch (action.type) {
    case FLY_UP:
      console.log(newState.y - 50 , newState.limitTop)
      if ((newState.y - 50 <= newState.limitTop)) {
        return newState;
      }
      newState.status = "play";
        newState.y -= 50;
      return newState;
    case FALL:
      if (newState.y + 42 < newState.limitBottom) {
        newState.y += 1;
        return newState;
      }
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
