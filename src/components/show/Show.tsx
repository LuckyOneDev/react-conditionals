import { type ReactNode } from "react";
import type { Booleanish } from "@/types/Booleanish";
import { resolveBooleanish } from "@/utils/resolveBooleanish";

export interface ShowProps {
  when: Booleanish;
  children: ReactNode;
  fallback?: ReactNode;
}

export const Show = ({ when, children, fallback }: ShowProps) => {
  const booleanValue = resolveBooleanish(when);
  if (!booleanValue) {
    return fallback;
  }

  return children;
};
