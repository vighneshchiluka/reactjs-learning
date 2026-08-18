import React, { createContext,useState } from "react";

// -------creating context-------- 
export const ThemeDataContext = createContext();

const ThemeContext = (props) => {

  const [theme, setTheme] = useState('light')

  return (
    <div>
        {/* -------providing context-------- */}
        <ThemeDataContext.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeDataContext.Provider>
    </div>
  );
};

export default ThemeContext;
