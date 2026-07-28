import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="right" className="h-full flex flex-nowrap overflow-x-auto gap-10 p-6 w-2/3 rounded-4xl">
      {props.users.map(function (user,idx) {
        return <RightCard key={idx} id={idx} img={user.img} intro={user.intro} color={user.color} tag={user.tag} />;
      })}
    </div>
  );
};

export default RightContent;
