# 🚀 React Form Handling Learning

## 1) Created a basic HTML form in React.

```jsx
<form>
  <input type="text" placeholder="Enter Your Input" />
  <button>Submit</button>
</form>
```

A form is used to collect user input.

---

## 2) Created a submit handler function.

```jsx
const submitHandler = (e) => {
  e.preventDefault();
  console.log("Form is Submitted");
};
```

The submit handler executes whenever the form is submitted.

---

## 3) Used the `onSubmit` event.

```jsx
<form onSubmit={submitHandler}>
```

`onSubmit` is triggered when:

- The Submit button is clicked.
- The user presses the **Enter** key inside an input field.

---

## 4) Passed the event object to the function.

```jsx
<form
  onSubmit={(e) => {
    submitHandler(e);
  }}
>
```

The event object contains information about the form submission.

---

## 5) Prevented the default browser behavior.

```jsx
e.preventDefault();
```

By default, submitting a form refreshes the page.

`preventDefault()` prevents the page refresh, allowing React to handle the form submission.

---

## 6) Executed custom logic after form submission.

```jsx
console.log("Form is Submitted");
```

Instead of refreshing the page, custom JavaScript code can be executed after the form is submitted.

---

## 7) Simplified the event handler.

Instead of writing:

```jsx
<form
  onSubmit={(e) => {
    submitHandler(e);
  }}
>
```

You can directly pass the function reference:

```jsx
<form onSubmit={submitHandler}>
```

React automatically passes the event object to the handler.

---

# 📚 Concepts Covered

- React Forms
- Form Handling
- `onSubmit`
- Event Object
- `preventDefault()`
- Form Submission
- Event Handler
- Function Reference
- Arrow Functions

---

# ✅ What I Learned

- Creating a basic form in React.
- Handling form submission using `onSubmit`.
- Creating a submit handler function.
- Understanding the React event object.
- Preventing the default page refresh using `preventDefault()`.
- Executing custom logic after form submission.
- Passing the event object to a function.
- Using a function reference directly in `onSubmit` for cleaner code.

---

# 📝 Notes

- By default, HTML forms refresh the page after submission.

❌ Default Behavior

```jsx
<form>
```

➡️ Page refreshes after submitting.

---

✅ React Way

```jsx
const submitHandler = (e) => {
  e.preventDefault();
};
```

➡️ Prevents page refresh and allows React to control the form submission.

---

### Clean & Recommended Syntax

```jsx
<form onSubmit={submitHandler}>
```

Instead of:

```jsx
<form
  onSubmit={(e) => {
    submitHandler(e);
  }}
>
```

Both work, but directly passing the function reference is shorter, cleaner, and the preferred React approach.