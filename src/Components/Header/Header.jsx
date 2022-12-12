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
      <h1 className={
                  themename === "dark" ? "text-1xl text-white font-signature mt-5 capitalize bg-transparent " :"text-1xl text-black font-signature mt-5 capitalize bg-transparent "
                }>Prabhat Poddar</h1>
        
        <Navbar />
      </header>
      </div>
  );
};
