import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { projectInfo } from "../constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
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
      id="projects"
      className="  w-full  flex flex-col justify-center"
    >
      <div className="flex justify-center">
        <h1 className="sm:text-[50px] text-[30px] mt-5 mb-5">Projects</h1>
      </div>

      <div className="borderAnimation justify-center sm:ml-[10%] sm:mr-[10%] mr-[5%] ml-[5%]">
        {projectInfo.map((project, index) => (
          <div key={project.projectNumber}>
            <div className="lg:m-[42px] m-[20px] ">
              <h1 className="text-[#3d70ff]  lg:mt-0 text-[30px] break-words">
                {project.projectNumber}
              </h1>

              <h1 className="sm:text-[25px]  lg:mt-0 text-[30px] break-words">
                {project.projectTitle}
              </h1>
            </div>
            <div className="flex flex-col lg:m-[42px] m-[20px] ">
              <p className={`${styles.paragraph}`}>{project.projectDesc}</p>

              <div className="flex lg:mb-[20px] mb-[5px] lg:flex-row sm:flex-row flex-col sm:justify-start ">
                <Link
                  className={`${styles.normalBtn} `}
                  to={project.projectBtn}
                >
                  <button>CASE STUDY</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="flex justify-end m-5">
          <button className="hover:border-1 hover:border-transparent border border-1 border-[#3d70ff] font-bold  h-[40px] w-[95px] text-[14px] rounded-[5px] hover:bg-gradient-to-r from-veryLightBlueFirst via-veryLightBlueFirst  to-ultramarineBlueSecond">
            See All
          </button>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Projects;
