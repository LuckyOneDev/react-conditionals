import { SwitchContext } from "@/components/switch/SwitchContext.js";
import type { Booleanish } from "@/types/Booleanish.js";
import { resolveBooleanish } from "@/utils/resolveBooleanish.js";
import { useCallback, useMemo, useState, type ReactNode } from "react";

export interface SwitchProps {
  children?: ReactNode;
}

export const Switch = ({ children }: SwitchProps) => {
  const [conditions, setConditions] = useState(() => new Set<Booleanish>());

  const addCondition = useCallback(
    (condition: Booleanish) => {
      setConditions((prev) => new Set([...prev, condition]));
    },
    [conditions],
  );

  const removeCondition = useCallback(
    (condition: Booleanish) => {
      setConditions(
        (prev) => new Set([...prev].filter((c) => c !== condition)),
      );
    },
    [conditions],
  );

  const firstMatch = useMemo(() => {
    return [...conditions].find(resolveBooleanish);
  }, [conditions]);

  const shouldRender = useCallback(
    (condition: Booleanish) => {
      return firstMatch === condition;
    },
    [conditions],
  );

  return (
    <SwitchContext
      value={{ conditions, addCondition, removeCondition, shouldRender }}
    >
      {children}
    </SwitchContext>
  );
};
