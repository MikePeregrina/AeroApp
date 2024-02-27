import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState(false);

  console.log("variable global actualizado", globalVariable);
  const updateGlobalVariable = (newValue) => {
    setGlobalVariable(newValue);
  };

  return (
    <GlobalContext.Provider
      value={[globalVariable, setGlobalVariable, updateGlobalVariable]}
    >
      {children}
    </GlobalContext.Provider>
  );
};
