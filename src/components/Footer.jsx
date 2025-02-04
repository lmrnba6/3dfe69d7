import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Badge,
  Box,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Dialpad,
  Person2Outlined,
  RadioButtonCheckedOutlined,
} from "@mui/icons-material";
import "../css/footer.css";

const Footer = ({ missedCalls }) => {
  const [value, setValue] = useState(0);

  return (
    <Box className="bottom-tabs-container">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        showLabels
        className="bottom-navigation"
      >
        <BottomNavigationAction
          icon={
            <Badge badgeContent={missedCalls} color="error">
              <CallIcon />
            </Badge>
          }
        />
        <BottomNavigationAction icon={<Person2Outlined />} />

        <BottomNavigationAction icon={<Dialpad className="dialpad-icon" />} />

        <BottomNavigationAction icon={<SettingsIcon />} />

        <BottomNavigationAction
          icon={<RadioButtonCheckedOutlined className="radio-button-icon" />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
