import React from "react";
import { connect } from "react-redux";
import { Dropdown, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";


const DropDown = (props) => {
  const loggedIn = !!props.user.id;
  return (
    <div className="pointhomecontainer">
      <Link to="/" className="pointhome">
        2.0
      </Link>
      {loggedIn ? (
        <div className="dropdowncontainer">
          <Dropdown text="*">
            <Dropdown.Menu>
              {/* <Input
                icon="search"
                iconPosition="left"
                className="search"
              /> */}
              {/* <Dropdown.Divider /> */}
              <Dropdown.Menu scrolling>
                <Dropdown.Item>
                  <Link to="/search" className="item">
                    search
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
        </div>
      ) : (
        <div className="dropdown container">
          <Dropdown text="*">
            <Dropdown.Menu>
              {/* <Input icon="search" iconPosition="left" className="search" 
               onChange={(e) => this.handleChange(e)}/> */}
              {/* <Dropdown.Divider /> */}
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
