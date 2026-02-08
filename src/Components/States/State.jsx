import React from "react";
import "../Projects/Projects.css";

export const State = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">GitHub Stats</h2>
        <div className="allProjects">
          {/* 3 project */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project_videocontainer">
              <div>
                <img src="https://github-readme-stats-plus-theta.vercel.app/api?username=prabhatpoddar&show_icons=true&locale=en" alt="GitHub stats" referrerPolicy="no-referrer" />
              </div>
            </div>

          </div>
          {/* project 4 */}

          <div className="projects_container" data-aos="fade-right">
            <div className="project_videocontainer">
              <div>
                <img src="https://streak-stats.demolab.com/?user=prabhatpoddar" alt="GitHub streak stats" referrerPolicy="no-referrer" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
