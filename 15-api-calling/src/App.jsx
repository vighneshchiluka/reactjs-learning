import React from "react";
import axios from "axios";
import { useState } from 'react';

const App = () => {

  async function getData1() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log(response);
  }

  const getData2 = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();
    console.log(data);
  };

  //  npm i axios using axios
  const getData3 = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    console.log(response.data);
    // we can write this to get data in axios and other method is destructing {data}
    console.log(data);
  };

  // for images data lorem picsum

  const [data, setData] = useState([]);

  const getData4 = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");

    console.log(response);
    setData(response.data);
  };

  return (
    <div>
      <button onClick={getData1}>Get Data From Function</button>
      <button onClick={getData2}>Get Json Data From Arrow Function</button>
      <button onClick={getData3}>Get Data From Axios </button>
      <button onClick={getData4}>Get Data From Picsum </button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <div key={idx}>
              <h3>Hello, {elem.author} {idx}</h3>
              <img src={elem.download_url} width={300} height={300} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
