import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [missedCalls, setMissedCalls] = useState(null);
  const [loading, setLoading] = useState(null);

  return (
    <AppContext.Provider
      value={{ missedCalls, setMissedCalls, loading, setLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
