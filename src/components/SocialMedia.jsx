import React from "react";
import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaBlogger } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://muhammadsameerblogs.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <FaBlogger />
      </a>
    </div>
    <div>
      <a href="https://github.com/Sam45031" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/muhammad-sameer-046005199/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
