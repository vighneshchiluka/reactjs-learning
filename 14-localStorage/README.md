# 🚀 React Local Storage Learning

## 1) Stored primitive values in Local Storage.

```jsx
localStorage.setItem("user", "Vighnesh");
localStorage.setItem("age", "25");
```

`setItem()` is used to store data in the browser's Local Storage.

---

## 2) Retrieved data from Local Storage.

```jsx
const user = localStorage.getItem("user");
const age = localStorage.getItem("age");
```

`getItem()` returns the stored value using its key.

---

## 3) Displayed stored values.

```jsx
console.log(user);
console.log(age);
```

The retrieved values can be used anywhere inside the application.

---

## 4) Removed a single item from Local Storage.

```jsx
localStorage.removeItem("user");
```

`removeItem()` deletes a specific key-value pair from Local Storage.

---

## 5) Cleared all Local Storage data.

```jsx
localStorage.clear();
```

`clear()` removes every item stored inside Local Storage.

---

## 6) Cleared all Session Storage data.

```jsx
sessionStorage.clear();
```

`clear()` removes every item stored inside Session Storage.

---

## 7) Created a JavaScript object.

```jsx
const users = {
  username: "Vighnesh",
  age: 25,
  city: "Mumbai",
};
```

Objects cannot be stored directly in Local Storage.

---

## 8) Converted an object into a JSON string.

```jsx
localStorage.setItem(
  "users",
  JSON.stringify(users)
);
```

`JSON.stringify()` converts a JavaScript object into a string before storing it.

---

## 9) Retrieved the stored JSON string.

```jsx
const usersget1 = localStorage.getItem("users");
```

The returned value is always a string.

---

## 10) Converted the JSON string back into an object.

```jsx
const usersget2 = JSON.parse(usersget1);
```

`JSON.parse()` converts the JSON string back into a JavaScript object.

---

## 11) Verified the data type.

```jsx
console.log(typeof usersget1);
```

Output

```text
string
```

---

```jsx
console.log(typeof usersget2);
```

Output

```text
object
```

---

## 12) Understood the Local Storage workflow.

```text
JavaScript Object
        │
        ▼
JSON.stringify()
        │
        ▼
Local Storage (String)
        │
        ▼
localStorage.getItem()
        │
        ▼
JSON.parse()
        │
        ▼
JavaScript Object
```

Objects must be converted to strings before storing and converted back into objects after retrieving.

---

# 📚 Concepts Covered

- Browser Storage
- Local Storage
- Session Storage
- `setItem()`
- `getItem()`
- `removeItem()`
- `clear()`
- JSON
- `JSON.stringify()`
- `JSON.parse()`
- Objects
- Primitive Values
- Data Persistence

---

# ✅ What I Learned

- Storing primitive values in Local Storage.
- Retrieving values using `getItem()`.
- Removing specific items using `removeItem()`.
- Clearing all Local Storage data.
- Understanding the difference between Local Storage and Session Storage.
- Storing JavaScript objects using `JSON.stringify()`.
- Converting stored JSON strings back into objects using `JSON.parse()`.
- Understanding that Local Storage stores data as strings.
- Verifying data types using `typeof`.
- Learning the complete workflow for storing and retrieving objects.

---

# 📝 Notes

### Store Primitive Values

```jsx
localStorage.setItem("name", "Vighnesh");
```

---

### Get Primitive Values

```jsx
const name = localStorage.getItem("name");
```

---

### Remove One Item

```jsx
localStorage.removeItem("name");
```

---

### Clear All Local Storage

```jsx
localStorage.clear();
```

---

### Store Object

```jsx
const user = {
  name: "Vighnesh",
  age: 25,
};

localStorage.setItem(
  "user",
  JSON.stringify(user)
);
```

---

### Get Object

```jsx
const user = JSON.parse(
  localStorage.getItem("user")
);
```

---

## 🔄 Local Storage Flow

```text
Primitive Value
        │
        ▼
setItem()
        │
        ▼
Local Storage
        │
        ▼
getItem()
        │
        ▼
Primitive Value
```

---

```text
Object
   │
   ▼
JSON.stringify()
   │
   ▼
Local Storage (String)
   │
   ▼
getItem()
   │
   ▼
JSON.parse()
   │
   ▼
Object
```

---

## 📌 Difference Between Local Storage & Session Storage

| Local Storage | Session Storage |
|---------------|-----------------|
| Stores data permanently until removed | Stores data only for the current browser tab/session |
| Data remains after closing the browser | Data is removed when the tab or browser is closed |
| Shared across tabs of the same origin | Limited to the current tab |
| Capacity is around 5–10 MB (browser dependent) | Capacity is around 5 MB (browser dependent) |