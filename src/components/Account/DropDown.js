import React, { Component } from "react";
import { Dropdown, Input } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class DropDown extends Component {
  render() {
    return (
      <Dropdown text="account" >
        <Dropdown.Menu>
          <Input icon="search" iconPosition="left" className="search" />
          <Dropdown.Divider />
          <Dropdown.Header content="search state..." />
          <Dropdown.Menu scrolling>
           <Dropdown.Item key="signup" text="signup" value="signup" />
           <Dropdown.Item key="login" text="login" value="login"/>
           <Dropdown.Item key="favorites" text="favorites" value="favorites" />
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default DropDown;
