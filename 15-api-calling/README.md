# 🚀 React API Fetching & Axios Learning

## 1) Used `fetch()` to make an API request.

```jsx
function getData() {
  const response = fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  console.log(response);
}
```

`fetch()` is used to make an API request.

---

## 2) Understood that `fetch()` works asynchronously.

```jsx
const response = fetch(url);
console.log(response);
```

`fetch()` returns a **Promise** immediately.

When the API request is still in progress, the Promise can show:

```text
Promise { <pending> }
```

`Promise { <pending> }` means the request has not completed yet.

---

## 3) Understood the basic Fetch flow.

```text
fetch()
   ↓
Promise
   ↓
Pending
   ↓
API Response
   ↓
Response Object
   ↓
response.json()
   ↓
Actual JSON Data
```

---

## 4) Used `async` and `await`.

```jsx
async function getData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
}
```

`await` waits for the Promise to settle before moving to the next line.

---

## 5) Converted the Fetch response into JSON.

```jsx
const response = await fetch(url);

const data = await response.json();

console.log(data);
```

`fetch()` returns a `Response` object.

`response.json()` reads the response body and converts the JSON response into JavaScript data.

---

## 6) Used JSONPlaceholder for API practice.

```text
JSONPlaceholder
```

JSONPlaceholder is a fake REST API used for testing, learning, and practicing API requests.

It provides sample data such as:

- Todos
- Users
- Posts
- Comments

---

## 7) Fetched multiple users using Fetch.

```jsx
const getData2 = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data = await response.json();

  console.log(data);
};
```

The API response is converted into JSON and stored in the `data` variable.

---

# 📦 Axios

## 8) Installed Axios.

```bash
npm i axios
```

Axios is an external library used to make HTTP/API requests.

---

## 9) Imported Axios.

```jsx
import axios from "axios";
```

---

## 10) Made an API request using Axios.

```jsx
const getData3 = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  console.log(response.data);
};
```

Axios returns a response object, and the actual API data can be accessed using:

```jsx
response.data
```

---

## 11) Used destructuring with Axios.

```jsx
const { data } = await axios.get(
  "https://jsonplaceholder.typicode.com/users"
);

console.log(data);
```

Instead of writing:

```jsx
response.data
```

we can directly extract `data` using object destructuring.

---

# 🖼️ Picsum API

## 12) Created state to store API data.

```jsx
const [data, setData] = useState([]);
```

- `data` → Stores the API data.
- `setData` → Updates the state.
- `[]` → Initial value is an empty array.

---

## 13) Fetched image data using Picsum.

```jsx
const getData4 = async () => {
  const response = await axios.get(
    "https://picsum.photos/v2/list"
  );

  console.log(response);
  setData(response.data);
};
```

Picsum provides sample image data that can be used for learning and testing.

---

## 14) Stored API data in React state.

```jsx
setData(response.data);
```

The API data is stored inside the `data` state.

When the state changes, React re-renders the component.

---

## 15) Used `.map()` to render API data.

```jsx
{data.map(function (elem, idx) {
  return (
    <div key={idx}>
      <h3>Hello, {elem.author} {idx}</h3>
    </div>
  );
})}
```

`.map()` loops through the API array and creates JSX for every item.

---

## 16) Displayed the image from the API.

```jsx
<img
  src={elem.download_url}
  alt={elem.author}
/>
```

The Picsum API provides both `url` and `download_url`.

- `elem.url` → Points to the photo/webpage information.
- `elem.download_url` → Directly provides the image resource.

Therefore, `download_url` can be used directly with `<img src="">`.

---

# 🔄 Complete API Data Flow

```text
API
 ↓
fetch() / axios.get()
 ↓
Promise
 ↓
API Response
 ↓
Get Response Data
 ↓
setData()
 ↓
React State
 ↓
.map()
 ↓
Dynamic JSX
 ↓
UI
```

---

# 📊 Fetch vs Axios

| Fetch | Axios |
|---|---|
| Built into JavaScript | External package |
| `fetch(url)` | `axios.get(url)` |
| Returns a Promise | Returns a Promise |
| Need `response.json()` | JSON is handled automatically |
| Data comes from `response.json()` | Data comes from `response.data` |

---

# 📚 Concepts Covered

- API
- HTTP Requests
- Fetch API
- Axios
- Promises
- Promise Pending
- `async`
- `await`
- `response.json()`
- `response.data`
- JSON
- Object Destructuring
- `useState`
- API Data in State
- Array `.map()`
- Dynamic Rendering
- JSONPlaceholder
- Picsum API
- Dynamic Images

---

# ✅ What I Learned

- Using `fetch()` to make API requests.
- Understanding that `fetch()` returns a Promise.
- Understanding `Promise { <pending> }`.
- Understanding asynchronous API requests.
- Using `async` and `await`.
- Waiting for an API request using `await`.
- Converting Fetch responses into JSON using `response.json()`.
- Using JSONPlaceholder for fake API testing and learning.
- Installing and using Axios.
- Making API requests using `axios.get()`.
- Accessing API data using `response.data`.
- Using object destructuring with Axios.
- Storing API data using `useState`.
- Rendering API data dynamically using `.map()`.
- Fetching image data from Picsum.
- Understanding the difference between a webpage URL and a direct image URL.
- Displaying API images using `elem.download_url`.

---

# 📝 Important Notes

### Fetch returns a Promise

```jsx
const response = fetch(url);

console.log(response);
```

The output can initially be:

```text
Promise { <pending> }
```

because the API request is asynchronous.

---

### Fetch requires JSON conversion

```jsx
const response = await fetch(url);

const data = await response.json();
```

---

### Axios directly provides the data

```jsx
const response = await axios.get(url);

console.log(response.data);
```

---

### Axios with destructuring

```jsx
const { data } = await axios.get(url);

console.log(data);
```

---

## 🎯 Learning Summary

```text
fetch()
   ↓
Promise
   ↓
await
   ↓
Response
   ↓
response.json()
   ↓
JSON Data
```

```text
axios.get()
   ↓
Promise
   ↓
await
   ↓
Response
   ↓
response.data
   ↓
API Data
```