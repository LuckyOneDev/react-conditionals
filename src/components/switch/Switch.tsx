import { SwitchContext } from "@/components/switch/SwitchContext";
import type { Booleanish } from "@/types/Booleanish";
import { resolveBooleanish } from "@/utils/resolveBooleanish";
import { useCallback, useMemo, useState, type ReactNode } from "react";

export interface SwitchProps {
  children?: ReactNode;
}

/**
 * Switch component for conditional rendering of children based on matching cases.
 *
 * Provides context for nested Match components and ensures only the first
 * matching Match's children are rendered, similar to a switch/case or
 * if/else-if/else control flow structure.
 *
 * @param {ReactNode} [children] - A set of Match components representing different conditions.
 *
 * @example
 * <Switch>
 *   <Match when={user.isAdmin}>
 *     <div>Welcome, admin!</div>
 *   </Match>
 *   <Match when={user.isUser}>
 *     <div>Welcome, user!</div>
 *   </Match>
 *   <Match>
 *     <div>Welcome, guest!</div>
 *   </Match>
 * </Switch>
 */

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
