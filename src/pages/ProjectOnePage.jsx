import React from "react";
import styles from "../style";
import {
  Navbar,
  Footer,
  Hero,
  Projects,
  Skills,
  ScrollToTop,
  ProjectOne,
} from "../components";
import { Link } from "react-router-dom";

const ProjectOnePage = () => {
  return (
    <div className="bg-gradient-to-br from-chineseBlack to-maastrichtBlue font-montserrat text-aliceblue w-full overflow-hidden">
      <div className={` mt-[80px] ${styles.flexStart}`}>
        <div
          className={`md:pr-[42px] pt-0 pl-0 pb-0 lg:mb-[42px] mb-[20px] ${styles.boxWidth}`}
        >
          <ProjectOne />
        </div>
      </div>
    </div>
  );
};

export default ProjectOnePage;
