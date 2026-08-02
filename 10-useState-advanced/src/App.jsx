import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(10);

  const btnClicked = () => {
    console.log(num);
    setNum(prev=>(prev+1));
    setNum(prev=>(prev+1));
    setNum(prev=>(prev+1));
  };

  return (
    <div className="usestate-box">
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  );
};

export default App;
