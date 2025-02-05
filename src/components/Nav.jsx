import React from "react";
import CallIcon from "@mui/icons-material/Call";
import TuneIcon from "@mui/icons-material/Tune";
import "../css/nav.css";

const Nav = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="tabs-container">
      <div className="tabs-title">
        <CallIcon className="call-icon" />
        <span>Activity</span>
      </div>

      <div className="tabs">
        <button
          className={`tab ${selectedTab === "inbox" ? "active" : ""}`}
          onClick={() => setSelectedTab("inbox")}
        >
          Inbox
        </button>
        <button
          className={`tab ${selectedTab === "archived" ? "active" : ""}`}
          onClick={() => setSelectedTab("archived")}
        >
          All Calls
        </button>
      </div>

      <div className="settings-icon">
        <TuneIcon />
      </div>
    </div>
  );
};

export default Nav;
