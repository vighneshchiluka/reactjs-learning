# 🚀 React Router DOM – Advanced Routing

## 1) What is Advanced Routing?

React Router DOM is used to create navigation and routing in a React application.

This project demonstrates:

* Basic page routing
* Nested routing
* Dynamic routing
* `useParams()`
* `Outlet`
* Navigation using `Link`
* 404 / unknown route handling
* Common `Navbar` and `Footer` components

The application uses `BrowserRouter` in `main.jsx` to enable routing for the entire application.

---

## 2) Project Structure

```text
routing-advanced/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Product.jsx
│   │   ├── Men.jsx
│   │   ├── Women.jsx
│   │   ├── Kids.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetail.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
└── package.json
```

---

## 3) BrowserRouter

`BrowserRouter` provides routing functionality to the React application.

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

`App` is wrapped inside `BrowserRouter`, allowing all routes and navigation components to use React Router.

### Routing Flow

```text
main.jsx
    ↓
BrowserRouter
    ↓
App.jsx
    ↓
Routes
    ↓
Route
    ↓
Page Component
```

---

## 4) App.jsx

`App.jsx` contains the main routing configuration.

```jsx
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Product from "./pages/Product.jsx";

import Men from "./pages/Men.jsx";
import Women from "./pages/Women.jsx";
import Kids from "./pages/Kids.jsx";

import Courses from "./pages/Courses.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>

        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
```

---

## 5) Basic Page Routing

Basic routing connects a URL path with a React component.

```jsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
```

The basic routes are:

```text
/          → Home
/about     → About
/contact   → Contact
```

For example:

```text
http://localhost:5173/about
```

renders the `About` component.

---

## 6) Page Component

Pages are created as separate React components inside the `pages` folder.

### Home.jsx

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

The component is connected to the `/` route:

```jsx
<Route path="/" element={<Home />} />
```

---

## 7) Navbar and Link

The Navbar provides navigation between the main pages using `Link` from React Router DOM.

### Navbar.jsx

```jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-cyan-900">
      <h2 className="text-xl font-bold">Vighnesh Chiluka</h2>

      <div className="flex gap-10">
        <Link to="./">Home</Link>
        <Link to="./about">About</Link>
        <Link to="./courses">Courses</Link>
        <Link to="./product">Product</Link>
        <Link to="./contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
```

`Link` is used for navigation between routes without using normal HTML page navigation.

```jsx
<Link to="./about">About</Link>
```

---

## 8) Nested Routing

Nested routing allows child routes to exist inside a parent route.

In this project, `/product` is the parent route and `men`, `women`, and `kids` are child routes.

```jsx
<Route path="/product" element={<Product />}>
  <Route path="men" element={<Men />} />
  <Route path="women" element={<Women />} />
  <Route path="kids" element={<Kids />} />
</Route>
```

This creates:

```text
/product
    │
    ├── /product/men
    ├── /product/women
    └── /product/kids
```

---

## 9) Outlet

`Outlet` is used inside the parent component to display the matching child route.

### Product.jsx

```jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-10 py-4">
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
        <Link to="/product/kids">Kids</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Product;
```

When `/product/men` is opened:

```text
/product/men
      ↓
<Product />
      ↓
<Outlet />
      ↓
<Men />
```

So, `Outlet` acts as the place where the matching child component is rendered.

---

## 10) Dynamic Routing

Dynamic routing is used when part of the URL changes dynamically.

This project uses dynamic routing for course details:

```jsx
<Route path="/courses/:courseId" element={<CourseDetail />} />
```

Here, `:courseId` is a dynamic route parameter.

```text
/courses/react
/courses/javascript
/courses/python
```

The value after `/courses/` can change.

---

## 11) useParams()

`useParams()` is used to access dynamic route parameters.

### CourseDetail.jsx

```jsx
import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const params = useParams();

  return (
    <div>
      <h1>{params.courseId} Course Detail Page</h1>
    </div>
  );
};

export default CourseDetail;
```

If the URL is:

```text
/courses/react
```

then:

```jsx
params.courseId
```

contains:

```text
react
```

Therefore, the page displays:

