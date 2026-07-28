import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="text-shadow-2xs absolute p-8 flex flex-col justify-between top-0 left-0 h-full w-full">
      <h2 className="bg-white h-12 w-12 text-xl font-semibold rounded-full flex justify-center items-center">
        {props.id+1}
      </h2>
      <div>
        <p className="text-lg text-white leading-relaxed mb-14">
         {props.intro}
        </p>
        <div className="flex justify-between">
          <button style={{backgroundColor:props.color}} className="text-white font-medium rounded-full px-8 py-3">
            {props.tag}
          </button>
          <button style={{backgroundColor:props.color}} className="text-white font-medium rounded-full px-4 py-3">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
