import { connect } from "react-redux";
import { setSkinCreator, setSpeedBirdFallCreator } from "../../redux/bird-reducer";
import { setBackgroundCreator } from "../../redux/game-reducer";
import Settings from "./settings";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSpeedBirdFall: (difficulty) => {
      dispatch(setSpeedBirdFallCreator(difficulty));
    },
    setSkin:(skin) => {
        dispatch(setSkinCreator(skin));
    },
    setBackground:(background) => {
      dispatch(setBackgroundCreator(background));
    }
  };
};

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

export default SettingsContainer;
