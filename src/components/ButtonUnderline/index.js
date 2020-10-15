import React from "react";

const ButtonUnderline = ({ text, title }) => {
  return (
    <div className="btnUnderline">
      <p>
        {title}, <span>{text}</span>
      </p>
    </div>
  );
};

export default ButtonUnderline;
