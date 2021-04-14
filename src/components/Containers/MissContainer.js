// HAS ALL MISSED CONNECTIONS WHERE WE WILL RENDER THROUGH THEM AND DISPLAY
import React, { Component } from "react";
import { connect } from "react-redux";
import { api } from "../../services/Api";
import { fetchMiss } from "../../actions/index";
import MissPages from "../Miss/MissPages";

class MissContainer extends Component {
  componentDidMount() {
    api.miss.getAllMisses().then((miss) => {
      this.props.fetchMiss(miss);

    });
  }

  /* {this.props.miss.map(mis => <MissPages mis={mis}/>)} */
  render() {
    return (
      <div className="misses">
        {this.props.miss.map((mis) => {
          return (
            <ol>
              <li> 
              {mis.title} 
              </li>
            </ol>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { miss: state.miss };
};

export default connect(mapStateToProps, { fetchMiss })(MissContainer);
