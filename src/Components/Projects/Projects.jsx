import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat, FaRe } from "react-icons/fa";
import {
  SiChakraui,
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiRedux
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">


          {/* 1 project */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://27d41b4d0e33e769f7e4-a2056c51255618cf81131515fc466be0.ssl.cf2.rackcdn.com/Open%20Graph/ayoa_oggraph.jpg"
                    alt="ayoa.com"
                    style={{ height: "200px" }}
                   
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Ayoa.com Clone</h2>
                <p>
                Ayoa.com seamlessly syncs all of your work across the devices that you're using. If you've created a mind map, task board or whiteboard on your computer and want to access it on your phone or tablet, simply open the Ayoa app on your mobile device and ta-dah, your work will appear ready for you to edit
                </p>
                <div>
                  <FaReact />
                  <SiRedux />
                  <IoLogoJavascript />
                  <SiChakraui />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://tiny-rugelach-e3e0ee.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Srahul2244/grouchy-dinner-9447"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2 project */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://desktime.com/static/og/home.png"
                    alt="Lybrate.com"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Desktime.com Clone</h2>
                <p>
                DeskTime is a desktop and mobile time tracking app for companies and freelancers. It makes it easy to measure productivity, boost performance, track attendance, and effectively manage workflow. DeskTime has proven to boost employee productivity by 30% within the first weeks of use.
                </p>
                <div>
                  <FaReact />
                  <SiChakraui />
                  <IoLogoJavascript />
                 
                </div>
                <div>
                  <a
                    href="https://bitter-measure-5999.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/prabhatpoddar/bitter-measure-5999"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>



          {/* 3 project */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://www.ayoa.com/wp-content/uploads/2021/01/official_mindmapsoftware_three.png"
                    style={{ height: "200px" }}
                    alt="Ayoy.com"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Ayoa.com Clone</h2>
                <p>
                Ayoa.com seamlessly syncs all of your work across the devices that you're using. If you've created a mind map, task board or whiteboard on your computer and want to access it on your phone or tablet, simply open the Ayoa app on your mobile device and ta-dah, your work will appear ready for you to edit

                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://tiny-rugelach-e3e0ee.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Srahul2244/grouchy-dinner-9447"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
