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
import {
  CALL_COLORS,
  CALL_DIRECTION_INBOUND,
  CALL_TYPE_MISSED,
  TIME_FORMAT_OPTIONS,
  CALL_LABELS,
} from "../constants/app.contants";

const CallCard = ({ call, toggleArchive, count }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleArchiveToggle = () => {
    toggleArchive(call.id, !call.is_archived);
    handleClose();
  };

  const isMissed = call.call_type === CALL_TYPE_MISSED;
  const isInbound = call.direction === CALL_DIRECTION_INBOUND;

  const callText = isMissed
    ? isInbound
      ? `${CALL_LABELS.missedInbound} ${call.from}`
      : `${CALL_LABELS.missedOutbound} ${call.to}`
    : isInbound
    ? `${CALL_LABELS.received} ${call.from}`
    : `${CALL_LABELS.answered} ${call.to}`;

  const viaText = call.via && call.via !== call.to ? ` via ${call.via}` : "";

  const callIcon = isMissed ? (
    <CallMissedIcon sx={{ color: CALL_COLORS.missed }} />
  ) : isInbound ? (
    <CallReceivedIcon sx={{ color: CALL_COLORS.inbound }} />
  ) : (
    <CallMadeIcon sx={{ color: CALL_COLORS.outbound }} />
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
                {count > 1 && (
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
                )}
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
                  fontSize: "0.7rem",
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
              sx={{ whiteSpace: "nowrap" }}
            >
              {new Date(call.created_at).toLocaleTimeString(
                [],
                TIME_FORMAT_OPTIONS
              )}
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
