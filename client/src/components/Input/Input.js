import React from "react";

function Input(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type={props.type}
        required
        name={props.name}
        onChange={props.handleChange}
      ></input>
    </div>
  );
}

export default Input;
