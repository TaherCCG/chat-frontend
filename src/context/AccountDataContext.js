import { createContext, useContext, useState } from "react";

export const AccountDataContext = createContext();

export const useAccountData = () => useContext(AccountDataContext);

export const AccountDataProvider = ({ children }) => {
  const [accountData, setAccountData] = useState({});

  const value = { accountData, setAccountData };

  return (
    <AccountDataContext.Provider value={value}>
      {children}
    </AccountDataContext.Provider>
  );
};
