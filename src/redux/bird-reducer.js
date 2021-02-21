const FLY_UP = "FLY_UP";
const FALL = "FALL";

const initialState = {
    x:100,
    y:100,
}

 const birdReducer = (state = initialState,action) => {
     let newState = null;
    switch(action.type) {
        case FLY_UP:
            console.log(state.y);
           newState =  {...state};
           newState.y -= 50;
            return newState;
        case FALL:
            newState = {...state};
            newState.y +=1;
            return newState;
        default:
            return state;
    }
}

export const birdFlyUpCreater = () => {
    return {
        type: FLY_UP,
    }
}

export const fallBirdCreater = () => {
    return {
        type:FALL,
    }
}
export default birdReducer;