import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { api } from "../../services/Api";
import { deleteMiss, Auth, selectedMis } from "../../actions/index";

class SingleMissPage extends Component {
  handleDeleteMiss = (e, selectedMis) => {
    api.miss.deleteMiss(selectedMis).then((res) => {
      this.props.deleteMiss(selectedMis);
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="singlemisscontainer">
        <div className="logo">
          <img src="/testlogo.jpg" alt="faux logo"></img>
        </div>
        <br></br>
        <div className="singlemisstitle">
        <div className="singlemiss">
          MISS
            </div>
          {this.props.selectedMis.title.toUpperCase()}
          <div className="createdat">
            Posted on: {this.props.selectedMis.user.created_at}
          </div>
        </div>
        <br></br>
        <div className="singlemissmsg">{this.props.selectedMis.message} </div>
        <br></br>
        <div className="replybutton">
          <a href={`mailto:${this.props.user.email}`}>REPLY</a>
        </div>
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
  return { selectedMis: state.miss.selectedMis, user: state.auth.user };
};
export default connect(mapStateToProps, { deleteMiss, Auth })(SingleMissPage);
