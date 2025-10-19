import type { Booleanish } from "@/types/Booleanish.js";

export const resolveBooleanish = (value: Booleanish): boolean => {
  if (typeof value === "function") {
    return resolveBooleanish(value());
  }

  if (typeof value === "string") {
    return value === "true";
  }

  if (typeof value === "number") {
    return value !== 0;
  }

  return !!value;
};
