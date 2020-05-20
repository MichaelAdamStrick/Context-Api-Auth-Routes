import React, { createContext, useContext, useReducer } from "react";

const StoreContext = createContext();
const initialState = {
  username: "",
  auth: false,
  count: 0,
  message: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "logOut":
      return {
        ...state,
        auth: (state.auth = false)
      };
    case "authenticated":
      return {
        ...state,
        auth: (state.auth = true),
        username: action.username
      };
    case "increment":
      return {
        ...state,
        count: state.count + 1,
        message: action.message
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
        message: action.message
      };
    case "reset":
      return {
        ...state,
        count: 0,
        message: action.message
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
