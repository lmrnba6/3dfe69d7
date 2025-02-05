export const groupCallsByDateAndCaller = (callsList) => {
  return callsList
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
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
