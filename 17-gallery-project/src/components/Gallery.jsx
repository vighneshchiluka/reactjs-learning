import React from "react";
import Card from "./Card.jsx";

const Gallery = (props) => {
  let printUserData = (
    <h3 className="text-gray-300 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
      Loading....
    </h3>
  );

  if (props.userData.length > 0) {
    printUserData = props.userData.map(function (elem, idx) {
      return <Card key={idx} elem={elem} />;
    });
  }
  return <div className="flex flex-wrap h-[90%] gap-4 p-2">{printUserData}</div>;
};

export default Gallery;
