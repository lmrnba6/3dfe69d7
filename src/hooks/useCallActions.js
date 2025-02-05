import { useContext } from "react";
import {
  archiveAllCalls,
  fetchCalls,
  unarchiveAllCalls,
  updateCallArchiveStatus,
} from "../services/callService";
import { AppContext } from "../context/AppContext";

const useCallActions = () => {
  const { setLoading } = useContext(AppContext);

  const getCalls = async () => {
    setLoading(true);
    try {
      return await fetchCalls();
    } catch (error) {
      console.error("Error fetching calls:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleArchive = async (callId, isArchived) => {
    setLoading(true);
    try {
      await updateCallArchiveStatus(callId, isArchived);
    } catch (error) {
      console.error("Error toggling archive status:", error);
    } finally {
      setLoading(false);
    }
  };

  const archiveAll = async (calls) => {
    setLoading(true);
    try {
      await archiveAllCalls(calls);
    } catch (error) {
      console.error("Error archiving all calls:", error);
    } finally {
      setLoading(false);
    }
  };

  const unarchiveAll = async (calls) => {
    setLoading(true);
    try {
      await unarchiveAllCalls(calls);
    } catch (error) {
      console.error("Error unarchiving all calls:", error);
    } finally {
      setLoading(false);
    }
  };

  return { getCalls, toggleArchive, archiveAll, unarchiveAll };
};

export default useCallActions;
