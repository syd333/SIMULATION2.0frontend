import React from "react";
import { Link } from 'react-router-dom';

const CreateMissButton = (props) => {
    return (
  <div className="addmisscontainer">
    <Link to="/misses/new">
    <button className="addmiss" onClick={props.onCreate}>+</button>
    </Link>
  </div>
    )
};

export default CreateMissButton;
