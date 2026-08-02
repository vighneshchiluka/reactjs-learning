# 🚀 React Hooks Overview

## 1) useState
- Used to manage state inside a component.
- Updating state causes the component to re-render.

Example:
const [count, setCount] = useState(0);

---

## 2) useEffect
- Used to handle side effects.
- Common use cases:
  - API calls
  - DOM manipulation
  - Event listeners
  - Timers (setTimeout, setInterval)

Example:
useEffect(() => {
  console.log("Component Mounted");
}, []);

---

## 3) useContext
- Used to consume global state.
- Helps avoid prop drilling.
- Makes data available across multiple components.

---

## 4) useReducer
- Used for complex state management.
- A good alternative to multiple useState hooks.
- Works similarly to a simplified Redux.

---

## 5) useRef
- Used to store mutable values.
- Updating a ref does NOT trigger a re-render.
- Commonly used for:
  - Accessing DOM elements
  - Storing previous values
  - Persisting values between renders

---

## 6) useMemo
- Used to memoize expensive calculations.
- Prevents unnecessary recalculations.

---

## 7) useCallback
- Used to memoize functions.
- Prevents unnecessary function recreation.
- Often used with React.memo() for performance optimization.


# 🚀 React useState Learning

## 1) Imported the `useState` Hook.

```jsx
import { useState } from "react";
```

`useState` is a React Hook used to create and manage state inside a functional component.

---

## 2) Created a state variable.

```jsx
const [num, setNum] = useState(10);
```

- `num` → Current state value (Read Only)
- `setNum` → Function used to update the state (Write Only)
- `10` → Initial state value

---

## 3) Updated the state using the setter function.

```jsx
function changeNum() {
  setNum(30);
}
```

Calling `setNum()` updates the state and automatically re-renders the component.

---

## 4) Displayed the state value in JSX.

```jsx
<h1>Value of num is {num}</h1>
```

React automatically updates the UI whenever the state changes.

---

## 5) Created another state variable.

```jsx
const [num2, setNum2] = useState(0);
```

Multiple state variables can be created inside the same component using multiple `useState` hooks.

---

## 6) Increased the state value.

```jsx
function increaseNum() {
  setNum2(num2 + 1);
}
```

Updates the current state by increasing its value by **1**.

---

## 7) Decreased the state value.

```jsx
function decreaseNum() {
  setNum2(num2 - 1);
}
```

Updates the current state by decreasing its value by **1**.

---

## 8) Increased the state by a custom value.

```jsx
function jumpNum5() {
  setNum2(num2 + 5);
}
```

The state can be updated by any value, not just incremented or decremented by **1**.

---

## 9) Connected functions to button events.

```jsx
<button onClick={increaseNum}>Increase</button>

<button onClick={decreaseNum}>Decrease</button>

<button onClick={jumpNum5}>JumpNum5</button>
```

React executes the corresponding function whenever the button is clicked.

---

## 10) Understood how `useState` works.

```text
const [state, setState] = useState(initialValue);
```

- `state` → Stores the current value.
- `setState` → Updates the value.
- Updating the state automatically re-renders the component.

---

# 📚 Concepts Covered

- React Hooks
- useState
- State
- Initial State
- State Variable
- Setter Function
- Component Re-rendering
- Event Handling
- Updating State
- JSX Rendering
- Multiple useState Hooks

---

# ✅ What I Learned

- Importing and using the `useState` Hook.
- Creating state variables inside functional components.
- Understanding the difference between the state variable and the setter function.
- Updating state using the setter function.
- Rendering dynamic state values in JSX.
- Managing multiple state variables within the same component.
- Increasing and decreasing state values.
- Updating state by custom values.
- Connecting button events to state update functions.
- Understanding that updating state automatically re-renders the component.

---

# 📝 Notes

- `useState` is used to manage local state inside a React component.
- Never update the state variable directly.

❌ Incorrect

```jsx
num = 20;
```

✅ Correct

```jsx
setNum(20);
```

- React re-renders the component whenever the state is updated using the setter function.
- The state variable is **read-only**, while the setter function is used to **write/update** the state.