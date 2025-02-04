import React from "react";
import { Button } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import "../css/archiveAllButton.css";

const ArchiveAllButton = ({ onClick, text }) => {
  return (
    <Button
      className="unarchive-button"
      onClick={onClick}
      fullWidth
      disableElevation
      disableRipple
      startIcon={<ArchiveIcon className="archive-icon" />}
    >
      {text}
    </Button>
  );
};

export default ArchiveAllButton;
