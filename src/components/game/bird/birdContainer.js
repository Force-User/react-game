import { connect } from "react-redux"
import Bird from "./bird"


const mapStateToProps = (state) => {
    return {
        top:state.bird.y,
        left: state.bird.x,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}



const BirdContainer = connect(mapStateToProps,mapDispatchToProps)(Bird);
export default BirdContainer;