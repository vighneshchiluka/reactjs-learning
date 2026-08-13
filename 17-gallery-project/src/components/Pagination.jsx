import React from "react";

const Pagination = (props) => {
  return (
    <div className="flex justify-center gap-6 items-center p-4">
      <button
        style={{ opacity: props.index === 1 ? 0.5 : 1 }}
        onClick={() => {
          console.log("Prev Button Clicked");
          if (props.index > 1) {
            props.setIndex(props.index - 1);
            props.setUserData([]);
          }
        }}
        className="bg-amber-400 text-black cursor-pointer active:scale-95 rounded text-sm px-4 py-2 font-semibold"
      >
        Prev
      </button>

      <h4>Page {props.index}</h4>

      <button
        onClick={() => {
          console.log("Next Button Clicked");
          props.setIndex(props.index + 1);
          props.setUserData([]);
        }}
        className="bg-amber-400 text-black cursor-pointer active:scale-95 rounded text-sm px-4 py-2 font-semibold"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
