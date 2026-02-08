import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";

export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename}>
        <a href="/" rel="noreferrer" target="_blank">
          <div className="footerBox">
            <h3 className="footer">
            Copyright © {new Date().getFullYear()} Designed and built by Prabhat Poddar
            </h3>
          </div>
        </a>
      </div>
    </>
  );
};
