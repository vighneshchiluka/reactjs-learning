# 🚀 React Event Handling & Functions

## 1) Created functions to handle different events.

```jsx
function btnClicked() {}

function inputChanging() {}

const pageScrolling = () => {}
```

Functions are used to execute code whenever an event occurs.

---

## 2) Handled button click event.

```jsx
<button onClick={function () {
    console.log("Button clicked");
}}>
```

`onClick` executes when the user clicks the button.

---

## 3) Handled button double-click event.

```jsx
<button onDoubleClick={btnClicked}>
```

`onDoubleClick` executes when the user double-clicks the button.

---

## 4) Used anonymous functions as event handlers.

```jsx
onClick={function () {
    console.log("Button clicked");
}}
```

Anonymous functions are written directly inside the JSX event.

---

## 5) Used named functions as event handlers.

```jsx
onDoubleClick={btnClicked}
```

Named functions improve code readability and can be reused.

---

## 6) Handled input change event.

```jsx
<input onChange={inputChanging} />
```

`onChange` is triggered whenever the user types inside the input field.

---

## 7) Retrieved the input value using `event.target.value`.

```jsx
<input
    onChange={function (event) {
        inputChanging(event.target.value);
    }}
/>
```

`event.target.value` returns the current value entered in the input.

---

## 8) Learned about the event object.

```jsx
onClick={function (event) {
    console.log(event);
}}
```

Every React event automatically passes an event object containing information about the event.

Common properties:

```jsx
event.target
event.type
event.clientX
event.clientY
event.deltaY
```

---

## 9) Tracked mouse movement.

```jsx
<div
    onMouseMove={function (event) {
        console.log(event.clientX);
    }}
>
```

`onMouseMove` fires whenever the mouse moves over an element.

---

## 10) Handled mouse wheel scrolling.

```jsx
<div
    onWheel={(event) => {
        pageScrolling(event.deltaY);
    }}
>
```

`onWheel` detects mouse wheel scrolling.

- `deltaY > 0` → Scrolling Down
- `deltaY < 0` → Scrolling Up

---

## 11) Passed values from event objects to functions.

```jsx
pageScrolling(event.deltaY)
```

Instead of passing the entire event object, specific values can be passed to functions.

---

# 📚 Concepts Covered

- React Events
- Event Handlers
- Anonymous Functions
- Named Functions
- Event Object
- onClick
- onDoubleClick
- onChange
- onMouseMove
- onWheel
- event.target.value
- event.clientX
- event.deltaY
- Passing Arguments to Functions

---

# ✅ What I Learned

- Creating functions to handle user interactions.
- Using anonymous and named functions as event handlers.
- Handling click and double-click events.
- Detecting user input with `onChange`.
- Accessing input values using `event.target.value`.
- Understanding the React event object.
- Tracking mouse movement using `onMouseMove`.
- Detecting page scrolling with `onWheel`.
- Passing event values to custom functions.
- Writing cleaner and reusable event handling code.