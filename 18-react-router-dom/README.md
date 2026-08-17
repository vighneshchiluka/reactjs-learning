# 🚀 React Router DOM

## 1) What is React Router DOM?

`react-router-dom` is a React library used to create navigation and page routing in a React application.

It allows us to display different components based on the URL without completely reloading the browser.

React Router is commonly used to build Single Page Applications (SPA).

---

## 2) Install React Router DOM

Install React Router DOM using npm:

```bash
npm install react-router-dom
```

---

## 3) React Router DOM Imports

In our project, we use different components from `react-router-dom`.

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
```

### Main Components

* `BrowserRouter` → Enables routing in the React application.
* `Routes` → Contains all the routes.
* `Route` → Defines a URL path and the component to display.
* `Link` → Used to navigate between pages without a full page reload.

---

## 4) BrowserRouter in main.jsx

`BrowserRouter` is used in `main.jsx` to provide routing functionality to the entire application.

### main.jsx

```jsx
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

### Why BrowserRouter?

`BrowserRouter` monitors the browser URL and allows React Router to handle navigation.

Because `App` is inside `BrowserRouter`, all components inside `App` can use React Router features.

```text
main.jsx
    ↓
BrowserRouter
    ↓
App.jsx
    ↓
Navbar + Routes
    ↓
Page Components
```

---

## 5) App.jsx

`App.jsx` contains the application's routes.

```jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx";

import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
```

---

## 6) Routes and Route

`Routes` contains all the routes of the application.

`Route` connects a URL path with a React component.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/product" element={<Product />} />
</Routes>
```

### Route Structure

```text
URL Path       Component
--------------------------
/              Home
/about         About
/contact       Contact
/product       Product
```

For example:

```jsx
<Route path="/about" element={<About />} />
```

When the URL becomes:

```text
http://localhost:5173/about
```

React Router renders:

```jsx
<About />
```

---

## 7) Page Routing Example

We can create separate components inside a `pages` folder.

```text
src/
│
├── components/
│   └── Navbar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Product.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

### Home.jsx

The `Home` component represents the Home page.

```jsx
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
```

This component is connected to the `/` route:

```jsx
<Route path="/" element={<Home />} />
```

When the user visits:

```text
http://localhost:5173/
```

React Router renders the `Home` component.

### Page Routing Flow

```text
Browser
   ↓
http://localhost:5173/
   ↓
BrowserRouter
   ↓
Routes
   ↓
<Route path="/" />
   ↓
<Home />
   ↓
Home Page
```

---

## 8) Navbar Component

The Navbar is used to navigate between different routes.

We use `Link` from `react-router-dom`.

### Navbar.jsx

```jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h3>VC</h3>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
```

---

## 9) Link Component

`Link` is used to navigate between React Router routes.

Example:

```jsx
<Link to="/about">About</Link>
```

Here:

* `Link` is provided by React Router DOM.
* `to="/about"` specifies the destination URL.
* Clicking the link changes the URL.
* React Router renders the matching component.
* The browser does not perform a full page reload.

---

## 10) Link vs Anchor Tag

### Normal Anchor Tag

```jsx
<a href="/about">About</a>
```

The browser performs normal navigation and can reload the page.

### React Router Link

```jsx
<Link to="/about">About</Link>
```

React Router handles the navigation without a full page reload.

For internal navigation in a React Router application, use `Link`.

---

## 11) Navigation Flow

When the user clicks the About link:

```text
User clicks About
       ↓
<Link to="/about">
       ↓
URL changes to /about
       ↓
Routes checks the URL
       ↓
<Route path="/about">
       ↓
<About /> renders
```

---

## 12) Route Paths Must Match

The path used in `Link` should match the path defined in `Route`.

Correct:

```jsx
<Link to="/about">About</Link>
```

```jsx
<Route path="/about" element={<About />} />
```

Both use:

```text
/about
```

Our project uses lowercase URL paths:

```text
/ 
/about
/contact
/product
```

This keeps the routing consistent and gives clean URLs.

---

## 13) Complete Project Flow

```text
                    React Application
                           │
                           ↓
                       main.jsx
                           │
                           ↓
                    BrowserRouter
                           │
                           ↓
                        App.jsx
                           │
                    ┌──────┴──────┐
                    ↓             ↓
                 Navbar         Routes
                    │             │
                    │       ┌─────┼─────┬─────┐
                    │       ↓     ↓     ↓     ↓
                    │      Home  About Contact Product
                    │
                    ↓
                  Link
                    │
          ┌─────────┼─────────┬─────────┐
          ↓         ↓         ↓         ↓
        Home      About     Contact   Product
```

---

## 14) Complete Routing Flow

```text
User
  ↓
Clicks Navbar Link
  ↓
<Link to="/about">
  ↓
Browser URL changes
  ↓
BrowserRouter detects URL
  ↓
Routes checks available routes
  ↓
Route path matches
  ↓
Matching component renders
```

---

## 15) Important React Router Concepts

### BrowserRouter

Enables routing for the application.

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

### Routes

Contains the application's routes.

```jsx
<Routes>
  ...
</Routes>
```

### Route

Connects a URL path with a component.

```jsx
<Route path="/about" element={<About />} />
```

### Link

Provides navigation between routes.

```jsx
<Link to="/about">About</Link>
```

---

## 16) Important Notes

* `BrowserRouter` should wrap the `App` component.
* `Routes` should contain the application's `Route` components.
* `Route` uses the `element` prop to render a component.
* Use `Link` instead of `<a>` for internal React Router navigation.
* The `Link` path and `Route` path should match.
* Keep URL naming consistent, such as lowercase paths.
* React Router allows navigation without a complete browser page reload.

### Modern Route Syntax

Use:

```jsx
<Route path="/about" element={<About />} />
```

The `element` prop receives the React component:

```jsx
element={<About />}
```

---

## 17) What I Learned

* What React Router DOM is.
* How to install `react-router-dom`.
* How `BrowserRouter` works.
* How to use `Routes`.
* How to use `Route`.
* How to use `Link`.
* How to create page routing in React.
* How to connect URLs with React components.
* How to create a Navbar using `Link`.
* Difference between `Link` and the normal `<a>` tag.
* How routing works in a Single Page Application.
* How `main.jsx`, `App.jsx`, Navbar, Routes, and page components work together.

---

# 🎯 Final Summary

React Router DOM is used to create client-side routing in React.

The basic structure is:

```text
BrowserRouter
      ↓
    App.jsx
      ↓
    Routes
      ↓
    Route
      ↓
Component
```

Navigation works like this:

```text
<Link>
   ↓
URL changes
   ↓
BrowserRouter
   ↓
Routes
   ↓
Matching Route
   ↓
Component renders
```

### Project Routes

```text
/          → Home
/about     → About
/contact   → Contact
/product   → Product
```

This project demonstrates the basic implementation of client-side page routing using React Router DOM.
