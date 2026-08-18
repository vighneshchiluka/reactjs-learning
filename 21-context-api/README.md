# 🚀 React Context API – Theme Management

## 1) What is Context API?

The React Context API is used to share data between components without passing props manually through every level of the component tree.

In this project, Context API is used to create and manage a **theme** that can be accessed and changed by different components.

This project demonstrates:

* `createContext`
* Context Provider
* `useContext`
* Sharing state globally
* Updating context state from a child component
* Avoiding prop drilling
* Theme switching between `light` and `dark`

---

## 2) Project Structure

```text id="c2n8kq"
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Nav2.jsx
│   └── Button.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 3) Creating Context

`createContext()` is used to create a Context object.

In this project, `ThemeDataContext` stores the theme state and its setter function.

### ThemeContext.jsx

```jsx id="h7x8zq"
import React, { createContext, useState } from "react";

export const ThemeDataContext = createContext();

const ThemeContext = (props) => {

  const [theme, setTheme] = useState("light");

  return (
    <div>
      <ThemeDataContext.Provider value={[theme, setTheme]}>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  );
};

export default ThemeContext;
```

The context provides:

```text id="y5p7dn"
theme
setTheme
```

through:

```jsx id="1y9h2q"
<ThemeDataContext.Provider value={[theme, setTheme]}>
```

---

## 4) Provider

The `Provider` makes the context data available to all components inside it.

In `main.jsx`, the entire `App` is wrapped with `ThemeContext`.

```jsx id="8c4q1w"
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContext from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeContext>
    <App />
  </ThemeContext>,
);
```

Because `App` is inside `ThemeContext`, its child components can access the theme using `useContext`.

### Provider Flow

```text id="7j4x6s"
ThemeContext
     ↓
   App
     ↓
 Navbar / Button / Nav2
```

---

## 5) Accessing Context with useContext

`useContext()` is used to access the data stored inside the Context Provider.

The `Navbar` component gets both `theme` and `setTheme` directly from the context.

```jsx id="2m6k5q"
import { ThemeDataContext } from "../context/ThemeContext";
import Nav2 from "./Nav2";
import { useContext } from "react";

const Navbar = () => {

  const [theme, setTheme] = useContext(ThemeDataContext);

  return (
    <div className={theme}>
      <h2>Vighnesh</h2>
      <Nav2 />
    </div>
  );
};

export default Navbar;
```

There is no need to receive `theme` through props.

```text id="m8t5j3"
Navbar
   │
   ↓
useContext(ThemeDataContext)
   │
   ├── theme
   └── setTheme
```

---

## 6) Sharing Context with Nested Components

The context can also be accessed by deeper components without passing props through each component.

`Nav2.jsx` directly accesses the same context:

```jsx id="d8x5kc"
import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext.jsx";

const Nav2 = () => {

  const [theme, setTheme] = useContext(ThemeDataContext);

  return (
    <div className="nav2">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      <h4>{theme}</h4>
    </div>
  );
};

export default Nav2;
```

The `theme` value is displayed directly from Context.

---

## 7) Updating Context State

The `Button` component also accesses the context using `useContext`.

```jsx id="m4f0v8"
import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {

  const [theme, setTheme] = useContext(ThemeDataContext);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <button onClick={changeTheme}>
        Change Button
      </button>
    </div>
  );
};

export default Button;
```

The button changes the theme between:

```text id="w0n9kd"
light
  ↕
dark
```

The important part is:

```jsx id="z6w1pp"
setTheme(theme === "light" ? "dark" : "light");
```

The state is stored inside the Context Provider, but the `Button` component can update it directly through `useContext`.

---

## 8) Context API Data Flow

The complete flow of this project is:

```text id="n7g2s1"
main.jsx
    ↓
ThemeContext
    │
    │  theme + setTheme
    ↓
   App
    │
    ├── Navbar
    │     ↓
    │   Nav2
    │
    └── Button
          ↓
      setTheme()
          ↓
     Context State
          ↓
       UI Updates
