import React from "react";
import { useState } from "react";

const Navbar = (props) => {

    function changeTheme(){
        console.log('change theme',props.theme)
        props.setTheme('Dark')
    }

  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default Navbar;
