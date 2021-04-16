import React from "react";
import { connect } from "react-redux";
import { Dropdown, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

const DropDown = (props) => {
  const loggedIn = !!props.user.id;
  return (
    <div className="dropdowncontainer">
        <Link to="/" className="pointhome">2.0</Link>
      {loggedIn ? (

          <Dropdown text="*">
            <Dropdown.Menu>
              <Input icon="search" iconPosition="left" className="search" />
              <Dropdown.Divider />
              <Dropdown.Header content="..." />
              <Dropdown.Menu scrolling>
              <Dropdown.Item>
                  <Link to="/profile" className="item">
                    profile
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/favorites" className="item">
                    favorites
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/login" className="item">
                    <div onClick={props.onLogout}>logout</div>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Menu>
          </Dropdown>

      ) : (
        <div className="dropdown container">
  
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
