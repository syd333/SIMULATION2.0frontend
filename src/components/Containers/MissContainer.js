// HAS ALL MISSED CONNECTIONS WHERE WE WILL RENDER THROUGH THEM AND DISPLAY
import React, { Component } from "react";
import { List } from "semantic-ui-react";

class MissContainer extends Component {
  render() {
    return (
      <div className= "misslinks">
        <List link>
          <List.Item active>Miss title</List.Item>
          <List.Item as="a">Miss title</List.Item>
          <List.Item as="a">Miss title</List.Item>
          <List.Item as="a">Miss title</List.Item>
        </List>
      </div>
    );
  }
}

export default MissContainer;
