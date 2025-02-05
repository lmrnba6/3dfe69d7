import axios from "axios";
import { BASE_URL } from "../constants/app.contants.js";

/**
 * Fetches all calls from the API.
 *
 * @throws Error If the API request fails.
 * @returns {Promise<Array>} The list of calls.
 */
export const fetchCalls = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/activities`);
    return response.data;
  } catch (error) {
    console.error("Error fetching calls:", error);
    throw error;
  }
};

/**
 * Updates the archive status of a specific call.
 *
 * @param callId - The ID of the call to update.
 * @param  isArchived - The new archive status (true for archived, false for unarchived).
 * @throws Error If the API request fails.
 */
export const updateCallArchiveStatus = async (callId, isArchived) => {
  try {
    await axios.patch(`${BASE_URL}/activities/${callId}`, {
      is_archived: isArchived,
    });
  } catch (error) {
    console.error("Error updating call archive status:", error);
    throw error;
  }
};

/**
 * Archives all calls in the provided array.
 *
 * @param calls - An array of call objects containing call IDs.
 * @throws Error If the API requests fail.
 */
export const archiveAllCalls = async (calls) => {
  try {
    await Promise.all(
      calls.map((call) =>
        axios.patch(`${BASE_URL}/activities/${call.id}`, {
          is_archived: true,
        })
      )
    );
  } catch (error) {
    console.error("Error archiving all calls:", error);
    throw error;
  }
};

/**
 * Unarchives all calls in the provided array.
 *
 * @param  calls - An array of call objects containing call IDs.
 * @throws Error If the API requests fail.
 */
export const unarchiveAllCalls = async (calls) => {
  try {
    await Promise.all(
      calls.map((call) =>
        axios.patch(`${BASE_URL}/activities/${call.id}`, {
          is_archived: false,
        })
      )
    );
  } catch (error) {
    console.error("Error unarchiving all calls:", error);
    throw error;
  }
};
