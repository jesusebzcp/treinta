import React from "react";
import PropTypes from "prop-types";

const ButtonUnderline = ({ text, title }) => {
  return (
    <div className="btnUnderline">
      <p>
        {title}, <span>{text}</span>
      </p>
    </div>
  );
};
ButtonUnderline.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
};

export default ButtonUnderline;
