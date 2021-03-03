import { connect } from "react-redux";
import {
  setSkinCreator,
  setSpeedBirdFallCreator,
} from "../../redux/bird-reducer";
import { setBackgroundCreator } from "../../redux/game-reducer";
import { setVolumeCreator } from "../../redux/settings-reducer";

import Settings from "./settings";

const mapStateToProps = (state) => {
  return {
    birdSettings: state.settings.birdSettings,
    backgroundSettings: state.settings.backgroundSettings,
    volume: state.settings.volume,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSpeedBirdFall: (difficulty) => {
      dispatch(setSpeedBirdFallCreator(difficulty));
    },
    setSkin: (skin) => {
      dispatch(setSkinCreator(skin));
    },
    setBackground: (background) => {
      dispatch(setBackgroundCreator(background));
    },
    setVolume: (volume) => {
      dispatch(setVolumeCreator(volume));
    },
  };
};

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);

export default SettingsContainer;
