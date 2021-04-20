import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { api } from "../../services/Api";
import {
  deleteMiss,
  Auth,
  likeMiss,
  unlikeMiss
} from "../../actions/index";

class SingleMissPage extends Component {
  handleDeleteMiss = (e, selectedMis) => {
    api.miss.deleteMiss(selectedMis).then((res) => {
      this.props.deleteMiss(selectedMis);
    });
    this.props.history.push("/");
  };


  handleLike = (e, user, miss) => {
    console.log('i was clicked')
    api.like.createLike({user_id: user.id, miss_id: miss.id, like: true}).then((favorite) => {
      this.props.likeMiss(favorite)
    })
  }

  render() {
    return (
      <div className="singlemisscontainer">
        <div className="logo">
          <img src="/testlogo3.jpg" alt="ogo"></img>
        </div>
        <br></br>
        <div className="singlemisstitle">
          <div className="singlemiss">MISS</div>
          {this.props.selectedMis.title.toUpperCase()}
          <div className="createdat">
            Posted on: {this.props.selectedMis.user.created_at}
          </div>
        </div>
        <br></br>
        <div className="singlemissmsg">{this.props.selectedMis.message} </div>
        <div className="replybutton">
          <div className="favebutton">
            <button className="fave" onClick={(e) => this.handleLike(e, this.props.user, this.props.selectedMis )}>
              LIKE
            </button>
          </div>
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
  console.log(state.favorites)
  return {
  
    selectedMis: state.miss.selectedMis,
    user: state.auth.user,
    favorites: state.favorites
  };
};
export default connect(mapStateToProps, { deleteMiss, Auth, likeMiss, unlikeMiss })(SingleMissPage);
