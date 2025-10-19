import { type ReactNode } from "react";
import type { Booleanish } from "@/types/Booleanish";
import { resolveBooleanish } from "@/utils/resolveBooleanish";

export interface ShowProps {
  when: Booleanish;
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Conditionally renders children or fallback based on the resolved value of `when`.
 *
 * @param {Booleanish} when - The condition to resolve as truthy or falsy.
 * @param {ReactNode} children - Content to render when `when` is truthy.
 * @param {ReactNode} [fallback] - Content to render when `when` is falsy.
 *
 * @example
 * <Show when={true}>
 *   <div>Visible when true!</div>
 * </Show>
 *
 * @example
 * <Show when={user.loggedIn} fallback={<span>Please log in</span>}>
 *   <span>Welcome!</span>
 * </Show>
 *
 * @example
 * <Show when={() => isUserLoggedIn()} fallback={<span>Please log in</span>}>
 *   <span>Welcome!</span>
 * </Show>
 */
export const Show = ({ when, children, fallback }: ShowProps) => {
  const booleanValue = resolveBooleanish(when);
  if (!booleanValue) {
    return fallback;
  }

  return children;
};
