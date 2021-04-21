import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { api } from "../../services/Api";
import {
  deleteMiss,
  Auth,
  likeMiss,
  unLikeMiss,
  selectedMis,
} from "../../actions/index";

class SingleMissPage extends Component {
  handleDeleteMiss = (e, selectedMis) => {
    api.miss.deleteMiss(selectedMis).then((res) => {
      this.props.deleteMiss(selectedMis);
    });
    this.props.history.push("/");
  };

  handleLike = (e, user, miss) => {
    api.like.createLike({ user_id: user.id, miss_id: miss.id, like: true }).then((favorite) => {
      console.log(favorite)
        this.props.likeMiss(favorite);
      });
      // console.log(this.props.favorites)
    // let likeBtn = document.querySelector(".fave");
    // if (this.props.favorites.favorite === true) {
    //   likeBtn.innerHTML = "UNLIKE";
    // } else {
      // api.like.updateLike({ user_id: user.id, miss_id: miss.id, like: false }).then((favorite) => {
      //     this.props.unLikeMiss(favorite)
      //   });
      // this.props.favorites.favorite === false
    //   likeBtn.innerHTML = "LIKE";
    // }
  };

  handleunLike = (e, miss, user, favorite) => {
    api.like.unLikeMiss({id: favorite.id, user_id: user.id, miss_id: miss.id, like: false }).then((fave) => {
      console.log(favorite)
      this.props.unLikeMiss(favorite);
    });
  }


   render() {
    // console.log(this.props.favorites.filter(fave => fave.miss.id == this.props.selectedMis.id))
    // console.log(this.props.selectedMis)
   const faveArr = this.props.favorites.filter(fave => fave.miss.id == this.props.selectedMis.id)
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
           {faveArr.length ? (
                 <button className="fave" onClick={(e) =>
                  this.handleunLike(e, this.props.user, this.props.selectedMis, faveArr[0])}>
                UNLIKE
              </button>
             ) : ( 
              <button className="fave" onClick={(e) =>
                this.handleLike(e, this.props.user, this.props.selectedMis)}>
              LIKE
            </button>
            )}
          </div>
          <a href={`mailto:${this.props.user.email}`}>REPLY</a>
        </div>
        {/* {this.props.selectedMis.user.id === this.props.user.id ? ( */}
        {/* // if (user.role === ADMIN || user.auth && selectedMis.user.id === user.id) { */}
        <Link className="deletebutton" to="/">
          <div
            onClick={(e) => this.handleDeleteMiss(e, this.props.selectedMis)}
          >
            {" "}
            x
          </div>
        </Link>
        {/* ) : (  
          null
         )} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    selectedMis: state.miss.selectedMis,
    user: state.auth.user,
    favorites: state.favorite.favorites,
  };
};
export default connect(mapStateToProps, {
  deleteMiss,
  Auth,
  likeMiss,
  unLikeMiss,
})(SingleMissPage);
