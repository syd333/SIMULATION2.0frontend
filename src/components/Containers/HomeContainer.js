import React, { Component } from "react";
import MissContainer from "./MissContainer";
//display fixed "logo" 
// infinite scroll?
const HomeContainer = () => {


    return (
      <div className="homecontainer">
        <MissContainer />
        <div className="addmisscontainer">
          <button className="addmiss">+</button>
        </div>
      </div>
    );
}

export default HomeContainer;
