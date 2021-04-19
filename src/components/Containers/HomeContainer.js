import React, { Component } from "react";
import MissContainer from "./MissContainer";
//display fixed "logo"
// infinite scroll?
class HomeContainer extends Component {
  render() {
    return (
      <div className="homecontainer">
              <MissContainer />
      </div>
    );
  }
}

export default HomeContainer;
