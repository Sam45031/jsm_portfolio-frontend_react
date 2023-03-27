import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

// Variants in framer motion have to be declared here
// whileInView is an object here so ':' instead of '='
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginleft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Sameer</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">
              Highly skilled and collaborative <strong>IT Professional</strong>{" "}
              with more than 4 years of expertise in Technical Support, Web
              Development and Sales. Continually pursuing challenges to learn
              more and enhance the client experience whilst maintaining an
              addiction to learning cloud technologies. Excellent communication,
              problem solving and decision-making skills.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile3} alt="profile_bg" />
        {/* <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.profile3}
          alt="profile_circle"
        /> */}
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.python, images.react, images.git].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
