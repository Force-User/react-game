import { connect } from "react-redux";
import {
  birdFlyUpCreater,
  checkBirdToPipesCreator,
  fallBirdCreater,
  cereatePipesCreater,
  movePipesCreater,
  setMetricPipeCreator,
} from "../../redux/game-reducer";

import Game from "./game";

const mapStateToProps = (state) => {
  return {
    top: state.game.bird.y,
    status: state.game.game.status,
    rightPipes: state.game.pipes.x,
    pipes: state.game.pipes.pipesCollection,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    flyBirdUp: () => {
      dispatch(birdFlyUpCreater());
    },
    fallBird: () => {
      dispatch(fallBirdCreater());
    },
    movePipes: (id) => {
      dispatch(movePipesCreater(id));
    },
    createPipes: () => {
      dispatch(cereatePipesCreater());
    },
    checkBirdToPipes: () => {
      dispatch(checkBirdToPipesCreator());
    },
    setMetricPipe: (id,top,bottom) => {
        dispatch(setMetricPipeCreator(id,top,bottom));
    },
  };
};

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);
export default GameContainer;
