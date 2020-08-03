import React from "react";
import "../Style/Increase.css";
import { connect } from "react-redux";

function Increase(props) {
  const { increase } = props;
  return (
    <div className={"increase"}>
      <button onClick={increase} className={"inc__button"}>
        INCREASE
      </button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () =>
      dispatch({
        type: "INCREASE",
      }),
  };
}

export default connect(null, mapDispatchToProps)(Increase);
