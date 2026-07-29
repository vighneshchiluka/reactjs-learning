# 🚀 React Component Structure & Props Learning

## 1) Created a reusable UI by breaking the page into multiple components.

```text
App
│
└── Section1
    ├── Navbar
    └── Page1Content
        ├── LeftContent
        │   ├── HeroText
        │   └── Arrow
        │
        └── RightContent
            └── RightCard
                └── RightCardContent
```

Each component is responsible for rendering a specific part of the UI, making the application modular and reusable.

---

## 2) Created an array of objects in `App.jsx`.

```jsx
const users = [
  {
    img,
    intro,
    color,
    tag,
  },
];
```

Each object represents one card and stores all the data required to render it.

---

## 3) Passed data using Props.

```text
App
 ↓
Section1
 ↓
Page1Content
 ↓
RightContent
 ↓
RightCard
 ↓
RightCardContent
```

Props flow only from **Parent → Child**.

Each parent component passes data to its immediate child component.

---

## 4) Used `.map()` to render multiple cards dynamically.

```jsx
props.users.map((user, idx) => (
  <RightCard
    key={idx}
    id={idx}
    img={user.img}
    intro={user.intro}
    color={user.color}
    tag={user.tag}
  />
))
```

Instead of creating multiple cards manually, `.map()` loops through the array and renders a reusable component for every object.

---

## 5) Passed multiple props to a reusable component.

```jsx
<RightCard
  key={idx}
  id={idx}
  img={user.img}
  intro={user.intro}
  color={user.color}
  tag={user.tag}
/>
```

Each prop contains different data that is used to display dynamic content inside the card.

---

## 6) Forwarded props to nested child components.

```jsx
<RightCardContent
  id={props.id}
  intro={props.intro}
  color={props.color}
  tag={props.tag}
/>
```

Props do **not** automatically reach nested components.

Each parent component must explicitly pass props to its child.

---

## 7) Displayed dynamic data using props.

```jsx
<img src={props.img} alt="" />

<p>{props.intro}</p>

<button>{props.tag}</button>
```

Instead of hardcoding values, data is displayed dynamically using props.

---

## 8) Applied dynamic inline styling.

```jsx
<button
  style={{ backgroundColor: props.color }}
>
  {props.tag}
</button>
```

The button background color changes dynamically based on the `color` property of each object.

---

## 9) Styled the UI using Tailwind CSS.

```jsx
className="h-full w-80 rounded-4xl overflow-hidden"
```

Instead of writing traditional CSS, Tailwind utility classes were used to build a responsive and clean UI.

---

## 10) Used the React `key` prop while rendering lists.

```jsx
key={idx}
```

The `key` prop helps React identify each list item and efficiently update the UI during re-rendering.

---

# 📚 Concepts Covered

- JSX
- React Components
- Component Composition
- Parent → Child Communication
- Props
- Props Drilling
- Dynamic Rendering
- Array `.map()`
- React `key` Prop
- Reusable Components
- Tailwind CSS
- Inline Styling
- Dynamic Data Rendering

---

# ✅ What I Learned

- Breaking a large UI into small, reusable React components.
- Organizing components in a clean hierarchy.
- Creating and managing an array of objects.
- Passing data from parent components to child components using props.
- Understanding the flow of data in React (Parent → Child).
- Rendering components dynamically using `.map()`.
- Creating reusable cards from a single component.
- Passing multiple props to components.
- Forwarding props through multiple component levels.
- Displaying dynamic content using props.
- Applying dynamic inline styles using object properties.
- Using Tailwind CSS utility classes for styling.
- Using the React `key` prop for efficient list rendering.
- Building a clean and reusable component-based UI.