import React from "react";
import "./Display.css";

const Display = ({ value }) => {
  return (
    <div className="display-container">
      <div className="display-value">{value || "0"}</div>
    </div>
  );
};

export default Display;
