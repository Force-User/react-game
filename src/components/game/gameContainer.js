import { connect } from "react-redux";
import {
  birdFlyUpCreator,
  fallBirdCreator,
  setIsFallCreator,
} from "../../redux/bird-reducer";
import {
  checkBirdToPipesCreator,
  addScoreCreator,
  gameStartCreator,
  gameEndCreator,
} from "../../redux/game-reducer";
import {
  cereatePipesCreator,
  movePipesCreator,
  setVerticalPositionCreator,
} from "../../redux/pipes-reducer";

import Game from "./game";

const mapStateToProps = (state) => {
  return {
    bird:state.bird,
    pipes: state.pipes.pipesCollection,
    top: state.bird.y,
    status: state.game.status,
    rightPipes: state.pipes.x,
    score: state.game.score.count,
    birdStatus: state.bird.isFall,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gameStart: () => {
      dispatch(gameStartCreator());
    },
    gameEnd: () => {
      dispatch(gameEndCreator())
    },
    flyBirdUp: () => {
      dispatch(birdFlyUpCreator());
    },
    fallBird: () => {
      dispatch(fallBirdCreator());
    },
    movePipes: (id) => {
      dispatch(movePipesCreator(id));
    },
    createPipes: () => {
      dispatch(cereatePipesCreator());
    },
    checkBirdToPipes: (bird,pipes) => {
      dispatch(checkBirdToPipesCreator(bird,pipes));
    },
    setVerticalPosition: (id,top,bottom) => {
      dispatch(setVerticalPositionCreator(id,top,bottom));
    },
    addScore: (bird,pipes) => {
      dispatch(addScoreCreator(bird,pipes));
    },
    setIsFall: (status) => {
      dispatch(setIsFallCreator(status));
    },
  };
};

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);
export default GameContainer;
