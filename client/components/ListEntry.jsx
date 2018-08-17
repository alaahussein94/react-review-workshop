import React from "react";

var ListEntry = props => {
  //props is items in List.jsx
  return <li onClick={() => props.click(props.index)}>{props.item}</li>;
};

export default ListEntry;
