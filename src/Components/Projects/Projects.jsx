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
                  Shop24 is a web application built using the MERN stack, designed to be a clone of Myntra.com, one of India's largest e-commerce websites. As the lead backend developer, I am responsible for creating the entire backend architecture of the application. Additionally, I am tasked with designing and implementing the Admin Panel Login, Signup, and Payment pages on the frontend. Overall, my contributions to this project aim to provide users with a seamless e-commerce experience similar to Myntra.com.

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
                  Tasty Treat is a web application that serves as a clone of Zomato, one of India's largest food ordering sites. The application is built using React and Redux, two popular front-end development frameworks. As the lead developer of the project, I am responsible for creating the entire application, from designing and implementing the user interface to setting up the server-side APIs and database. My goal is to create a seamless and user-friendly experience for customers who want to order food from their favorite restaurants online
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
                  Ketto is India's best medical crowdfunding platform. Founded in 2012 by Varun Sheth, Kunal Kapoor and Zaheer Adenwala, we have assisted more than 2 Lakh individuals and Organisations in raising funds through Online Crowdfunding Campaigns across India.
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
