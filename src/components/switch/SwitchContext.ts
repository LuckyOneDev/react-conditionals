import type { Booleanish } from "@/types/Booleanish.js";
import { createContext, useContext } from "react";

export interface SwitchContextType {
  conditions: Set<Booleanish>;
  addCondition: (condition: Booleanish) => void;
  removeCondition: (condition: Booleanish) => void;
  shouldRender: (condition: Booleanish) => boolean;
}

export const SwitchContext = createContext<SwitchContextType>({
  conditions: new Set(),
  addCondition: () => {},
  removeCondition: () => {},
  shouldRender: () => false,
});

export const useSwitchContext = () => {
  return useContext(SwitchContext);
};
