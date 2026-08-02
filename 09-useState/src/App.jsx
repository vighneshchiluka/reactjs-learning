import React, { useState } from "react";

const App = () => {
  // ------------num-read-only--------------
  const [num, setNum] = useState(10);

  // -------------setnum-write-only------------

  function changeNum() {
    setNum(30);
  }

  const [num2, setNum2] = useState(0);

  // ------------increaseNum--function-----------

  function increaseNum() {
    console.log(num2 + 1);
    setNum2(num2 + 1);
  }

  // ------------decreaseNum--function-----------

  function decreaseNum() {
    console.log(num2 - 1);
    setNum2(num2 - 1);
  }

  // ------------jumpNum5--function-----------

  function jumpNum5() {
    console.log(num2 + 5);
    setNum2(num2 + 5);
  }

  return (
    <div className="usestate-box">
      <h1>Value of num is {num}</h1>
      <button onClick={changeNum}>Click</button>

      {/* ----------use of useState-examples--------- */}
      <h2>Examples of useState function are below</h2>
      <h2 className="numbox">{num2}</h2>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpNum5}>JumpNum5</button>
    </div>
  );
};

export default App;
