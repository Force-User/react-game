import { connect } from "react-redux";
import { resetBirdCreator } from "../../redux/bird-reducer";
import { resetGameCreator } from "../../redux/game-reducer";
import {resetPipesCreator} from "../../redux/pipes-reducer";
import Statistics from "./statistics";

const mapStateToProps = (state) => {
  return {
    score: state.game.score.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetGame: () => {
        dispatch(resetGameCreator());
    } ,
    resetBird:() => {
      dispatch(resetBirdCreator());
    },
    resetPipes:() => {
      dispatch(resetPipesCreator());
    }
  };
};

const StatisticsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Statistics);

export default StatisticsContainer;
