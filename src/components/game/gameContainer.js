import { connect } from "react-redux";
import { birdFlyUpCreater, fallBirdCreater } from "../../redux/game-reducer";
import { cereatePipesCreater, movePipesCreater } from "../../redux/game-reducer";
import Game from "./game";



const mapStateToProps = (state) => {
    return {
        top: state.game.bird.y,
        status: state.game.game.status,
        rightPipes: state.game.pipes.x,
        pipes: state.game.pipes.pipesCollection,
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
        },
    }
}




const GameContainer = connect(mapStateToProps,mapDispatchToProps)(Game);
export default GameContainer;