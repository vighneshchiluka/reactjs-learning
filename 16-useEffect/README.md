# 🚀 React useEffect & Dependencies Learning

## 1) Imported `useEffect` and `useState`.

```jsx
import { useEffect, useState } from "react";
```

- `useState` → Used to create and manage state.
- `useEffect` → Used to run side effects after the component renders.

---

## 2) Created two state variables to understand dependencies.

```jsx
const [num, setNum] = useState(0);
const [num2, setNum2] = useState(100);
```

The `useEffect` is dependent only on `num`.

```jsx
useEffect(
  function () {
    console.log("useEffect is running in parallel");
  },
  [num],
);
```

---

## 3) Understood the dependency array.

```jsx
[num]
```

The dependency array tells React when the effect should run again.

In this example:

```jsx
useEffect(() => {
  console.log("useEffect is running");
}, [num]);
```

The effect runs when `num` changes.

---

## 4) Understood that state changes cause re-rendering.

```jsx
setNum(num + 1);
```

When `num` changes:

```text
num changes
    ↓
React re-renders
    ↓
[num] dependency changed
    ↓
useEffect runs
```

---

## 5) Understood that changing another state does not trigger the effect.

```jsx
setNum2(num2 + 1);
```

The component re-renders because `num2` changed.

But the effect does not run again because:

```jsx
[num]
```

only depends on `num`.

```text
num2 changes
    ↓
React re-renders
    ↓
num did not change
    ↓
useEffect does not run
```

---

## 6) Learned what happens with an empty dependency array.

```jsx
useEffect(() => {
  console.log("useEffect is running");
}, []);
```

An empty dependency array means the effect runs after the initial render and does not run again because of state changes.

---

## 7) Created separate effects for separate states.

```jsx
const [a, setA] = useState(0);
const [b, setB] = useState(0);
```

Created separate functions:

```jsx
function aChanging() {
  console.log("A ki value change ho gayi");
}

function bChanging() {
  console.log("B ki value change ho gayi");
}
```

---

## 8) Created a `useEffect` that depends on `a`.

```jsx
useEffect(function () {
  aChanging();
}, [a]);
```

Whenever `a` changes, this effect runs.

```jsx
setA(a + 1);
```

Flow:

```text
Click A
   ↓
setA()
   ↓
a changes
   ↓
React re-renders
   ↓
[a] changed
   ↓
aChanging() runs
```

---

## 9) Created another `useEffect` that depends on `b`.

```jsx
useEffect(function () {
  bChanging();
}, [b]);
```

Whenever `b` changes, this effect runs.

```jsx
setB(b - 1);
```

Flow:

```text
Click B
   ↓
setB()
   ↓
b changes
   ↓
React re-renders
   ↓
[b] changed
   ↓
bChanging() runs
```

---

## 10) Understood that multiple `useEffect` hooks can exist in one component.

```jsx
useEffect(() => {
  aChanging();
}, [a]);

useEffect(() => {
  bChanging();
}, [b]);
```

Each effect can have its own dependency.

So:

```text
[a] → watches A
[b] → watches B
```

Changing `a` triggers the first effect, while changing `b` triggers the second effect.

---

# 📚 Concepts Covered

- React `useEffect`
- React `useState`
- Side Effects
- Dependency Array
- State Changes
- Component Re-render
- Multiple `useEffect` Hooks
- Effect Dependencies
- Empty Dependency Array
- State-specific Effects
- `setA()`
- `setB()`

---

# ✅ What I Learned

- `useEffect` runs after rendering.
- The dependency array controls when an effect runs again.
- `[num]` means the effect depends on `num`.
- When `num` changes, the component re-renders and the effect runs again.
- Changing `num2` causes a re-render but does not run an effect that depends only on `num`.
- `[]` means the effect runs after the initial render and does not re-run because of state changes.
- Multiple `useEffect` hooks can be used in the same component.
- Each `useEffect` can have its own dependency.
- An effect with `[a]` responds to changes in `a`.
- An effect with `[b]` responds to changes in `b`.
- State changes cause React to re-render the component, while the dependency array determines whether a particular effect runs again.

---

# 📝 Important Notes

### Dependency on `num`

```jsx
useEffect(() => {
  console.log("Effect");
}, [num]);
```

```text
Initial render → ✅
num changes    → ✅
num2 changes   → ❌
```

---

### Empty dependency array

```jsx
useEffect(() => {
  console.log("Effect");
}, []);
```

```text
Initial render → ✅
num changes    → ❌
num2 changes   → ❌
```

---

### Separate dependencies

```jsx
useEffect(() => {
  aChanging();
}, [a]);

useEffect(() => {
  bChanging();
}, [b]);
```

```text
a changes → First effect runs
b changes → Second effect runs
```

---

# 🔄 useEffect Dependency Flow

```text
State changes
     ↓
React re-renders
     ↓
React checks useEffect dependencies
     ↓
Dependency changed?
     ↓
   Yes → Effect runs
   No  → Effect does not run
```

---

# 🎯 Learning Summary

```text
useEffect()
    ↓
Runs after render
    ↓
Dependency Array
    ↓
Controls when effect runs again
```

```text
[]       → Initial render
[num]    → Initial render + when num changes
[a]      → Initial render + when a changes
[b]      → Initial render + when b changes
```