import { useState, createContext } from "react";

export const StateContext = createContext();
export const StateProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <StateContext.Provider value={{ count, setCount }}>
      {children}
    </StateContext.Provider>
  );
};
