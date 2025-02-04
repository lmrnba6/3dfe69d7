import React from "react";
import CallIcon from "@mui/icons-material/Call";
import TuneIcon from "@mui/icons-material/Tune"; // Updated for consistency
import "../css/nav.css";

const Nav = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="tabs-container">
      {/* Title with Call Icon */}
      <div className="tabs-title">
        <CallIcon className="call-icon" />
        <span>Activity</span>
      </div>

      {/* Tabs */}
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

      {/* Settings Icon */}
      <div className="settings-icon">
        <TuneIcon />
      </div>
    </div>
  );
};

export default Nav;
