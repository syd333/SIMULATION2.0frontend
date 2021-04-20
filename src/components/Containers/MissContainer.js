// HAS ALL MISSED CONNECTIONS WHERE WE WILL RENDER THROUGH THEM AND DISPLAY
import React, { Component } from "react";
import { connect } from "react-redux";
import { api } from "../../services/Api";
import { fetchMiss, selectedMis, slicedMiss } from "../../actions/index";
import { Link } from "react-router-dom";

class MissContainer extends Component {
  componentDidMount() {
    api.miss.getAllMisses().then((miss) => {
      this.props.fetchMiss(miss);
    });
  }

  handleMiss = (e, miss) => {
    this.props.selectedMis(miss);
  };

  // handleSlice = (misses) => {

  // }

  handleMoreMisses = (misses) => {
    for (let i = 0; i < this.props.misses.length; i + 15) {
      let newMissArr = [];
      return this.props.misses.map((miss) => {
        return (
          <>
            <div className="peak-box"></div>
            <ul className="misseslist">
              <li>
                <Link to="/miss" className="misseslinks">
                  <div
                    className="container"
                    onClick={(e) => this.handleMiss(e, miss)}
                  >
                    {miss.title.toUpperCase()}
                  </div>
                </Link>
              </li>
            </ul>
          </>
        )
      });
    }
    // return newMissArr;
  };

  render() {
    return (
      <div className="misses">
        <div className="wrapper">{this.handleMoreMisses()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { misses: state.miss.misses };
};

export default connect(mapStateToProps, { fetchMiss, selectedMis, slicedMiss })(
  MissContainer
);
