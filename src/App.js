import React, { Component } from "react";
import { withRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import { api } from "./services/Api";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import { Auth } from "./actions/index";

import DropDown from "./components/Account/DropDown";
import LoginPage from "./components/Account/LoginPage";
import SignUpPage from "./components/Account/SignupPage";
import HomeContainer from "./components/Containers/HomeContainer";


class App extends Component {

  componentDidMount() {
    const token = localStorage.token;
    if (token) {
      api.auth.getCurrentUser().then((user) => {
        this.props.Auth(user);
      });
    }
  }
  //   const onLogout = () => {
  //     localStorage.removeItem('token')
  //     props.Auth({})
  // }

  render() {
    return (
      <div className="App">
        <DropDown />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={SignUpPage} />
            {/* <Route path="/logout" exact component={SignUpPage} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.user,
  };
};

export default connect(mapStateToProps, { Auth })(App);
