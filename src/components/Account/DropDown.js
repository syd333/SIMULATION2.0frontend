import React, { Component } from "react";
import { Dropdown, Input } from "semantic-ui-react";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

class DropDown extends Component {
  render() {
    return (
      <div className="dropdown container">
        <Router>
          <Dropdown text="account">
            <Dropdown.Menu>
              <Input icon="search" iconPosition="left" className="search" />
              <Dropdown.Divider />
              <Dropdown.Header content="search new city..." />
              <Dropdown.Menu scrolling>
                <Dropdown.Item>
                  <Link to="/login" className="item">
                    login
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/signup" className="item">
                    signup
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/favorites" className="item">
                    favorites
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Menu>
          </Dropdown>
        </Router>
      </div>
    );
  }
}

export default DropDown;
