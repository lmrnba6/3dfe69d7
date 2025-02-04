import React, { useEffect, useState } from "react";

import Header from "../components/Header.jsx";
import CallsList from "../components/CallsList.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";
import Loader from "../components/Loader.jsx";
import { BASE_URL } from "../constants/app.contants.js";

const Calls = () => {
  const [unarchivedCalls, setUnarchivedCalls] = useState([]);
  const [calls, setCalls] = useState([]);
  const [archivedCalls, setArchivedCalls] = useState([]);
  const [selectedTab, setSelectedTab] = useState("inbox");
  const [missedCalls, setMissedCalls] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCalls();
  }, []);

  const fetchCalls = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/activities`);
      const allCalls = response.data;
      const archived = groupCallsByDateAndCaller(
        allCalls.filter((call) => call.is_archived)
      );
      const unarchived = groupCallsByDateAndCaller(
        allCalls.filter((call) => !call.is_archived)
      );

      const missed = allCalls.filter(
        (call) =>
          !call.is_archived &&
          call.call_type === "missed" &&
          call.direction === "inbound"
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

  const groupCallsByDateAndCaller = (callsList) => {
    return callsList
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by date descending
      .reduce((acc, call) => {
        const formattedDate = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(call.created_at));

        if (!acc[formattedDate]) {
          acc[formattedDate] = {};
        }

        const callerKey = `${call.from}-${call.call_type}`;

        if (!acc[formattedDate][callerKey]) {
          acc[formattedDate][callerKey] = { calls: [], count: 0 };
        }

        acc[formattedDate][callerKey].calls.push(call);
        acc[formattedDate][callerKey].count += 1;

        return acc;
      }, {});
  };

  return (
    <div className="container">
      <Loader loading={loading} />
      <Header />
      <Nav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <CallsList
        selectedTab={selectedTab}
        setLoading={setLoading}
        refresh={fetchCalls}
        calls={calls}
        unarchivedCalls={unarchivedCalls}
        archivedCalls={archivedCalls}
      />
      <Footer missedCalls={missedCalls} />
    </div>
  );
};

export default Calls;
