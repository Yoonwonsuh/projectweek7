import React from "react";
import "./HorizontalLine.scss";

const HorizontalLine = ({ text }) => {
  return (
    <div className="horizontal">
      <span className="line">{text}</span>
    </div>
  );
};

export default HorizontalLine;
