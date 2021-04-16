import React, { Component } from "react";
import MissContainer from "./MissContainer";
// import SingleMissPage from "../Miss/SingleMissPage";
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
