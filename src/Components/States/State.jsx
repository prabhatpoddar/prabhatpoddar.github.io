import React from "react";
import "../Projects/Projects.css";
import { FaReact, FaHardHat, FaRe } from "react-icons/fa";
import {
  SiChakraui,
  SiHtml5,

} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const State = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different"></h2>
        <div className="allProjects">
          {/* 3 project */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project_videocontainer">
              <div>
                <img src="https://github-readme-stats.vercel.app/api?username=prabhatpoddar&show_icons=true&locale=en" alt="status" />
              </div>
            </div>

          </div>
          {/* project 4 */}

          <div className="projects_container" data-aos="fade-right">
            <div className="project_videocontainer">
              <div>
                <img src="https://streak-stats.demolab.com/?user=prabhatpoddar" alt="git stats" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
