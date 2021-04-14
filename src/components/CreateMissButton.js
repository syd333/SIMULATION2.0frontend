import React from "react";

const CreateMissButton = (props) => {
    return (
  <div className="addmisscontainer">
    <button className="addmiss" onClick={props.onCreate}>+</button>
  </div>
    )
};

export default CreateMissButton;
