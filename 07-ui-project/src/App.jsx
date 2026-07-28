import React from "react";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1555421689-43cad7100750?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "the content is good i like the concept well this is the random text",
      color:'red',
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "the context is good i like the concept well this is the random text",
      color:'navy',
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1546979859-b7d45d499dd6?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "they like this good i like the concept well this is the random text",
      color:'green',
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1546979859-b7d45d499dd6?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "Both like this good i like the concept well this is the random text",
      color:'royalblue',
      tag: "Underbanked",
    },
  ];

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  );
};

export default App;
