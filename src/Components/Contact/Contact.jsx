import React, { useEffect, useState } from "react";
import { FcPhone } from "react-icons/fc";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css"
import "./Contact.css"
import { ThemeContext } from "../../Context/theme";
const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ delay: 200 });
  }, [])


  return (
    <>
      <div
        name="contact us"
        className="w-full text-white"
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="py-6 text-4xl text-center section__title different">Contact</p>
          <div className="contact-grid mt-12 mb-16">
            {/* Left side */}
            <div className="contact-info">
            <div className='contact-card flex gap-3 p-6 rounded-xl shadow-lg shadow-gray-600' >
              <div>
                <FcPhone className="hover:animate-bounce" size="32px" />
              </div>
              <div>

                <h1 className='text-xl font-bold '>Phone :</h1>
                <h1 className='text-xl text-gray-500 '>      <a
                  href="tel:+919330159522"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="phone"
                  className="link link--icon"
                >
                  +91 9330159522
                </a></h1>
              </div>
            </div>
            <div className='contact-card flex gap-3 p-6 rounded-xl shadow-lg shadow-gray-600' >
              <div>
                <SiGmail className="hover:animate-bounce" size="32px" color="red" />
              </div>
              <div>
                <h1 className='text-xl font-bold'>Email :</h1>
                <h1 className='text-xl text-gray-500'>   <a
                  href="mailto:pk041222@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="mail"
                  className="link link--icon"
                >
                  pk041222@gmail.com
                </a></h1>
              </div>
            </div>
            <div className='contact-card flex gap-3 p-6 rounded-xl shadow-lg shadow-gray-600' >
              <div>
                <a href="https://www.google.com/maps/place/Ganganagar,+Doharia+Shailesh+Nagar,+Chandigarh,+Madhyamgram,+Kolkata,+West+Bengal+700132/@22.6777221,88.4535752,15.44z/data=!4m5!3m4!1s0x39f89f131ef801dd:0xb888c99cae24e8b9!8m2!3d22.6754637!4d88.4591673" target="_blank" >
                  <FaMapMarkerAlt className="hover:animate-bounce" size="32px" color="red" />
                </a>
              </div>
              <div>
                <h1 className='text-xl font-bold'>Address :</h1>
                <h1 className='text-xl  text-gray-500'><a target="_blank"
                  rel="noreferrer"
                  aria-label="address"
                  className="link link--icon" href="https://www.google.com/maps/place/Ganganagar,+Doharia+Shailesh+Nagar,+Chandigarh,+Madhyamgram,+Kolkata,+West+Bengal+700132/@22.6777221,88.4535752,15.44z/data=!4m5!3m4!1s0x39f89f131ef801dd:0xb888c99cae24e8b9!8m2!3d22.6754637!4d88.4591673">Ganganagar, Kolkata</a></h1>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="contact-form-wrapper">
            <form
              action="https://getform.io/f/5ed0fbc4-9d5b-40e5-8e56-c74357705252"
              method="POST"
              encType="multipart/form-data"
              className="contact-form flex flex-col w-full"
            >
              <input
                type="text"
                name="Name"
                required
                placeholder="Enter your name"
                className={
                  themename === "dark" ? "input mb-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" : "inputDark mb-4 p-2   rounded-md text-black focus:outline-none"
                }
              />
              <input
                type="email"
                name="Email"
                required
                placeholder="Enter your email"
                className={
                  themename === "dark" ? "input mb-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" : "inputDark mb-4 p-2   rounded-md text-black focus:outline-none"
                }
              />
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                placeholder="Enter your Mobile No"
                className={
                  themename === "dark" ? "input mb-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" : "inputDark mb-4 p-2   rounded-md text-black focus:outline-none"
                }
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                required
                className={
                  themename === "dark" ? "input mb-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" : "inputDark mb-4 p-2   rounded-md text-black focus:outline-none"
                }
              />

              <button type="submit" className="text-white hover:opacity-60 bg-gradient-to-b from-cyan-400 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 hover:cursor-pointer " >
                Let's Connect
              </button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
