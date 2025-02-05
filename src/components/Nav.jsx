import React from "react";
import CallIcon from "@mui/icons-material/Call";
import TuneIcon from "@mui/icons-material/Tune";
import "../css/nav.css";
import { TAB_ACTIVE, TAB_ARCHIVED, TAB_INBOX } from "../constants/app.contants";

const Nav = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="tabs-container">
      <div className="tabs-title">
        <CallIcon className="call-icon" />
        <span>Activity</span>
      </div>

      <div className="tabs">
        <button
          className={`tab ${selectedTab === TAB_INBOX ? TAB_ACTIVE : ""}`}
          onClick={() => setSelectedTab(TAB_INBOX)}
        >
          Inbox
        </button>
        <button
          className={`tab ${selectedTab === TAB_ARCHIVED ? TAB_ACTIVE : ""}`}
          onClick={() => setSelectedTab(TAB_ARCHIVED)}
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
