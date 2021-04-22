import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { api } from "../../services/Api";
import {
  deleteMiss,
  Auth,
  likeMiss,
  unLikeMiss,
  addReply
} from "../../actions/index";

class SingleMissPage extends Component {
  handleDeleteMiss = (e, selectedMis) => {
    api.miss.deleteMiss(selectedMis).then((res) => {
      this.props.deleteMiss(selectedMis);
    });
    this.props.history.push("/");
  };

  handleLike = (e, user, miss) => {
    api.like
      .createLike({ user_id: user.id, miss_id: miss.id, like: true })
      .then((favorite) => {
        console.log(favorite);
        this.props.likeMiss(favorite);
      });
  };

  handleunLike = (e, miss, user, favorite) => {
    api.like
      .unLikeMiss({
        id: favorite.id,
        user_id: user.id,
        miss_id: miss.id,
        like: false,
      })
      .then((fave) => {
        console.log(favorite);
        this.props.unLikeMiss(favorite);
      });
  };

  render() {
    const replyArr = this.props.replies.filter(
      (reply) => reply.miss.id === this.props.selectedMis.id
    );
    const faveArr = this.props.favorites.filter(
      (fave) => fave.miss.id == this.props.selectedMis.id
    );
    console.log(replyArr)
    return (
      <div className="singlemisscontainer">
        <div className="logo">
          <img src="/testlogo3.jpg" alt="logo"></img>
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
            {faveArr.length ? (
              <button
                className="fave"
                onClick={(e) =>
                  this.handleunLike(
                    e,
                    this.props.user,
                    this.props.selectedMis,
                    faveArr[0]
                  )
                }
              >
                UNLIKE
              </button>
            ) : (
              <button
                className="fave"
                onClick={(e) =>
                  this.handleLike(e, this.props.user, this.props.selectedMis)
                }
              >
                LIKE
              </button>
            )}
          </div>
          <div className="missemaildiv">
          <a href={`mailto:${this.props.selectedMis.user.email}`}>REPLY BY EMAIL</a>
          </div>
                or
          <Link className="replybyformbutton"
          to={{
            pathname: "/replyback",
            state: { selectedMis: this.props.selectedMis },
          }}
        >
        REPLY BY FORM
        </Link>
        </div>
        {this.props.selectedMis.user.id === this.props.user.id && 
        <Link className="deletebutton" to="/">
          <div
            onClick={(e) => this.handleDeleteMiss(e, this.props.selectedMis)}
          >
            x
          </div>
        </Link>
      }
        <div className="repliescontainer">
          {/* {replyArr.length && !!replyArr === true ? ( */}
            {/* return (  */}
            REPLIES:
          {replyArr.map((reply) => (
            <ul>
              <div className="ui divider"></div>
              <div className="replytitle">{reply.title}</div>
              <div className="createdat">{reply.created_at}</div>
              <div className="replymsg">{reply.message}</div>
              <div className="replyuser">Posted by: {reply.user.email}</div>
            </ul>
          ))}
            {/* )
          ) : ( 
            null
          )} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedMis: state.miss.selectedMis,
    user: state.auth.user,
    favorites: state.favorite.favorites,
    replies: state.reply.replies,
  };
};
export default connect(mapStateToProps, {
  deleteMiss,
  Auth,
  likeMiss,
  unLikeMiss,
  addReply,
})(SingleMissPage);
