import React from "react";
import { Divider } from "@mui/material";
import "../css/dividerWithText.css"; // Import the CSS file

const DividerWithText = ({ text }) => {
  return (
    <div className="divider-container">
      <Divider className="divider-line" />
      <div className="divider-text">{text}</div>
      <Divider className="divider-line" />
    </div>
  );
};

export default DividerWithText;
