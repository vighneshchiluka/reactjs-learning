# 🚀 React Notes App Learning

## 1) Created multiple state variables using `useState`.

```jsx
const [title, setTitle] = useState("");
const [details, setDetails] = useState("");
const [task, setTask] = useState([]);
```

- `title` → Stores the note heading.
- `details` → Stores the note description.
- `task` → Stores all notes as an array of objects.

---

## 2) Implemented Two-Way Data Binding.

```jsx
<input
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

<textarea
  value={details}
  onChange={(e) => setDetails(e.target.value)}
/>
```

The input fields stay synchronized with the React state.

---

## 3) Handled form submission.

```jsx
const submitHandler = (e) => {
  e.preventDefault();
};
```

`preventDefault()` prevents the page from refreshing after submitting the form.

---

## 4) Created a new note object.

```jsx
{
  title,
  details
}
```

Each note is stored as an object containing a title and description.

---

## 5) Updated array state using the spread operator.

```jsx
const copyTask = [...task];

copyTask.push({
  title,
  details,
});

setTask(copyTask);
```

Instead of modifying the original array, a new array is created before updating the state.

---

## 6) Rendered notes dynamically using `.map()`.

```jsx
task.map((elem, idx) => (
  <div key={idx}>
    ...
  </div>
))
```

Every object inside the array is converted into a note card.

---

## 7) Displayed dynamic data using props from the array.

```jsx
<h3>{elem.title}</h3>

<p>{elem.details}</p>
```

The note title and description are displayed dynamically.

---

## 8) Used the React `key` prop.

```jsx
key={idx}
```

The `key` prop helps React efficiently update and re-render list items.

---

## 9) Cleared the input fields after submission.

```jsx
setTitle("");
setDetails("");
```

After adding a note, both input fields are reset.

---

## 10) Deleted a note from the array.

```jsx
const copyTask = [...task];

copyTask.splice(idx, 1);

setTask(copyTask);
```

The selected note is removed by its index, and the state is updated with the new array.

---

## 11) Connected buttons with event handlers.

```jsx
<button onClick={deleteNote}>
```

Clicking the Delete button removes the selected note.

---

## 12) Built a simple CRUD application.

Implemented two CRUD operations:

- ✅ Create Note
- ✅ Delete Note

---

# 📚 Concepts Covered

- React Hooks
- useState
- Two-Way Data Binding
- Controlled Components
- Form Handling
- Event Handling
- onSubmit
- onChange
- preventDefault()
- Arrays in State
- Objects in State
- Spread Operator
- Array `.map()`
- Array `.push()`
- Array `.splice()`
- Dynamic Rendering
- Conditional Re-rendering
- React `key` Prop
- CRUD Basics

---

# ✅ What I Learned

- Managing multiple state variables using `useState`.
- Creating controlled input and textarea components.
- Implementing Two-Way Data Binding.
- Handling form submission in React.
- Preventing the default form behavior.
- Creating objects from user input.
- Storing multiple notes inside an array.
- Updating array state using the spread operator.
- Rendering multiple components dynamically using `.map()`.
- Displaying dynamic data from objects.
- Clearing form fields after successful submission.
- Deleting notes using their array index.
- Updating the UI automatically after state changes.
- Building a simple Notes App using React.

---

# 📝 Notes

### State Structure

```jsx
const [task, setTask] = useState([
  {
    title: "",
    details: "",
  },
]);
```

Each note is stored as an object inside the array.

---

### Data Flow

```text
User Types
      │
      ▼
onChange
      │
      ▼
React State
(title & details)
      │
      ▼
Submit Form
      │
      ▼
Create Object
      │
      ▼
Push into Array
      │
      ▼
setTask()
      │
      ▼
.map()
      │
      ▼
Render Note Cards
```

---

### Delete Flow

```text
Click Delete
      │
      ▼
deleteNote(idx)
      │
      ▼
Create Array Copy
      │
      ▼
splice(idx, 1)
      │
      ▼
setTask()
      │
      ▼
React Re-renders
      │
      ▼
Updated Notes List
```

---

### Project Features

- ✅ Add Notes
- ✅ Display Notes
- ✅ Delete Notes
- ✅ Dynamic Rendering
- ✅ Two-Way Data Binding
- ✅ Responsive UI using Tailwind CSS