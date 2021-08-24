import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <AppContext.Provider value={{ formVisible, setFormVisible }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
