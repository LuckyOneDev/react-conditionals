import { useMemo } from "react";
import type { ReactNode } from "react";

export interface ForProps<T> {
  children: (item: T) => ReactNode;
  items: Iterable<T>;
}

export const For = <T,>({ children, items }: ForProps<T>) => {
  const rendered = useMemo(() => {
    const result: ReactNode[] = [];
    for (const item of items) {
      result.push(children(item));
    }
    return result;
  }, [children, items]);

  return rendered;
};
