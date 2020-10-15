import React from "react";
import PropTypes from "prop-types";

const MyInput = ({ placeholder, type, id, htmlFor, labelName, setValue }) => {
  return (
    <div className="contMyInput">
      <label htmlFor={htmlFor} className="miLabel" id={id}>
        {labelName}
      </label>

      <input
        className="miInput"
        placeholder={placeholder}
        type={type}
        id={id}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
MyInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  htmlFor: PropTypes.string,
  labelName: PropTypes.string,
  setValue: PropTypes.func,
};
export default MyInput;
