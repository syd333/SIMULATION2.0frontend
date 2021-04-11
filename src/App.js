import React, { Component } from "react";
import { withRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import { api } from "./services/Api";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import { Auth } from "./actions/index";

import DropDown from "./components/Account/DropDown";
import LoginPage from "./components/Account/LoginPage";
import SignUpPage from "./components/Account/SignupPage";

//all handlelogin, handlesignup etc
// no state?
//all route paths
//mapstatetoprops.login: state.login.currentuser?

class App extends Component {
  state = {
    auth: {
      user: {},
    },
  };

  handleLogin = () => (
    <LoginPage history={this.props.history} onLogin={this.login} />
  );
  handleSignUp = () => <SignUpPage onLogin={this.login} />;

  // componentDidMount(){
  //   const token = localStorage.token
  //   if(token){
  //     api.auth.getCurrentUser().then(data => {
  //       this.setState({
  //         auth: {
  //           ...this.state.auth,
  //           user: {user_id: data.user.id, email: data.user.email}
  //         }
  //       })
  //     })
  //   }
  // }

  render() {
    return (
      <div className="App">
        <DropDown />
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={this.handleLogin} />
            <Route path="/signup" exact component={this.handleSignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
