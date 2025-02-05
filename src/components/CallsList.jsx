import React from "react";
import { Box } from "@mui/material";
import CallCard from "../components/CallCard";
import ArchiveAllButton from "../components/ArchiveAllButton";
import "../css/callsList.css";
import DividerWithText from "../components/DividerWithText";
import useCallActions from "../hooks/useCallActions";

const CallsList = ({
  selectedTab,
  unarchivedCalls,
  archivedCalls,
  calls,
  refresh,
}) => {
  const { toggleArchive, archiveAll, unarchiveAll } = useCallActions(refresh);

  return (
    <Box sx={{ p: 4 }} className="main">
      <div className="main-body small-scrollbar">
        {selectedTab === "inbox" && (
          <>
            {Object.keys(unarchivedCalls)?.length ? (
              <ArchiveAllButton
                onClick={() => archiveAll(calls)}
                text="Archive All Calls"
              />
            ) : (
              <div className="emptyListMessage">There are no calls</div>
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

        {selectedTab === "archived" && (
          <>
            {Object.keys(archivedCalls)?.length ? (
              <ArchiveAllButton
                onClick={() => unarchiveAll(calls)}
                text="Unarchive All Calls"
              />
            ) : (
              <div className="emptyListMessage">
                There are no archived calls
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
