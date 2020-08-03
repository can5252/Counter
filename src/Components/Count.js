import React from "react";
import "../Style/Count.css";
import { connect } from "react-redux";

function Count(props) {
  const { count } = props;
  console.log(props)
  return <div className={"count"}>{count}</div>;
}

function mapStateToProps(state) {
  console.log(state);
  return {
    count : state
  };
}

export default connect(mapStateToProps, null)(Count);
