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
                    alt="ayoa.com"
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
                    href="https://client-chi-gray.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Sunilrath101/tangible-spiders-6376"
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
                Ketto is India's best medical crowdfunding platform. Founded in 2012 by Varun Sheth, Kunal Kapoor and Zaheer Adenwala, we have assisted more than 2 Lakh individuals and Organisations in raising funds through Online Crowdfunding Campaigns across India. Ketto is India's First peer-to-peer crowdfunding platform.
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
