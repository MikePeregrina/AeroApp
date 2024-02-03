import React, { createContext, useContext, useReducer } from "react";

// Definir el estado inicial
const initialState = {
  user: null,
};

// Definir las acciones
const ACTIONS = {
  SET_USER: "SET_USER",
  RESET_USER: "RESET_USER",
};

// Reducer para manejar las acciones
const userReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return { ...state, user: action.payload };
    case ACTIONS.RESET_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const contextValue = {
    state,
    dispatch,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUserContext debe ser utilizado dentro de un UserProvider"
    );
  }

  return context;
};
