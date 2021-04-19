//RENDER SINGLE (CLICKED) MISS
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { api } from "../../services/Api";
import { deleteMiss, Auth } from "../../actions/index";

class SingleMissPage extends Component {
  handleDeleteMiss = (e, selectedMis) => {
    api.miss.deleteMiss(selectedMis).then((res) => {
      this.props.deleteMiss(selectedMis);
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="singlemiss">
        <p>MISS</p>
        <div className="logo"></div>
         {/* <img src="src/assests/Untitled-2.jpg" alt="slogo"></img> */}
        <div className="singlemisstitle">{this.props.selectedMis.title}</div>
        <br></br>
        <div className="singlemissmsg">{this.props.selectedMis.message} </div>
        <br></br>
        <div className="replybutton">
          <a href={`mailto:${this.props.user.email}`}>reply</a>
        </div>
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
  console.log(state);
  return { selectedMis: state.miss.selectedMis, user: state.auth.user };
};
export default connect(mapStateToProps, { deleteMiss, Auth })(SingleMissPage);