```

---

## 9) Context API vs Props

With props, data normally has to be passed through components:

```text id="f5y8m3"
App
 ↓
Navbar
 ↓
Nav2
```

If `Nav2` needs the theme, it may require the data to be passed through each level.

With Context API:

```text id="n2c7v4"
ThemeContext
    ↓
App
    ↓
Navbar
    ↓
Nav2
```

`Nav2` can directly access the context without receiving the theme as a prop.

This helps avoid **prop drilling**.

---

## 10) App.jsx

`App.jsx` contains the main components of the application.

```jsx id="z7v2q5"
import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";

const App = () => {

  return (
    <div>
      <Navbar />
      <Button />
    </div>
  );
};

export default App;
```

Both `Navbar` and `Button` can access the same theme context because `App` is wrapped inside the `ThemeContext` provider.

---

## 11) Theme Styling

The project uses two CSS classes for the two theme states.

```css id="c5m1x8"
.light {
  display: flex;
  justify-content: space-between;
  background-color: lightseagreen;
  align-items: center;
  padding: 14px 20px;
}

.dark {
  display: flex;
  justify-content: space-between;
  background-color: darkslategray;
  align-items: center;
  padding: 14px 20px;
}
```

The `Navbar` uses the current theme as its class name:

```jsx id="q3v7mz"
<div className={theme}>
```

So when:

```text id="4h2c8k"
theme = "light"
```

the `light` CSS class is applied.

When:

```text id="0d7x4v"
theme = "dark"
```

the `dark` CSS class is applied.

---

## 12) Important React Concepts

### createContext

Creates a Context object.

```jsx id="y1c6pk"
export const ThemeDataContext = createContext();
```

### Provider

Makes context data available to child components.

```jsx id="w5z3a8"
<ThemeDataContext.Provider value={[theme, setTheme]}>
  {props.children}
</ThemeDataContext.Provider>
```

### useContext

Accesses the context data.

```jsx id="2p9m6r"
const [theme, setTheme] = useContext(ThemeDataContext);
```

### Context State

The theme state is stored inside the Context Provider.

```jsx id="5c8v2q"
const [theme, setTheme] = useState("light");
```

---

## 13) Important Notes

* `createContext()` creates a Context.
* The Provider makes context data available to its children.
* `useContext()` is used to access context data.
* Multiple components can access the same context.
* Context can reduce the need for passing props through multiple component levels.
* The state in this project is stored inside `ThemeContext`.
* `Button` can update the shared theme using `setTheme`.
* `Navbar` and `Nav2` can read the current theme from the same Context.
* The theme switches between `light` and `dark`.

---

## 14) What I Learned

* How to create a Context using `createContext`.
* How to create a Context Provider.
* How to share state using Context API.
* How to access context using `useContext`.
* How multiple components can access the same state.
* How to update shared context state from another component.
* How Context API helps avoid prop drilling.
* How to use context state to implement theme switching.

---

# 🎯 Final Summary

This project demonstrates how **Context API can share state across multiple components without passing props through every level**.

```text id="n5x8v2"
ThemeContext
     │
     │ theme + setTheme
     ↓
  Components
     │
 ┌───┴──────────────┐
 ↓                  ↓
Navbar             Button
 ↓                  ↓
Nav2            setTheme()
                    ↓
              Theme Updates
                    ↓
               UI Re-renders
```

### Key Concept

```text id="v7c3m1"
createContext()
      ↓
   Provider
      ↓
Shared State
      ↓
useContext()
      ↓
Components
      ↓
Read / Update State
```

In this project:

```text id="g8q2x5"
theme = "light"
      ↓
ThemeContext Provider
      ↓
Navbar / Nav2 / Button
      ↓
Button calls setTheme()
      ↓
theme changes
      ↓
light ↔ dark
      ↓
UI updates
```

The main purpose of Context API is to make shared data available to components without manually passing that data through every component level.
