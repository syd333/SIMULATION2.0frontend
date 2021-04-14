import React, { Component } from "react";
import MissContainer from "./MissContainer";
//display fixed "logo"
// infinite scroll?
class HomeContainer extends Component {
  render() {
      console.log('where is the button')
    return (
      <div className="homecontainer">
        <MissContainer />
        <div className="addmisscontainer">
          <button className="addmiss">+</button>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
