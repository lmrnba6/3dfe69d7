export const BASE_URL = "https://aircall-api.onrender.com";
export const CALL_TYPE_MISSED = "missed";
export const CALL_DIRECTION_INBOUND = "inbound";
export const CALL_COLORS = {
  missed: "#FF5722", // Red for missed calls
  inbound: "#4CAF50", // Green for received calls
  outbound: "#2196F3", // Blue for answered calls
};
export const CALL_LABELS = {
  missedInbound: "Missed call from",
  missedOutbound: "Missed call to",
  received: "Received call from",
  answered: "Answered call to",
};
export const TIME_FORMAT_OPTIONS = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
};
export const TAB_INBOX = "inbox";
export const TAB_ACTIVE = "active";

export const TAB_ARCHIVED = "archived";
export const EMPTY_CALLS_MESSAGE = "There are no calls";
export const EMPTY_ARCHIVED_CALLS_MESSAGE = "There are no archived calls";

export const ARCHIVE_ALL_TEXT = "Archive All Calls";
export const UNARCHIVE_ALL_TEXT = "Unarchive All Calls";
export const NAV_HOME = "/";
export const NAV_DIAL = "/dial";
