# React Conditionals

A lightweight collection of React components for expressive, declarative conditional and list rendering

## Features

- ✅ `For`: Declarative iteration (like `Array.map`, but as a component)
- ✅ `Show`: Conditional rendering with optional fallback
- ✅ `Switch`/`Match`: Multi-branch conditionals (like switch/case statements)
- ✨ Clean, readable JSX for conditions and loops
- 🛡️ Fully typed with TypeScript

## Installation

```sh
pnpm add @luckyonedev/react-conditionals
# or
npm install @luckyonedev/react-conditionals
# or
yarn add @luckyonedev/react-conditionals
```

## Usage

### For Component

Render a list of items using a render function (children-as-function pattern):

```tsx
import { For } from "react-conditionals";

const users = ["Alice", "Bob", "Charlie"];

export function UserList() {
  return <For items={users}>{(user) => <div key={user}>{user}</div>}</For>;
}
```

With an array of objects:

```tsx
const todos = [
  { id: 1, text: "Eat" },
  { id: 2, text: "Sleep" },
];

<For items={todos}>{(todo) => <li key={todo.id}>{todo.text}</li>}</For>;
```

### Show Component

Conditionally render content based on a boolean condition, with optional fallback:

```tsx
import { Show } from "react-conditionals";

export function UserGreeting({ isLoggedIn, username }) {
  return (
    <Show when={isLoggedIn} fallback={<span>Please log in</span>}>
      <span>Welcome, {username}!</span>
    </Show>
  );
}
```

The `when` prop accepts boolean values, functions that return booleans, or "booleanish" values:

```tsx
<Show when={user.isAdmin}>
  <AdminPanel />
</Show>

<Show when={() => checkPermission()}>
  <ProtectedContent />
</Show>
```

### Switch/Match Components

Render the first matching condition (like switch/case or if/else-if/else):

```tsx
import { Switch, Match } from "react-conditionals";

export function UserRole({ user }) {
  return (
    <Switch>
      <Match when={user.isAdmin}>
        <div>Welcome, admin!</div>
      </Match>
      <Match when={user.isModerator}>
        <div>Welcome, moderator!</div>
      </Match>
      <Match>
        <div>Welcome, guest!</div>
      </Match>
    </Switch>
  );
}
```

Only the first `Match` with a truthy `when` prop renders. The last `Match` without a `when` prop acts as a default case.

## API Reference

### `<For items={items}>{item => ReactNode}</For>`

- `items`: `Iterable<T>` — Any array or iterable collection of data.
- `children`: `(item: T) => ReactNode` — Receives each item and returns a React node.

### `<Show when={condition} fallback={ReactNode}>{ReactNode}</Show>`

- `when`: `Booleanish` — Condition to evaluate (boolean, function, or booleanish value).
- `children`: `ReactNode` — Content to render when condition is truthy.
- `fallback`: `ReactNode` (optional) — Content to render when condition is falsy.

### `<Switch><Match when={condition}>{ReactNode}</Match>...</Switch>`

**Switch:**

- `children`: `ReactNode` — Set of `Match` components representing different conditions.

**Match:**

- `when`: `Booleanish` (optional, defaults to `true`) — Condition to match.
- `children`: `ReactNode` — Content to render if this is the first matching condition.

## Why?

JSX is powerful, but handling conditional logic and iteration often leads to verbose, less declarative code. `react-conditionals` provides readable alternatives, making your components more expressive and easier to maintain.

## Development

- Lint: `pnpm lint`
- Format: `pnpm format`
- Typecheck & build: `pnpm build`

Pre-commit hooks auto-format and fix issues before each commit.

## License

MIT
