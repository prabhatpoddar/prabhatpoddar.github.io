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
            Inspired By <a href="https://www.linkedin.com/in/manoj-attri-b6b737228/">Manoj Attri</a>
            </h3>
          </div>
        </a>
      </div>
    </>
  );
};
