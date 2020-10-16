import React from "react";

const ButtonPrimary = ({ text, action }) => {
  return (
    <div className="contBtnPrimary">
      <button onClick={action ? () => action() : console.log("no action")}>
        {text}
      </button>
    </div>
  );
};

export default ButtonPrimary;
