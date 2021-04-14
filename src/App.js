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
import MissContainer from "./components/Containers/MissContainer";
import SingleMissPage from './components/Miss/SingleMissPage';

class App extends Component {
  componentDidMount() {
    const token = localStorage.token;
    if (token) {
      api.auth.getCurrentUser().then((data) => {
        this.props.Auth(data);
        // console.log(data);
      });
    }
  }
  onLogout = () => {
    localStorage.removeItem("token");
    this.props.Auth({user:{} })
    this.props.history.push("/login");

  };



  
  render() {
    return (
      <div className="App">
        <DropDown onLogout={this.onLogout} />
 
          {/* <Switch> */}
            <Route path="/" exact component={HomeContainer} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/misses" exact component={MissContainer} />
            <Route path="miss" exact component={SingleMissPage} />
          {/* </Switch> */}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { Auth })(withRouter(App));
