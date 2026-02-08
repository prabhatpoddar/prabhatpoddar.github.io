import React from "react";
import "./Introduction.css";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ExploreIcon from "@mui/icons-material/Explore";
import { ThemeContext } from "../../Context/theme";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80" alt="Developer at work" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi, I'm{" "}
                <span className="different">Prabhat Poddar</span>, from{" "}
                <span className="different">Kolkata, West Bengal (India)</span>.
                I completed my graduation (BCA) from{" "}
                <span className="different">Kanpur University</span>, then
                joined the full-stack development program at{" "}
                <span className="different">Masai School</span>, an
                intensive coding bootcamp.
              </h4>
              <h4>Beyond coding:</h4>
              <h4 className="different">
                <span className="icons">
                  <MenuBookIcon />
                </span>
                Reading self-help books
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExploreIcon />
                </span>
                Travelling
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
