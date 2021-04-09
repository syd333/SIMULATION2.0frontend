import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { api } from "./services/Api";
import "./App.css";

class App extends Component {

  state = {
    auth: {
      user: {},
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">SIMULATION 2.0</header>
      </div>
    );
  }
}

export default App;
