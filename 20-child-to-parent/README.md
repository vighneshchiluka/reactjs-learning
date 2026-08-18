# 🚀 React Props – Parent to Child & Child to Parent

## 1) What are Props?

Props are used to pass data and functions from one React component to another.

This project demonstrates:

* `useState`
* Parent → Child communication
* Child → Parent communication
* Callback functions
* Event handling with `onClick`
* State updates and re-rendering

---

## 2) Project Structure

```text
src/
│
├── components/
│   └── Navbar.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 3) Creating State in the Parent

The `App` component creates the `theme` state using `useState`.

```jsx
import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("Light");

  return (
    <div className="parent">
      <h1>Theme is {theme}</h1>

      <Navbar
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
};

export default App;
```

Here:

```text
theme     → stores the current theme
setTheme  → updates the theme
Light     → initial value
```

The state belongs to the `App` component.

---

## 4) Parent → Child Communication

The parent passes data and a function to the child using props.

```jsx
<Navbar
  theme={theme}
  setTheme={setTheme}
/>
```

The child receives these values through `props`.

```text
App.jsx
   │
   ├── theme
   │
   └── setTheme
         ↓
     Navbar.jsx
```

So, the direction is:

```text
Parent
   ↓
Props
   ↓
Child
```

---

## 5) Child → Parent Communication

React normally follows Parent → Child data flow.

When a child needs to update the parent's state, the parent can pass its state setter function to the child.

In this project, `setTheme` is passed to `Navbar.jsx`.

### Navbar.jsx

```jsx
import React from "react";

const Navbar = (props) => {

  function changeTheme() {
    console.log("change theme", props.theme);
    props.setTheme("Dark");
  }

  return (
    <div>
      <button onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default Navbar;
```

The child does not directly change the parent's state.

Instead:

```text
Parent gives setTheme()
        ↓
Child receives it through props
        ↓
Child calls props.setTheme("Dark")
        ↓
Parent state changes
```

This is called **Child → Parent communication using a callback function**.

---

## 6) Complete Data Flow

```text
App.jsx
   │
   │ useState("Light")
   ↓
theme = "Light"
   │
   │ passes theme + setTheme
   ↓
Navbar.jsx
   │
   │ Button Click
   ↓
changeTheme()
   │
   ↓
props.setTheme("Dark")
   │
   ↓
Parent state updates
   │
   ↓
theme = "Dark"
   │
   ↓
React re-renders
   │
   ↓
Theme is Dark
```

---

## 7) Event Handling

The child uses `onClick` to call the `changeTheme` function.

```jsx
<button onClick={changeTheme}>
  Change Theme
</button>
```

When the button is clicked:

```text
Click
  ↓
changeTheme()
  ↓
props.setTheme("Dark")
  ↓
Parent state updates
```

---

## 8) State Update and Re-render

Initially:

```text
theme = "Light"
```

The UI displays:

```text
Theme is Light
```

After clicking **Change Theme**:

```jsx
props.setTheme("Dark");
```

The state becomes:

```text
theme = "Dark"
```

React re-renders the component and the UI displays:

```text
Theme is Dark
```

---

## 9) One-Way Data Flow

React follows a one-way data flow.

```text
        Parent
       App.jsx
          │
          │ Props
          ↓
       Child
      Navbar.jsx
          │
          │ Callback
          ↓
   Parent State Updates
```

The parent owns the state.

The child can trigger a state change by calling the function received through props.

---

## 10) main.jsx

`main.jsx` is the entry point of the React application.

```jsx
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <App />
);
```

The `App` component is rendered inside the root element.

---

## 11) Styling

The project uses CSS for the parent container and button.

```css
.parent {
  padding: 20px;
  border: 1px solid white;
  gap: 20px;
  height: 100vh;
}

button {
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
}
```

---

## 12) Important React Concepts

### useState

Creates and manages component state.

```jsx
const [theme, setTheme] = useState("Light");
```

### Props

Pass data or functions from Parent → Child.

```jsx
<Navbar theme={theme} setTheme={setTheme} />
```

### Callback Function

Allows the child to trigger an update in the parent's state.

```jsx
props.setTheme("Dark");
```

### onClick

Runs a function when the user clicks a button.

```jsx
<button onClick={changeTheme}>
  Change Theme
</button>
```

---

## 13) Important Notes

* State is created and owned by the component where `useState` is used.
* Props are used for Parent → Child communication.
* A parent can pass a state setter function to a child through props.
* The child can call that function to update the parent's state.
* This pattern is commonly called Child → Parent communication using a callback.
* React follows one-way data flow.
* Updating state causes React to re-render the affected UI.
* In this project, `props.setTheme("Dark")` updates the `theme` state in `App.jsx`.

---

## 14) What I Learned

* How to use `useState`.
* How to pass data from Parent → Child using props.
* How to pass a function from Parent → Child.
* How a child can trigger a parent state update.
* How callback functions are used for Child → Parent communication.
* How `onClick` handles user interaction.
* How state updates cause the UI to re-render.
* How React follows one-way data flow.

---

# 🎯 Final Summary

This project demonstrates how **Parent → Child** and **Child → Parent** communication work together in React.

```text
Parent owns the state
        ↓
Parent passes state/function to Child
        ↓
Child receives them through props
        ↓
User clicks the button
        ↓
Child calls the callback function
        ↓
Parent state updates
        ↓
React re-renders the UI
```

### Key Concept

```text
Parent → Child
       Props
         ↓
      Child
         ↓
  Callback Function
         ↓
Parent State Update
```

In this project:

```text
theme = "Light"
        ↓
setTheme passed to Navbar
        ↓
Button clicked
        ↓
props.setTheme("Dark")
        ↓
theme = "Dark"
        ↓
UI updates
```
