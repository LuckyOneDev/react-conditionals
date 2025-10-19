import type { Booleanish } from "@/types/Booleanish";
import { createContext, useContext } from "react";

export interface SwitchContextType {
  conditions: Set<Booleanish>;
  addCondition: (condition: Booleanish) => void;
  removeCondition: (condition: Booleanish) => void;
  shouldRender: (condition: Booleanish) => boolean;
}

/**
 * Context for Switch component.
 *
 * @param {Set<Booleanish>} conditions - The set of conditions to match.
 * @param {Function} addCondition - Function to add a condition to the set.
 * @param {Function} removeCondition - Function to remove a condition from the set.
 * @param {Function} shouldRender - Function to check if a condition should be rendered.
 */
export const SwitchContext = createContext<SwitchContextType>({
  conditions: new Set(),
  addCondition: () => {},
  removeCondition: () => {},
  shouldRender: () => false,
});

/**
 * Hook to use the SwitchContext.
 *
 * @returns {SwitchContextType} The context value.
 */
export const useSwitchContext = () => {
  return useContext(SwitchContext);
};
