import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "../style";
import index from "../index.css";
import { skillsImages } from "../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [toggle, setToggle] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const isSmScreen = useMediaQuery({ maxWidth: "480px" });
  const isMdScreen = useMediaQuery({ minWidth: "481px", maxWidth: "768px" });
  const numToShow = isSmScreen
    ? showMore
      ? skillsImages.length
      : 6
    : isMdScreen
    ? showMore
      ? skillsImages.length
      : 8
    : showMore
    ? skillsImages.length
    : 10;

  const dropIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };
  const { ref, inView } = useInView({ threshold: 0.3 }); // set the threshold to 0.2, meaning the animation will start when the element is 20% in view

  const animation = {
    // add your animation properties here
    opacity: inView ? 1 : 0,
    x: inView ? 0 : -50,
  };
  return (
    <motion.div
      className={`${styles.boxWidth}`}
      animate={animation}
      ref={ref}
      className="w-full  flex flex-col justify-center"
    >
      <div className="flex justify-center">
        <h1 className="sm:text-[50px] text-[30px] mt-5 mb-5">Skills</h1>
      </div>

      <div className="sm:ml-[10%] sm:mr-[10%] mr-[5%] ml-[5%]">
        <div className="grid sm:mb-0 mb-5 xs:grid-cols-4 sm:grid-cols-5 gap-[10px] grid-cols-3">
          {skillsImages.slice(0, numToShow).map((skills, index) => (
            <div
              className={`${styles.skillsImgDiv} card border border-dashed border-[#85858548] p-[20px] sm:p-[42px] rounded-[5px]`}
              key={index}
            >
              <img src={skills.skillsImg} alt={skills.id} />
            </div>
          ))}
        </div>
        {skillsImages.length > 6 && (
          <div className="flex justify-center">
            <div className="flex lg:mb-[20px] mb-[5px] lg:flex-row sm:flex-row flex-col sm:justify-start ">
              <button
                onClick={() => setShowMore((prev) => !prev)}
                className={`${styles.normalBtn} mt-4 flex-shrink-0`}
              >
                {showMore ? "View Less" : "View More"}
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Skills;
