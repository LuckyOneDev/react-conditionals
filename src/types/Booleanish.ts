type BooleanPrimitive = boolean | null | undefined | string | number;
export type Booleanish =
  | BooleanPrimitive
  | "true"
  | "false"
  | (() => Booleanish);
