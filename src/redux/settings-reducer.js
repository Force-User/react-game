const SET_VOLUME = "SET_VOLUME";

const initialState = {
  birdSettings: [
    {
      id: 1,
      name: "standart",
      path:
        "https://www.pngkey.com/png/full/325-3257134_flappy-bird-flappy-bird-sprite-png.png",
    },
    {
      id: 2,
      name: "head",
      path:
        "https://www.pngkey.com/png/full/151-1515297_blue-flappy-bird-flappy-bird-new-sprite-bird.png",
    },
    {
      id: 3,
      name: "dragon",
      path:
        "https://www.pngkey.com/png/full/549-5494704_flappy-bird-flippy-monster-game-monster-app-flappy.png",
    },
  ],
  backgroundSettings: [
    {
      id: 1,
      name: "day",
      path: "https://wallpapercave.com/wp/wp6956942.png",
    },
    {
      id: 2,
      name: "night",
      path: "https://images.alphacoders.com/966/thumb-1920-966313.jpg",
    },
  ],
  volume: 1,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VOLUME: {
      const stateCopy = { ...state };
      setVolume(stateCopy, action);
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};

const setVolume = (stateCopy, action) => {
  stateCopy.volume = action.volume / 100;
};

export const setVolumeCreator = (volume) => {
  return {
    type: SET_VOLUME,
    volume,
  };
};

export default settingsReducer;
