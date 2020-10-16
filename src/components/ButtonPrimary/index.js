import React from "react";
import PropTypes from "prop-types";

const ButtonPrimary = ({ text, action }) => {
  return (
    <div className="contBtnPrimary">
      <button onClick={action ? () => action() : console.log("no action")}>
        {text}
      </button>
    </div>
  );
};
ButtonPrimary.propTypes = {
  text: PropTypes.string,
  action: PropTypes.func,
};
export default ButtonPrimary;
