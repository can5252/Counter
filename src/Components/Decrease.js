import React from "react";
import "../Style/Decrease.css";
import { connect } from "react-redux";
function Decrease(props) {
    const {decrease} = props
  return (
    <div className={"decrease"}>
      <button onClick={decrease} className={"dec__button"}>DECREASE</button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    decrease: () =>
      dispatch({
        type: "DECREASE",
      }),
  };
}
export default connect(null, mapDispatchToProps)(Decrease);
