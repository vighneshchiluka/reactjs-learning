import { ThemeDataContext } from "../context/ThemeContext";
import Nav2 from "./Nav2";
import { useContext } from "react";

const Navbar = () => {

  const [theme,setTheme] = useContext(ThemeDataContext)

  return (
    <div className={theme}>
      <h2>Vighnesh</h2>
      <Nav2/>
    </div>
  );
};

export default Navbar;
