import React from "react";
import styles from "../style";
import index from "../index.css";
import {
  Navbar,
  Footer,
  Hero,
  Projects,
  Skills,
  ScrollToTop,
} from "../components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  return (
    <div>
      <div
        className={`bg-gradient-to-br 
      from-chineseBlack to-maastrichtBlue font-montserrat text-aliceblue w-full overflow-hidden`}
      >
        <div className="bg-gradient-to-br z-10 mt-[80px] from-chineseBlack to-maastrichtBlue">
          <div className={`  ${styles.flexCenter} flex-col`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>

          <div className={`  ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Projects />
              <Skills />
            </div>
          </div>
          <div
            className={`bg-gradient-to-r from-veryLightBlueFirst via-veryLightBlueFirst  to-ultramarineBlueSecond rounded-t-[30px]  ms:rounded-t-[50px] ${
              (styles.paddingX, styles.flexCenter)
            } sm:mt-16 mt-6`}
          >
            <div className={`sm:p-[42px] p-[20px] ${styles.boxWidth}`}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
