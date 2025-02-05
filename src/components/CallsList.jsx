import React from "react";
import { Box } from "@mui/material";
import CallCard from "../components/CallCard";
import ArchiveAllButton from "../components/ArchiveAllButton";
import "../css/callsList.css";
import DividerWithText from "../components/DividerWithText";
import {
  ARCHIVE_ALL_TEXT,
  EMPTY_ARCHIVED_CALLS_MESSAGE,
  EMPTY_CALLS_MESSAGE,
  TAB_ARCHIVED,
  TAB_INBOX,
  UNARCHIVE_ALL_TEXT,
} from "../constants/app.contants";

const CallsList = ({
  selectedTab,
  unarchivedCalls,
  archivedCalls,
  calls,
  toggleArchive,
  archiveAll,
  unarchiveAll,
}) => {
  return (
    <Box sx={{ p: 4 }} className="main">
      <div className="main-body small-scrollbar">
        {selectedTab === TAB_INBOX && (
          <>
            {Object.keys(unarchivedCalls)?.length ? (
              <ArchiveAllButton
                onClick={() => archiveAll(calls)}
                text={ARCHIVE_ALL_TEXT}
              />
            ) : (
              <div className="emptyListMessage">{EMPTY_CALLS_MESSAGE}</div>
            )}
            {Object.keys(unarchivedCalls).map((date) => (
              <Box key={date} sx={{ mt: 3 }}>
                <DividerWithText text={date} />
                {Object.keys(unarchivedCalls[date]).map((caller) => (
                  <CallCard
                    key={caller}
                    count={unarchivedCalls[date][caller].count}
                    call={unarchivedCalls[date][caller].calls[0]}
                    toggleArchive={toggleArchive}
                  />
                ))}
              </Box>
            ))}
          </>
        )}

        {selectedTab === TAB_ARCHIVED && (
          <>
            {Object.keys(archivedCalls)?.length ? (
              <ArchiveAllButton
                onClick={() => unarchiveAll(calls)}
                text={UNARCHIVE_ALL_TEXT}
              />
            ) : (
              <div className="emptyListMessage">
                {EMPTY_ARCHIVED_CALLS_MESSAGE}
              </div>
            )}
            {Object.keys(archivedCalls).map((date) => (
              <Box key={date} sx={{ mt: 3 }}>
                <DividerWithText text={date} />
                {Object.keys(archivedCalls[date]).map((caller) => (
                  <CallCard
                    key={caller}
                    count={archivedCalls[date][caller].count}
                    call={archivedCalls[date][caller].calls[0]}
                    toggleArchive={toggleArchive}
                  />
                ))}
              </Box>
            ))}
          </>
        )}
      </div>
    </Box>
  );
};

export default CallsList;
