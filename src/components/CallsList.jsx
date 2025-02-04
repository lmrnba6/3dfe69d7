import React from "react";
import axios from "axios";
import { Box } from "@mui/material";
import CallCard from "../components/CallCard.jsx";
import ArchiveAllButton from "../components/ArchiveAllButton.jsx";
import "../css/callsList.css";
import DividerWithText from "../components/DividerWithText.jsx";
import { BASE_URL } from "../constants/app.contants.js";

const CallsList = ({
  selectedTab,
  unarchivedCalls,
  setLoading,
  refresh,
  archivedCalls,
  calls,
}) => {
  const toggleArchive = async (callId, isArchived) => {
    setLoading(true);
    try {
      await axios.patch(`${BASE_URL}/activities/${callId}`, {
        is_archived: isArchived,
      });
      refresh();
    } catch (error) {
      console.error("Error updating call archive status:", error);
    } finally {
      setLoading(false);
    }
  };

  const archiveAll = async () => {
    debugger;
    setLoading(true);
    try {
      for (const call of calls) {
        await axios.patch(`${BASE_URL}/activities/${call.id}`, {
          is_archived: true,
        });
      }
      refresh();
    } catch (error) {
      console.error("Error archiving all calls:", error);
    } finally {
      setLoading(false);
    }
  };

  const unarchiveAll = async () => {
    setLoading(true);
    try {
      for (const call of calls) {
        await axios.patch(`${BASE_URL}/activities/${call.id}`, {
          is_archived: false,
        });
      }
      refresh();
    } catch (error) {
      console.error("Error unarchiving all calls:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 4 }} className="main">
      <div className="main-body small-scrollbar">
        {selectedTab === "inbox" && (
          <>
            {Object.keys(unarchivedCalls)?.length ? (
              <ArchiveAllButton onClick={archiveAll} text="Archive All Calls" />
            ) : (
              <div className="emptyListMessage">There are no calls</div>
            )}
            {Object.keys(unarchivedCalls).map((date) => (
              <Box key={date} sx={{ mt: 3 }}>
                <DividerWithText text={date} />
                {Object.keys(unarchivedCalls[date]).map((caller) => (
                  <CallCard
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
                onClick={unarchiveAll}
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
