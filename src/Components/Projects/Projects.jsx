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
                    src="data:image/jpeg;base64,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"
                    alt="Myntra.com"
                    style={{ height: "200px" }}

                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Myntra.com Clone</h2>
                <p>
                  Myntra is a major Indian fashion e-commerce company headquartered in Bengaluru, Karnataka, India. The company was founded in 2007-2008 to sell personalized gift items. In May 2014, Myntra.com was acquired by Flipkart.

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
                    src="data:image/png;base64,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"
                    alt="Lybrate.com"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Zomato.com Clone</h2>
                <p>
                  Zomato is an Indian multinational restaurant aggregator and food delivery company. Zomato provides information, menus and user-reviews of restaurants as well as food delivery options from partner restaurants in more than 1,000 Indian cities
                </p>
                <div>
                  <FaReact />
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
                  <FaReact />
                  <SiChakraui />
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
