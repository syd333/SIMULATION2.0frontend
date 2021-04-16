//RENDER SINGLE (CLICKED) MISS
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { api } from "../../services/Api";
import { deleteMiss } from "../../actions/index";

class SingleMissPage extends Component {
  handleDeleteMiss = (e, selectedMis) => {
    console.log(selectedMis);
    api.miss.deleteMiss(selectedMis).then((res) => {
      this.props.deleteMiss(selectedMis);
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="singlemiss">
        {this.props.selectedMis.title}
        <br></br>
        {this.props.selectedMis.message}
        <br></br>
        <Link className="deletebutton" to="/">
          <div
            onClick={(e) => this.handleDeleteMiss(e, this.props.selectedMis)}
          >
            x
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { selectedMis: state.miss.selectedMis };
};
export default connect(mapStateToProps, { deleteMiss })(SingleMissPage);
