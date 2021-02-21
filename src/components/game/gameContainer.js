import { connect } from "react-redux";
import { birdFlyUpCreater, fallBirdCreater } from "../../redux/bird-reducer";
import Game from "./game";



const mapStateToProps = (state) => {
    console.log("state");
    return {
        top: state.bird.y,
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("dis");
    return {
        flyBirdUp:() => {
            dispatch(birdFlyUpCreater());
        },
        fallBird:() => {
            dispatch(fallBirdCreater());
        }
    }
}




const GameContainer = connect(mapStateToProps,mapDispatchToProps)(Game);
export default GameContainer;