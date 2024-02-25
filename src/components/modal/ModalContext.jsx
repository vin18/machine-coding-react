import { createContext, useContext } from "react";

export const ModalContext = createContext();

export const useModal = () => {
  const value = useContext(ModalContext);
  if (!value) {
    throw new Error(`useModal should be used within ModalContext`);
  }
  return value;
};
