import { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);

  useEffect(
    function () {
      console.log("useEffect is running in parallel");
    },
    [num],
  );

  // --------another example------------

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChanging() {
    console.log("A ki value change ho gayi");
  }

  function bChanging() {
    console.log("B ki value change ho gayi");
  }

  useEffect(function () {
    aChanging();
  },[a]);

  useEffect(function () {
    bChanging();
  },[b]);

  return (
    <div>
      <h1>Num {num}</h1>
      <h1>Num2 {num2}</h1>

      <button
        onClick={function () {
          setNum(num + 1);
        }}
        onDoubleClick={function () {
          setNum2(num2 + 1);
        }}
      >
        Click
      </button>

      {/* -----------second-example------ */}

      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button onClick={()=>{
        setA(a + 1)
      }} >Click A</button>
      <button onClick={()=>{
        setB(b - 1)
      }}>Click B</button>
    </div>
  );
};

export default App;
