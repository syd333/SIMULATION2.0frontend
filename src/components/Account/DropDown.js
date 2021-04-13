import React from "react";
import { connect } from "react-redux";
import { Dropdown, Input } from "semantic-ui-react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const DropDown = (props) => {
  const loggedIn = !!props.user.id
  return (
      
        <div className="dropdown container">
          {loggedIn ? (
        <Router>
          <Dropdown text="*">
            <Dropdown.Menu>
              <Input icon="search" iconPosition="left" className="search" />
              <Dropdown.Divider />
              <Dropdown.Header content="..." />
              <Dropdown.Menu scrolling>
                <Dropdown.Item>
                  <Link to="/favorites" className="item">
                    favorites
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/" className="item" onClick={props.onLogout}>
                    logout
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Menu>
          </Dropdown>
        </Router>
      ) : (
        <div className="dropdown container">
        <Router>
          <Dropdown text="*">
            <Dropdown.Menu>
              <Input icon="search" iconPosition="left" className="search" />
              <Dropdown.Divider />
              <Dropdown.Header content="..." />
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
              </Dropdown.Menu>
            </Dropdown.Menu>
          </Dropdown>
        </Router>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};
export default connect(mapStateToProps)(DropDown);
