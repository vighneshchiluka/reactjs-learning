import React from "react";

const App = () => {

  // Function called when the button is double-clicked
  function btnClicked() {
    console.log("Button is clicked");
  }

  // Function called whenever the input value changes
  function inputChanging(val) {
    console.log(val);
  }

  // Function called when the user scrolls the mouse wheel
  const pageScrolling = (elem) => {
    if (elem > 0) {
      console.log("Scrolling down", elem);
    } else {
      console.log("Scrolling Up", elem);
    }
  };

  return (
    <div>
      <h1>Hello Guys</h1>

      <div>

        {/* 1. Handle button click using an anonymous function */}

        <button
          onClick={function () {
            console.log("Button clicked");
          }}
        >
          Click Here
        </button>

        {/* 2. Handle button double-click using a named function */}

        <button onDoubleClick={btnClicked}>
          Explore this
        </button>

        {/* 3. Handle input change event */}

        <input
          onChange={inputChanging}
          type="text"
          placeholder="Enter Name"
        />

        {/* 4. Get and print the input value using event.target.value */}

        <input
          onChange={function (event) {
            inputChanging(event.target.value);
          }}
          type="text"
          placeholder="Enter Message"
        />

      </div>

      {/* 5. Handle mouse move event and track cursor position */}

      <div
        onMouseMove={function (elem) {
          console.log(elem.clientX);
        }}
        className="box"
      >
      </div>

      {/* 6. Handle mouse wheel scroll event */}

      <div
        onWheel={(elem) => {
          pageScrolling(elem.deltaY);
        }}
      >
        <div className="page1">Page 1</div>
        <div className="page2">Page 2</div>
        <div className="page3">Page 3</div>
      </div>
    </div>
  );
};

export default App;