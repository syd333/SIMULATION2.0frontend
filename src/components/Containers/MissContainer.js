// HAS ALL MISSED CONNECTIONS WHERE WE WILL RENDER THROUGH THEM AND DISPLAY
import React, { Component } from "react";
import { connect } from "react-redux";
import { api } from "../../services/Api";
import { fetchMiss } from "../../actions/index";
import MissPages from "../Miss/MissPages";

class MissContainer extends Component {
  componentDidMount() {
    api.miss.getAllMisses().then((miss => 
      {
        this.props.fetchMiss(miss) 
        console.log(miss)
      })
      
    );
  }


  // {this.props.hogs.map(hog => <HogTile hog={hog} formatHogName={this.props.formatHogName} handleClick={this.props.handleClick}/>)}
  render() {
    return (
      <div className="misses">
        {/* {this.props.miss.title} */}
        {/* {this.props.miss.map(m => <MissPage m={m}/>)} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {miss: state.miss}
};


export default connect(mapStateToProps, { fetchMiss })(MissContainer);
