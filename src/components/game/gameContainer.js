import { connect } from "react-redux";
import { birdFlyUpCreater, fallBirdCreater } from "../../redux/bird-reducer";
import { cereatePipesCreater, movePipesCreater } from "../../redux/pipes-reducer";
import Game from "./game";



const mapStateToProps = (state) => {
    return {
        top: state.bird.y,
        status: state.bird.status,
        rightPipes: state.pipes.x,
        pipes: state.pipes.pipesCollection,
    }
}

const mapDispatchToProps = (dispatch) => {
  
    return {
        flyBirdUp:() => {
            dispatch(birdFlyUpCreater());
        },
        fallBird:() => {
            dispatch(fallBirdCreater());
        },
        movePipes: (id) => {
            dispatch(movePipesCreater(id));
        },
        createPipes: () => {
            dispatch(cereatePipesCreater());
        }
    }
}




const GameContainer = connect(mapStateToProps,mapDispatchToProps)(Game);
export default GameContainer;