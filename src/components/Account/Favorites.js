import React, { Component } from "react";
import { connect } from "react-redux";

class Favorites extends Component {
  render() {
    console.log(this.props.user)
    return (
      <div className="favecontainer">
        YO LIKES: 
        <div className="ui link list">
          <div className="active item"></div>
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
  return {};
};

export default connect(mapStateToProps)(Favorites);
