import React, { useContext, useState } from "react";
import {
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Dialpad,
  Person2Outlined,
  RadioButtonCheckedOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "../css/footer.css";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const [value, setValue] = useState(0);
  const { missedCalls } = useContext(AppContext);
  const navigate = useNavigate();

  const handleNavigation = (newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/");
        break;
      case 2:
        navigate("/dial");
        break;
      default:
        navigate("/dial");
        break;
    }
  };

  return (
    <Box className="bottom-tabs-container">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => handleNavigation(newValue)}
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
