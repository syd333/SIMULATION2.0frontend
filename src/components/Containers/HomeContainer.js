import React, { Component } from "react";

import MissContainer from "./MissContainer";

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <MissContainer />
        <div className="addmisscontainer">
          <button className="addmiss">+</button>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
