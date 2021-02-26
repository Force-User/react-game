import { connect } from "react-redux";
import { setSkinCreator, setSpeedBirdFallCreator } from "../../redux/bird-reducer";
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
    }
  };
};

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

export default SettingsContainer;
