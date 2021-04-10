import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { api } from "./services/Api";
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'

import DropDown from './components/Account/DropDown';

class App extends Component {

  // state = {
  //   auth: {
  //     user: {},
  //   }
  // }

  render() {
    return (
      <div className="App">
         <DropDown/>
        {/* <header className="App-header">SIMULATION 2.0</header> */}
      </div>
    );
  }
}

export default App;
