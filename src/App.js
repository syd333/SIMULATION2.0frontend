import React, { Component, useState, useEffect } from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { api } from "./services/Api";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import { Auth, addMiss, getFavorites } from "./actions/index";

import DropDown from "./components/Account/DropDown";
import LoginPage from "./components/Account/LoginPage";
import SignUpPage from "./components/Account/SignupPage";
import HomeContainer from "./components/Containers/HomeContainer";
import MissContainer from "./components/Containers/MissContainer";
import SingleMissPage from "./components/Miss/SingleMissPage";
import CreateMissButton from "./components/CreateMissButton";
import CreateMiss from "./components/Miss/CreateMiss";
import Search from "./components/Account/Search";
import Favorites from "./components/Account/Favorites";
import CreateReply from "./components/Reply/CreateReply";

// const App = () => {
//   const [auth, setAuth] = useState({ user: {} });
// const [favorites, setFavorites] = useState()
// useEffect(() => {
 // const token = localStorage.token;
  // if (token) {
    // api.auth.getCurrentUser().then((data) => {
      //setAuth({
        //user: {
          //id: data.user.id,
//         },
//       });
//     });
//   }
// }, []);
// }

class App extends Component {
  componentDidMount() {
    const token = localStorage.token;
    if (token) {
      api.auth.getCurrentUser().then((data) => {
        this.props.Auth(data);
        this.props.getFavorites(data.user.favorites);
      });
    }
  }
  onLogout = () => {
    localStorage.removeItem("token");
    //setAuth({user: {}})
    this.props.Auth({ user: {} });
  };

  render() {
    //take out render + return
    return (
      <div className="App">
        <DropDown onLogout={this.onLogout} />
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/misses" exact component={MissContainer} />
          <Route path="/miss" exact component={SingleMissPage} />
          <Route path="/misses/new" exact component={CreateMiss} />
          <Route path="/search" exact component={Search} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/replyback" exact component={CreateReply} />
        </Switch>
        <CreateMissButton onCreate={this.onCreate} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

//const { setAuth } = action.auth
//export default connect(mapStateToProps, { setAuth })(App);

export default connect(mapStateToProps, { Auth, addMiss, getFavorites })(
  withRouter(App)
);
