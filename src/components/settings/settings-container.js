import { connect } from "react-redux"
import { setDifficultyCreator } from "../../redux/game-reducer"
import Settings from "./settings"


const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDifficulty:(difficulty) => {
            dispatch(setDifficultyCreator(difficulty));
        }
    }
}


const SettingsContainer = connect(mapStateToProps,mapDispatchToProps)(Settings);

export default SettingsContainer;