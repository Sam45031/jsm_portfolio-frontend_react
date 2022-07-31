import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  // const [education, setEducation] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    // const educationQuery = '*[_type == "education"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });

    // client.fetch(educationQuery).then((data) => {
    //   setEducation(data);
    // });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Design</span> <br />
        Means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="app__skills-exp">
{education.map((educate) => (
  <motion.div className="app__skills-exp-item" key={educate.year}>
    <div className="app__skills-exp-year">
      <p className="bold-text">{educate.year}</p>
    </div>
    <motion.div className="app__skills-exp-works">
      {educate.achievement.map((achieve) => (
        <>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-exp-work"
            data-tip
            data-for={achieve.name}
            key={achieve.name}
          >
            <h4 className="bold-text">{achieve.name}</h4>
            <p className="p-text">{achieve.accomplishment}</p>
          </motion.div>
          <ReactTooltip
            id={achieve.name}
            effect="solid"
            arrowColor="#fff"
            className="skills-tooltip"
          >
            {achieve.desc}
          </ReactTooltip>
        </>
      ))}
    </motion.div>
  </motion.div>
))}
</div> */
}
