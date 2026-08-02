# 🚀 React Two-Way Data Binding Learning

## 1) Created a state variable using `useState`.

```jsx
const [title, setTitle] = useState("");
```

- `title` → Stores the current input value.
- `setTitle` → Updates the input value.

---

## 2) Bound the input value to the state.

```jsx
<input value={title} />
```

The input always displays the latest value stored in the state.

---

## 3) Updated the state using the `onChange` event.

```jsx
<input
  onChange={(e) => {
    setTitle(e.target.value);
  }}
/>
```

Whenever the user types, the state is updated with the latest input value.

---

## 4) Understood Two-Way Data Binding.

```text
User Types
      │
      ▼
onChange Event
      │
      ▼
setTitle()
      │
      ▼
React State (title)
      │
      ▼
value={title}
      │
      ▼
Input Field Updates
```

The input updates the state, and the state updates the input.

This is called **Two-Way Data Binding**.

---

## 5) Created a form submit handler.

```jsx
const submitHandler = (e) => {
  e.preventDefault();
  console.log("Form is submitted by", title);
};
```

The form submission is handled without refreshing the page.

---

## 6) Accessed the latest state value.

```jsx
console.log(title);
```

Since the input is connected to the state, the latest value is available inside the submit handler.

---

## 7) Cleared the input after form submission.

```jsx
setTitle("");
```

Updating the state to an empty string automatically clears the input field.

---

## 8) Created a controlled component.

```jsx
<input
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
```

A controlled component is an input whose value is completely controlled by React state.

---

# 📚 Concepts Covered

- React Forms
- useState
- Two-Way Data Binding
- Controlled Components
- State Management
- onChange Event
- onSubmit Event
- Event Object
- preventDefault()
- Input Handling
- Form Handling

---

# ✅ What I Learned

- Creating state using `useState`.
- Binding an input field to React state.
- Updating state whenever the user types.
- Understanding Two-Way Data Binding.
- Creating controlled input components.
- Handling form submission using `onSubmit`.
- Preventing the default page refresh.
- Accessing the latest input value from state.
- Clearing the input field after successful form submission.
- Keeping the UI synchronized with React state.

---

# 📝 Notes

### Without State

```jsx
<input type="text" />
```

React does not control the input value.

---

### With State (Controlled Component)

```jsx
const [title, setTitle] = useState("");

<input
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
```

React controls the input value through state.

---

### Two-Way Data Binding Flow

```text
Input Field
     │
     ▼
onChange
     │
     ▼
setTitle()
     │
     ▼
React State
     │
     ▼
value={title}
     │
     ▼
Updated Input Field
```

The data flows in both directions:

- **Input → State** (using `onChange`)
- **State → Input** (using `value`)

This is known as **Two-Way Data Binding**.