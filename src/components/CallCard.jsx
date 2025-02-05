import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Badge,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallMissedIcon from "@mui/icons-material/CallMissed";

const CallCard = ({ call, toggleArchive, count }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleArchiveToggle = () => {
    toggleArchive(call.id, !call.is_archived);
    handleClose();
  };

  const isMissed = call.call_type === "missed";
  const isInbound = call.direction === "inbound";

  const callText = isMissed
    ? isInbound
      ? `Missed call from ${call.from}`
      : `Missed call to ${call.to}`
    : isInbound
    ? `Received call from ${call.from}`
    : `Answered call to ${call.to}`;

  const viaText = call.via && call.via !== call.to ? ` via ${call.via}` : "";

  const callIcon = isMissed ? (
    <CallMissedIcon sx={{ color: "#FF5722" }} />
  ) : isInbound ? (
    <CallReceivedIcon sx={{ color: "#4CAF50" }} />
  ) : (
    <CallMadeIcon sx={{ color: "#2196F3" }} />
  );

  return (
    <Card sx={{ mb: 2, boxShadow: 1, padding: 0 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              minWidth: 0,
              gap: 2,
            }}
          >
            <Box>{callIcon}</Box>

            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", fontSize: "0.85rem" }}
                >
                  {call.from}
                </Typography>
                <Badge
                  sx={{
                    ml: 1,
                    "& .MuiBadge-badge": {
                      fontSize: "0.6rem", // Smaller font size
                      minWidth: "14px", // Reduce width
                      height: "14px", // Reduce height
                      padding: "2px", // Reduce padding
                    },
                  }}
                  badgeContent={count}
                  color="error"
                />
              </Box>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  display: "block",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  minWidth: 0,
                  flexGrow: 1,
                  maxWidth: "100%",
                  fontSize: "0.7rem", // Adjusted font size
                }}
              >
                {callText}
                {viaText}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ whiteSpace: "nowrap" }} // Prevent time from wrapping
            >
              {new Date(call.created_at).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </Typography>

            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleArchiveToggle}>
                {call.is_archived ? "Unarchive" : "Archive"}
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CallCard;
