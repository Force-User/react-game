const SET_SCORE = "SET_SCORE";
let counter = 1;
const initialState = {
    score: {
        currentScore: "000",
        1:"000",
        2:"000",
        3:"000",
        4:"000",
        5:"000",
        6:"000",
        7:"000",
        8:"000",
        9:"000",
        10:"000",
    },
}


const statisticsReducer = (state = initialState,action) => {
    switch(action.type) {
        case SET_SCORE: {
            const stateCopy = {...state};
            setScore(stateCopy,action);
            return stateCopy;
        }
        default:
            return state;
    }
}

const setScore = (stateCopy,action) => {
   stateCopy.score.currentScore = action.score;
   stateCopy.score[counter] = action.score;
   if(counter >= 10) {
       counter = 0;
   }
   counter ++;
}
export const setScoreCreator = (score) => {
    return {
        type:"SET_SCORE",
        score,
    }
}

export default statisticsReducer;