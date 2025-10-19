import { useMemo } from "react";
import type { ReactNode } from "react";

export interface ForProps<T> {
  children: (item: T) => ReactNode;
  items: Iterable<T>;
}

/**
 * Render a list of items by providing a render function for each item.
 *
 * @param {(item: T) => ReactNode} children - Render function for each item.
 * @param {Iterable<T>} items - The collection of items to iterate over.
 *
 * @example
 * // Rendering an array of strings:
 * const users = ["Alice", "Bob", "Charlie"];
 *
 * <For items={users}>
 *   {(user) => <div key={user}>{user}</div>}
 * </For>
 *
 * @example
 * // Rendering with an array of objects:
 * const todos = [
 *   { id: 1, text: "Eat" },
 *   { id: 2, text: "Sleep" }
 * ];
 *
 * <For items={todos}>
 *   {(todo) => <li key={todo.id}>{todo.text}</li>}
 * </For>
 */
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
