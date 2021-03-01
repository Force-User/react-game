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
  gamePauseCreator,
} from "../../redux/game-reducer";
import {
  cereatePipesCreator,
  movePipesCreator,
  setVerticalPositionCreator,
} from "../../redux/pipes-reducer";

import Game from "./game";

const mapStateToProps = (state) => {
  return {
    background: state.game.background,
    bird:state.bird,
    pipes: state.pipes.pipesCollection,
    top: state.bird.y,
    status: state.game.status,
    rightPipes: state.pipes.x,
    score: state.game.score,
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
    checkBirdToPipes: (bird,pipes,hitSound) => {
      dispatch(checkBirdToPipesCreator(bird,pipes,hitSound));
    },
    setVerticalPosition: (id,top,bottom) => {
      dispatch(setVerticalPositionCreator(id,top,bottom));
    },
    addScore: (bird,pipes,pointSound) => {
      dispatch(addScoreCreator(bird,pipes,pointSound));
    },
    setIsFall: (status) => {
      dispatch(setIsFallCreator(status));
    },
    gamePause:()=> {
      dispatch(gamePauseCreator());
    }
  };
};

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);
export default GameContainer;
