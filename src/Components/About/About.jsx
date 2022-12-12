import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
import SocialLinks from "./SocialLinks";
import profilePic from "../../assets/Photo_fw20_0612.jpeg";

export const About = () => {
  return (
    <>
      <div className="about center ">
        <div>
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Prabhat Poddar</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          A Full Stack Developer who loves solving problems and building projects. I am equipped with a variety of technologies and tools to help me build the best possible product.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/prabhatpoddar"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:pk041222@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+919330159522"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/prabhat-poddar-b98bab22b/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/Prabhat71242001"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1ARoQNnQb7bb7QVgvVe8ws8qQtv4dmywb/view?usp=sharing"
            );
          }}
        >
          Resume
        </button>
        </div>
        <div className="About_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />

      </section>
      <SocialLinks />

    </>
  );
};
