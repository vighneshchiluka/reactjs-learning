# 🎨 Tailwind CSS Learning

This project demonstrates how to set up and use **Tailwind CSS** in a React application.

---

# 📌 What I Learned

## 1. What is Tailwind CSS?

Tailwind CSS is a **utility-first CSS framework** that allows you to build modern and responsive user interfaces by applying utility classes directly in your HTML/JSX.

Instead of writing custom CSS, Tailwind provides predefined utility classes.

---

## 2. Installing Tailwind CSS

Install Tailwind CSS and the Vite plugin.

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## 3. Configure Vite

Update `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

---

## 4. Import Tailwind CSS

In `src/index.css`

```css
@import "tailwindcss";
```

---

## 5. Using Tailwind CSS

Instead of writing CSS classes, use Tailwind utility classes directly in JSX.

```jsx
<div className="w-full h-screen bg-green-900">
  Hello Tailwind CSS
</div>
```

---

## 6. Understanding Utility Classes

| Class | Meaning |
|--------|---------|
| `w-full` | Width: 100% |
| `h-screen` | Height: 100vh |
| `bg-green-900` | Dark Green Background |
| `text-white` | White Text |
| `p-5` | Padding: 20px |
| `m-5` | Margin: 20px |
| `rounded-lg` | Large Border Radius |
| `flex` | Display Flex |
| `justify-center` | Horizontally Center Items |
| `items-center` | Vertically Center Items |

---

## Example

```jsx
<div className="w-full h-screen bg-green-900 flex justify-center items-center">
  <h1 className="text-white text-4xl font-bold">
    Hello Tailwind CSS
  </h1>
</div>
```

---

## Benefits of Tailwind CSS

- Utility-first approach
- Faster UI development
- No need to write separate CSS files
- Responsive design made easy
- Highly customizable
- Small production CSS bundle

---

## Technologies Used

- React.js
- Vite
- Tailwind CSS

---

## 🚀 Outcome

Successfully configured Tailwind CSS in a React project and built responsive layouts using Tailwind utility classes without writing custom CSS.