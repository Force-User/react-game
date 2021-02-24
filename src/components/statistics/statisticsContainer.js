import { connect } from "react-redux";
import { resetGameCreator } from "../../redux/game-reducer";
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
  };
};

const StatisticsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Statistics);

export default StatisticsContainer;
