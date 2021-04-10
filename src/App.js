import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { api } from "./services/Api";
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import { Auth } from './actions/index'

import DropDown from './components/Account/DropDown';

//all handlelogin, handlesignup etc 
// no state?
//all route paths 
//mapstatetoprops.login: state.login.currentuser?

class App extends Component {

  state = {
    auth: {
      user: {},
    }
  }

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
         <DropDown/>
      </div>
    );
  }
}

export default App;
