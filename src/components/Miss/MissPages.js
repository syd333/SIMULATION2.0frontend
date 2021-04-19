import React, { Component } from "react";
import { connect } from "react-redux";
import MissContainer from '../Containers/MissContainer'
import { List } from "semantic-ui-react";


// onclick - new route 
class MissPages extends Component() {
  render() {
    return (
      <div className="">
        {/* <List link> */}
          {/* <List.Item active>{this.props.mis.title}</List.Item> */}
          {/* <List.Item as="a">Miss title</List.Item>
          <List.Item as="a">Miss title</List.Item>
          <List.Item as="a">Miss title</List.Item>
        </List> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log(state)
  return {};
};

export default MissPages;
