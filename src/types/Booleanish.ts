type BooleanPrimitive = boolean | null | undefined | string | number;

/**
 * A type that represents a boolean value or a function that returns a boolean value.
 * Functions can include more than one layer of nesting if needed.
 *
 * @example
 * const isUser = () => user.isUser;
 * @example
 * const isGuest = () => !isAdmin && !isUser;
 * @example
 * const isAllowed = () => {
 *   if (isAdmin) {
 *     return isAdminAllowed;
 *   }
 *   if (isUser) {
 *     return isUserAllowed;
 *   }
 *   if (isGuest) {
 *     return isGuestAllowed;
 *   }
 * };
 */
export type Booleanish =
  | BooleanPrimitive
  | "true"
  | "false"
  | (() => Booleanish);
