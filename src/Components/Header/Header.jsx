import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
// import Image from "./../../assets/S-logo.jpg";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <div className="main_header">
      <header className={"header center " + themename}>
        
        <Navbar />
      </header>
      </div>
  );
};
