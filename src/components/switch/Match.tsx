import { useEffect, type ReactNode } from "react";
import type { Booleanish } from "@/types/Booleanish";
import { useSwitchContext } from "@/components/switch/SwitchContext";

export interface MatchProps {
  when?: Booleanish;
  children?: ReactNode;
}

/**
 * Props for Match component.
 *
 * @property {Booleanish} [when=true] - The condition to match for rendering.
 * @property {ReactNode} children - Content to render if this match is active.
 */

/**
 * Registers the given `when` condition with the Switch context.
 * Renders its children only if this is the first matched condition.
 * If condition is not provided it will always be true.
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
