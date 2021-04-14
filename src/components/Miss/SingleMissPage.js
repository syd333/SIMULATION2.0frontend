//RENDER SINGLE (CLICKED) MISS
import React, {Component} from 'react';
import { connect } from 'react-redux';


class SingleMissPage extends Component {
    render(){
        return (
            <div className="singlemiss">
                {this.props.selectedMis.title}
                <br></br>
                {this.props.selectedMis.message}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {selectedMis: state.miss.selectedMis}
   
}
export default connect(mapStateToProps)(SingleMissPage);