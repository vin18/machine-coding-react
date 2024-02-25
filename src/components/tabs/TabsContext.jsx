import { createContext, useContext } from "react";

export const TabsContext = createContext();

export const useTabs = () => {
  const value = useContext(TabsContext);
  if (!value) {
    throw new Error(`useTabs should be used within TabsContext`);
  }
  return value;
};
