import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Favorites extends Component {
  render() {
    return (
      <div className="favecontainer">
        YO LIKES:
        {this.props.favorites.map((fave) => {
          return (
            <div className="favelinklist">
              <Link to='/' >
              <div className="favetitle"> {fave.miss.title} </div>
              <div className="favemsg">{fave.miss.message}</div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    favorites: state.favorite.favorites,
  };
};

export default connect(mapStateToProps)(Favorites);
// {/* <div className="active item"></div>
// <a className="item">FAVORITE LINK HERE</a>
// <a className="item">FAVORITE LINK HERE</a>
// <a className="item">FAVORITE LINK HERE</a>
