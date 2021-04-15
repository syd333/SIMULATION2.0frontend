import React, { Component } from "react";
import { withRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import { api } from "./services/Api";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import { Auth, addMiss } from "./actions/index";

import DropDown from "./components/Account/DropDown";
import LoginPage from "./components/Account/LoginPage";
import SignUpPage from "./components/Account/SignupPage";
import HomeContainer from "./components/Containers/HomeContainer";
import MissContainer from "./components/Containers/MissContainer";
import SingleMissPage from "./components/Miss/SingleMissPage";
import CreateMissButton from "./components/CreateMissButton";
import CreateMiss from './components/Miss/CreateMiss';

class App extends Component {
  componentDidMount() {
   navigator.geolocation.getCurrentPosition((position) => console.log(position.coords))
    const token = localStorage.token;
    if (token) {
      api.auth.getCurrentUser().then((data) => {
        this.props.Auth(data);
      });
    }
  }
  onLogout = () => {
    localStorage.removeItem("token");
    this.props.Auth({ user: {} });
  };

  onCreate = () => {
    console.log('i was clicked')
    //take me to CreateMiss component
    //  <CreateMiss />
  }

  render() {
    return (
      <div className="App">
        <DropDown onLogout={this.onLogout} />
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/misses" exact component={MissContainer} />
          <Route path="/miss" exact component={SingleMissPage} />
          <Route path="/misses/new" exact component={CreateMiss}/>
        </Switch>
        <CreateMissButton onCreate={this.onCreate}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { Auth, addMiss })(withRouter(App));
