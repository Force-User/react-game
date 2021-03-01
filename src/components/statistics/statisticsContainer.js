import { connect } from "react-redux";
import { resetBirdCreator } from "../../redux/bird-reducer";
import { resetGameCreator } from "../../redux/game-reducer";
import {resetPipesCreator} from "../../redux/pipes-reducer";
import { setScoreCreator } from "../../redux/statistics-reducer";
import Statistics from "./statistics";

const mapStateToProps = (state) => {
  return {
    score: state.game.score.currentScore,
    scoreBox: state.game.scoreBox,
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
    },
    setScore:(score) => {
      dispatch(setScoreCreator(score));
    }
  };
};

const StatisticsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Statistics);

export default StatisticsContainer;
