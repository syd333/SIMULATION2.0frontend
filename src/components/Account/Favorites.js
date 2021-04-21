import React, { Component } from "react";
import { connect } from "react-redux";

class Favorites extends Component {
  render() {
    console.log(this.props.favorites.favorite);
    return (
      <div className="favecontainer">
        YO LIKES: 
        <div class="ui link list">
          <div class="active item">{this.props.favorites.favorite}</div>
          <a class="item">FAVORITE LINK HERE</a>
          <a class="item">FAVORITE LINK HERE</a>
          <a class="item">FAVORITE LINK HERE</a>
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