```text
react Course Detail Page
```

### Dynamic Routing Flow

```text
/courses/react
      ↓
/courses/:courseId
      ↓
useParams()
      ↓
params.courseId
      ↓
CourseDetail
```

---

## 12) 404 Not Found Route

The wildcard route handles URLs that do not match any defined route.

```jsx
<Route path="*" element={<NotFound />} />
```

### NotFound.jsx

```jsx
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-red-600 text-3xl">
        404 Page Not Found
      </h1>
    </div>
  );
};

export default NotFound;
```

For example, if the user visits:

```text
http://localhost:5173/xyz
```

the wildcard route renders the `NotFound` component.

```text
Unknown URL
     ↓
path="*"
     ↓
NotFound
     ↓
404 Page Not Found
```

---

## 13) Common Navbar and Footer

The `Navbar` and `Footer` are placed outside the `Routes`, making them common components across the application.

```text
App
 │
 ├── Navbar
 │
 ├── Routes
 │    ├── Home
 │    ├── About
 │    ├── Contact
 │    ├── Product
 │    │    ├── Men
 │    │    ├── Women
 │    │    └── Kids
 │    ├── Courses
 │    ├── CourseDetail
 │    └── NotFound
 │
 └── Footer
```

---

## 14) Complete Routing Structure

```text
/
├── /about
├── /contact
│
├── /product
│   ├── /product/men
│   ├── /product/women
│   └── /product/kids
│
├── /courses
├── /courses/:courseId
│
└── *
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

Contains all application routes.

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

Used for navigation.

```jsx
<Link to="/about">About</Link>
```

### Nested Route

Creates child routes inside a parent route.

```jsx
<Route path="/product" element={<Product />}>
  <Route path="men" element={<Men />} />
</Route>
```

### Outlet

Displays the matching child route inside the parent component.

```jsx
<Outlet />
```

### Dynamic Route

Creates a dynamic URL parameter.

```jsx
<Route path="/courses/:courseId" element={<CourseDetail />} />
```

### useParams

Reads dynamic route parameters.

```jsx
const params = useParams();
```

### Wildcard Route

Handles unknown URLs.

```jsx
<Route path="*" element={<NotFound />} />
```

---

## 16) Important Notes

* `BrowserRouter` should wrap the application.
* `Routes` contains the route definitions.
* `Route` connects a path with a component.
* `Link` is used for React Router navigation.
* Nested routes are defined inside a parent route.
* `Outlet` renders the matching child route.
* `:courseId` creates a dynamic route parameter.
* `useParams()` reads dynamic URL parameters.
* `path="*"` handles unknown routes.
* Navbar and Footer can be placed outside `Routes` to create a common layout.
* Child paths such as `men`, `women`, and `kids` are relative to the `/product` parent route.

---

## 17) What I Learned

* How to configure React Router using `BrowserRouter`.
* How to create basic page routes using `Routes` and `Route`.
* How to navigate using `Link`.
* How to create nested routes.
* How `Outlet` works with nested routes.
* How to create dynamic routes using route parameters.
* How to use `useParams()` to access dynamic URL values.
* How to create a 404 page using a wildcard route.
* How to create a common Navbar and Footer layout.
* How different React Router concepts work together in one application.

---

# 🎯 Final Summary

This project demonstrates advanced routing using React Router DOM.

```text
BrowserRouter
      ↓
    App.jsx
      ↓
    Routes
      ↓
 ┌────┼───────────────────┐
 ↓    ↓                   ↓
Basic Nested           Dynamic
Route Routes            Route
      ↓                   ↓
   Outlet              useParams
      ↓                   ↓
Child Routes         CourseDetail
```

### Basic Routing

```text
/          → Home
/about     → About
/contact   → Contact
```

### Nested Routing

```text
/product
    ├── /product/men
    ├── /product/women
    └── /product/kids
```

### Dynamic Routing

```text
/courses/:courseId
```

### Unknown Route

```text
*
 ↓
NotFound
```

This project demonstrates the core advanced React Router concepts required to build applications with multiple pages, nested sections, dynamic URLs, and 404 handling.
