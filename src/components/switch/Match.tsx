import { useEffect, type ReactNode } from "react";
import type { Booleanish } from "@/types/Booleanish.js";
import { useSwitchContext } from "@/components/switch/SwitchContext.js";

export interface MatchProps {
  when?: Booleanish;
  children: ReactNode;
}

export const Match = ({ when = true, children }: MatchProps) => {
  const { addCondition, removeCondition, shouldRender } = useSwitchContext();

  useEffect(() => {
    addCondition(when);
    return () => removeCondition(when);
  }, [when]);

  if (shouldRender(when)) {
    return children;
  }
  return null;
};
