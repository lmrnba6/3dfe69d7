import React, { useContext, useEffect, useState } from "react";

import CallsList from "../components/CallsList";
import Nav from "../components/Nav";
import {
  CALL_TYPE_MISSED,
  INBOUND_CALL,
  TAB_INBOX,
} from "../constants/app.contants.js";
import { AppContext } from "../context/AppContext";
import useCallActions from "../hooks/useCallActions";
import { groupCallsByDateAndCaller } from "../utils/groupCallsUtil";

const Calls = () => {
  const [unarchivedCalls, setUnarchivedCalls] = useState([]);
  const [calls, setCalls] = useState([]);
  const [archivedCalls, setArchivedCalls] = useState([]);
  const [selectedTab, setSelectedTab] = useState(TAB_INBOX);
  const { setMissedCalls, setLoading } = useContext(AppContext);
  const { getCalls } = useCallActions();

  useEffect(() => {
    fetchCalls();
  }, []);

  const fetchCalls = async () => {
    setLoading(true);
    try {
      const allCalls = await getCalls();
      const archived = groupCallsByDateAndCaller(
        allCalls.filter((call) => call.is_archived)
      );
      const unarchived = groupCallsByDateAndCaller(
        allCalls.filter((call) => !call.is_archived)
      );

      const missed = allCalls.filter(
        (call) =>
          !call.is_archived &&
          call.call_type === CALL_TYPE_MISSED &&
          call.direction === INBOUND_CALL
      );

      setCalls(allCalls);
      setUnarchivedCalls(unarchived);
      setArchivedCalls(archived);
      setMissedCalls(missed?.length || 0);
    } catch (error) {
      console.error("Error fetching calls:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <CallsList
        selectedTab={selectedTab}
        setLoading={setLoading}
        refresh={fetchCalls}
        calls={calls}
        unarchivedCalls={unarchivedCalls}
        archivedCalls={archivedCalls}
      />
    </>
  );
};

export default Calls;
