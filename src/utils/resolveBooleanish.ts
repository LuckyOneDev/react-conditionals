import type { Booleanish } from "@/types/Booleanish.js";

/**
 * Resolves a Booleanish value to a primitive boolean.
 *
 * @param {Booleanish} value - The value to resolve.
 * @returns {boolean} The resolved primitive boolean value.
 *
 * @example
 * resolveBooleanish(true); // true
 */
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
