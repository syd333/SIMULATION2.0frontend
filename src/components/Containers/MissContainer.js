// HAS ALL MISSED CONNECTIONS WHERE WE WILL RENDER THROUGH THEM AND DISPLAY
import React, { Component } from "react";
import { connect } from "react-redux";
import { api } from "../../services/Api";
import { fetchMiss, selectedMis } from "../../actions/index"; 
import { Link } from "react-router-dom";

class MissContainer extends Component {
  componentDidMount() {
    api.miss.getAllMisses().then((miss) => {
      this.props.fetchMiss(miss);
    });
  }

  handleMiss =  (e, miss) => {
    this.props.selectedMis(miss)
  };

  render() {
    return (
      <div className="misses">
        {this.props.misses.map((miss) => {
          return (
            <ul className="misseslist">
              <li>
                <Link to="/miss" className="misseslinks">
                  <div className="container" onClick={(e) => this.handleMiss(e, miss)}>
                    {miss.title}
                  </div>
                </Link>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { misses: state.miss.misses };
};

export default connect(mapStateToProps, { fetchMiss, selectedMis })(MissContainer);
