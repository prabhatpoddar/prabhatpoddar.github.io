import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,

  SiChakraui
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import {FaNpm,FaAws } from "react-icons/fa";
import { SiJavascript, SiHeroku,SiPostman,SiJest,SiLinux,SiTypescript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <SiNextdotjs />
            <h5>Next Js</h5>
          </div>
          
          <div>
            <SiTypescript />
            <h5>Typscript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
    
          <div>
            
            <SiTailwindcss />
            <h5>Tailwind Css</h5>
          </div>

          <div>
            <SiChakraui />
            <h5>Chakra Ui</h5>
          </div>
          <div>
            <SiMaterialui />
            <h5>Material Ui</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>
          </div>
          <div>
            <SiHeroku />
            <h5>Heroku</h5>
          </div>
          <div>
            <SiFirebase />
            <h5>Firebase</h5>
          </div>


          <div>
            <SiLinux />
            <h5>Linux</h5>
          </div>


          <div>
            <FaAws />
            <h5>Aws</h5>
          </div>


          <div>
            <SiJest />
            <h5>Jest</h5>
          </div>


    
          <div>
            <SiPostman />
            <h5>Postman</h5>
          </div>
        </div>
      </div>
    </>
  );
};
