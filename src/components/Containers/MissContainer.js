// HAS ALL MISSED CONNECTIONS WHERE WE WILL RENDER THROUGH THEM AND DISPLAY
import React, { Component } from "react";
import { connect } from 'react-redux';
import { api } from '../../services/Api';
import { fetchMiss } from '../../actions/index';
import { List } from "semantic-ui-react";

class MissContainer extends Component {
  componentDidMount() {
    api.miss.getAllMisses().then(miss => console.log(miss))
  }
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

const mapStateToProps = state =>{
return {}
}

export default connect(mapStateToProps, {fetchMiss})(MissContainer);
