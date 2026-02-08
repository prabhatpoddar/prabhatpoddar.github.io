import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiChakraui,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiRedux
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
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
                    src="/myntra1.jpg"
                    style={{ height: "200px" }}
                    alt="Myntra.com"

                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Myntra.com Clone</h2>
                <p>
                  Shop24 is a MERN stack e-commerce web app inspired by Myntra. I led backend development and built the admin panel (login, signup, payment). The app delivers a seamless shopping experience with product listing, cart, and checkout.
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
                    href="https://shop24-prabhatpoddar.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/prabhatpoddar/shop24"
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
                    src="/zomato.webp"
                    alt="Zomato.com"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Zomato.com Clone</h2>
                <p>
                  Tasty Treat is a React and Redux food-ordering web app inspired by Zomato. I built the full application: UI, state management, and integration with backend APIs. Users can browse restaurants, view menus, and place orders with a responsive, user-friendly interface.
                </p>
                <div>
                  <FaReact />
                  <SiRedux />
                  <SiChakraui />
                  <IoLogoJavascript />

                </div>
                <div>
                  <a
                    href="https://resturent-alpha.vercel.app/home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/prabhatpoddar/Resturent-App"
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
                    src="/ayoy1.png"
                    style={{ height: "200px" }}
                    alt="AYOA productivity software"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Ayoa.com Clone</h2>
                <p>
                  A collaborative productivity clone inspired by Ayoa: mind maps, task boards, and whiteboards that sync across devices. Built with HTML, CSS, and JavaScript; focused on clean UI and core project-management features.
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
          {/* project 4 */}

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ytimg.com/vi/4uu-mKoFR6w/maxresdefault.jpg"
                    alt="Ketto.com"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Ketto.com Clone</h2>
                <p>
                  A crowdfunding clone inspired by Ketto. Users can create campaigns, donate, and track funding progress. Built with HTML, CSS, and JavaScript; includes campaign listing, detail pages, and a simple donation flow.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />

                </div>
                <div>
                  <a
                    href="https://musical-jalebi-5be9ac.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/prabhatpoddar/ketto-clone"
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
