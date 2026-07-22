# 🎨 CSS & CSS Modules in React

This project demonstrates the difference between **Global CSS** and **CSS Modules** in React.

---

# 📌 What I Learned

## 1. Global CSS

Global CSS is written in files like `index.css` or `App.css`.

- Styles are applied globally throughout the application.
- If multiple components use the same class name, all of them receive the same styles.
- This can lead to class name conflicts.

### Example

```css
.btn {
  background-color: red;
}
```

```jsx
<button className="btn">Header Button</button>

<button className="btn">Button Component</button>
```

### Output

- Header Button → 🔴 Red
- Button Component → 🔴 Red

---

## 2. CSS Modules

CSS Modules scope CSS to a specific component.

- Prevents class name conflicts.
- Allows different components to use the same class names.
- Generates unique class names automatically.

---

## Folder Structure

```text
src/
│
├── components/
│   ├── header/
│   │   ├── Header.jsx
│   │   └── Header.module.css
│   │
│   └── button/
│       ├── Button.jsx
│       └── Button.module.css
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## Header.module.css

```css
.header{
  background-color: lightseagreen;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
}

.btn{
  background-color: blue;
  width: fit-content;
  padding: 10px 25px;
  margin: 5px;
  border-radius: 10px;
  color: white;
  border: none;
}
```

---

## Button.module.css

```css
.btn{
  background-color: red;
  width: fit-content;
  padding: 10px 25px;
  margin: 5px;
  border-radius: 10px;
  color: white;
}
```

---

## Importing CSS Modules

### Header.jsx

```jsx
import styles from "./Header.module.css";
```

Use classes like:

```jsx
<div className={styles.header}>
  <button className={styles.btn}>Login</button>
</div>
```

---

### Button.jsx

```jsx
import styles from "./Button.module.css";
```

```jsx
<div className={styles.btn}>
  This is Button
</div>
```

---

### Output

- Header Button → 🔵 Blue
- Button Component → 🔴 Red

---

## Why CSS Modules?

Without CSS Modules:

- Same class names can overwrite each other.
- Styles become difficult to manage in large projects.

With CSS Modules:

- Styles are local to each component.
- Same class names can be reused safely.
- React automatically generates unique class names.

---

## Key Differences

| Global CSS | CSS Modules |
|------------|-------------|
| Global scope | Component scope |
| Class name conflicts | No conflicts |
| Imported normally | Imported as an object |
| `className="btn"` | `className={styles.btn}` |
| Best for global styles | Best for component styles |

---

## Concepts Covered

- Global CSS
- CSS Modules
- Component-based styling
- Scoped CSS
- Importing Module CSS
- `className={styles.className}`
- Preventing CSS conflicts

---

## Technologies Used

- React.js
- Vite
- CSS3
- CSS Modules

---

## 🚀 Outcome

Successfully created two components (`Header` and `Button`) using the same `.btn` class name, while applying different styles through **CSS Modules** without any class name conflicts.