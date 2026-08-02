# 🚀 React Advanced useState Learning

## 1) Understood how `useState` works asynchronously.

```jsx
const [num, setNum] = useState(10);

const btnClicked = () => {
  setNum(num + 5);
  console.log(num);
};
```

`setNum()` does **not** update the state immediately.

React schedules the state update and re-renders the component afterwards.

---

## 2) Learned the difference between Synchronous and Asynchronous.

### Synchronous

- Executes line by line.
- Waits for the current line to finish before moving to the next.

```jsx
console.log("Start");
console.log("Middle");
console.log("End");
```

Output

```
Start
Middle
End
```

---

### Asynchronous

- Does not execute immediately.
- React schedules the state update and updates the UI after the event finishes.

```jsx
setNum(num + 5);
console.log(num);
```

The console prints the **previous state value**, because the component has not re-rendered yet.

---

## 3) Updated object state using the spread operator.

```jsx
const [num, setNum] = useState({
  user: "Vighnesh",
  age: 25,
});

const btnClicked = () => {
  const newNum = { ...num };
  newNum.user = "Vinesh";
  newNum.age = 24;

  setNum(newNum);
};
```

Instead of modifying the original object, a new object is created and passed to `setNum()`.

---

## 4) Updated array state using the spread operator.

```jsx
const [num, setNum] = useState([10, 20, 30]);

const btnClicked = () => {
  const newNum = [...num];
  newNum.push(40);

  setNum(newNum);
};
```

A new array is created before updating the state.

---

## 5) Updated object state using the functional updater.

```jsx
setNum((prev) => ({
  ...prev,
  age: 30,
}));
```

`prev` represents the latest state value.

This approach is recommended when the next state depends on the previous state.

---

## 6) Understood Functional Updates.

```jsx
setNum((prev) => prev + 1);
```

Instead of using the current state variable, React provides the latest state through `prev`.

This helps avoid stale state values.

---

## 7) Learned React Batch Updates.

```jsx
const btnClicked = () => {
  setNum((prev) => prev + 1);
  setNum((prev) => prev + 1);
  setNum((prev) => prev + 1);
};
```

React batches multiple state updates together.

Because each update uses the latest `prev` value, the final value increases by **3**.

---

## 8) Compared Normal Updates vs Functional Updates.

### ❌ Normal Update

```jsx
setNum(num + 1);
setNum(num + 1);
setNum(num + 1);
```

Result

```
+1
```

All three updates use the same old state value.

---

### ✅ Functional Update

```jsx
setNum((prev) => prev + 1);
setNum((prev) => prev + 1);
setNum((prev) => prev + 1);
```

Result

```
+3
```

Each update receives the latest updated state.

---

## 9) Never mutate state directly.

❌ Incorrect

```jsx
num.age = 30;
setNum(num);
```

---

✅ Correct

```jsx
setNum({
  ...num,
  age: 30,
});
```

Always create a new object or array before updating the state.

---

# 📚 Concepts Covered

- Advanced useState
- Asynchronous State Updates
- Synchronous vs Asynchronous
- React Re-rendering
- Functional Updater
- Previous State (`prev`)
- Batch Updates
- Updating Objects
- Updating Arrays
- Spread Operator
- Immutable State
- State Management

---

# ✅ What I Learned

- Understanding that `setState()` is asynchronous.
- Difference between synchronous and asynchronous execution.
- Why `console.log()` prints the previous state immediately after calling `setState()`.
- Updating object state without mutating the original object.
- Updating array state using the spread operator.
- Using functional updates with `prev`.
- Understanding React batch updates.
- Difference between normal updates and functional updates.
- Why React recommends immutable state updates.
- Creating new objects and arrays before updating state.