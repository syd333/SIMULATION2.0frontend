import React, { Component } from "react";
import { connect } from "react-redux";

class Favorites extends Component {
  render() {
    console.log(this.props.favorites.favorite);
    return (
      <div className="favecontainer">
        YO LIKES: 
        <div className="ui link list">
          <div className="active item">{this.props.favorites.favorite}</div>
          <a className="item">FAVORITE LINK HERE</a>
          <a className="item">FAVORITE LINK HERE</a>
          <a className="item">FAVORITE LINK HERE</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    favorites: state.favorite.favorites
  };
};

export default connect(mapStateToProps)(Favorites);
