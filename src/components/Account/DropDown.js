import React, { Component } from "react";
import { connect } from "react-redux";
import { Dropdown, Input } from "semantic-ui-react";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

class DropDown extends Component {
  render() {
    const loggedIn = !!this.props.auth.user_id;
    return (
      <div className="dropdown container">
        {loggedIn ? (
        <Router>
            <Dropdown text="account">
              <Dropdown.Menu>
                <Input icon="search" iconPosition="left" className="search" />
                <Dropdown.Divider />
                <Dropdown.Header content="search new city..." />
                <Dropdown.Menu scrolling>
                  <Dropdown.Item>
                    <Link to="/favorites" className="item">
                      favorites
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/logout" className="item">
                      logout
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </Router> 
         ) : ( 
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
         )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: {
      user: state.user
    }
  };
};
export default connect(mapStateToProps)(DropDown);
