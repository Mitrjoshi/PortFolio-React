import React from "react";
import styles from "../style";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { bankHomepage, depositPage, paymentPage, stocksPage } from "../assets";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ProjectOne() {
  return (
    <div className="w-full flex flex-col justify-center ">
      <div className=" justify-center  sm:ml-[10%] sm:mr-[10%] mr-[5%] ml-[5%]">
        <div
          className="lg:m-[42px] flex justify-center items-center m-[20px]
          mt-0"
        >
          <h1 className="sm:text-[35px]  text-[25px] break-words">
            BANKING WEBSITE
          </h1>
        </div>

        <div className="flex flex-col lg:m-[42px] m-[20px] ">
          <p className={`${styles.paragraph}`}>
            The primary objective of this project is to make financial
            management accessible to everyone, irrespective of their financial
            knowledge. The project comes with a range of features that make it
            easy for users to manage their finances effortlessly. Users can add,
            withdraw, and transfer funds with ease, as well as invest in stocks
            and mutual funds. The platform also has a transaction history tool
            that makes it easy for users to keep track of their financial
            activities.
          </p>
          <br className="hidden sm:flex" />
          <p className={`${styles.paragraph}`}>
            This project aims to revolutionize the way people manage their
            finances. It has been designed to provide an intuitive interface and
            user-friendly features that make financial management less complex
            for everyone. With its advanced features and user-friendly design,
            this project has the potential to become a valuable resource for
            anyone who wants to take control of their finances. Whether you're a
            novice or an expert in finance, this project is a must-have tool for
            managing your finances efficiently.
          </p>

          <div className=" sm:mt-[20px] mb-[10px] ">
            <h1 className="sm:text-[35px] text-[25px] break-words">
              Challenges Faced:
            </h1>

            <p className={`${styles.paragraph}`}>
              As a solo beginner developer, I faced some challenges while
              working on this project, particularly with navigating through
              different pages. The application consisted of around 25 HTML, JSP,
              and JSTL files for different pages, which made it challenging to
              keep track of everything.
            </p>
            <br className="hidden sm:flex" />
            <p className={`${styles.paragraph}`}>
              Despite the difficulties, I was able to overcome these challenges
              and successfully navigate through the various pages of the
              application. However, the experience left a sour taste in my mouth
              and made me realize that Java may not be my favorite programming
              language.
            </p>
            <br className="hidden sm:flex" />
            <p className={`${styles.paragraph}`}>
              Despite this, I gained valuable experience and knowledge through
              this project, particularly with regards to web development and
              Java. I also developed a deeper appreciation for the importance of
              organization and structure in web development projects.
            </p>
            <br className="hidden sm:flex" />
            <p className={`${styles.paragraph}`}>
              Overall, while the challenges may have been difficult, they
              provided an opportunity for growth and learning, and I am proud of
              the progress I was able to make as a solo beginner developer.
            </p>
          </div>

          <div className=" sm:mt-[20px] mb-[10px] ">
            <h1 className="sm:text-[35px] text-[25px] break-words">
              {" "}
              Technology used:
            </h1>

            <ul className="">
              <li className={`${styles.techList}`}>HTML 5</li>
              <li className={`${styles.techList}`}>CSS 3</li>
              <li className={`${styles.techList}`}>JavaScript</li>
              <li className={`${styles.techList}`}>Bootstrap</li>
              <li className={`${styles.techList}`}>Java</li>
              <li className={`${styles.techList}`}>Java Servlet</li>
              <li className={`${styles.techList}`}>JSP</li>
              <li className={`${styles.techList}`}>JSTL</li>
              <li className={`${styles.techList}`}>MySQL</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 grid-cols-1">
            <img
              src={bankHomepage}
              alt="bankHomepage"
              className={`${styles.image}`}
            />
            <img
              src={depositPage}
              alt="depositPage"
              className={`${styles.image}`}
            />

            <img
              src={paymentPage}
              alt="paymentPage"
              className={`${styles.image}`}
            />

            <img
              src={stocksPage}
              alt="stocksPage"
              className={`${styles.image}`}
            />
          </div>

          <div className="flex justify-end mt-10">
            <Link
              replace
              className="hover:bg-none hover:border-1 hover:bg-[#3d70ff] border border-1 border-[#3d70ff] h-[40px] w-[120px] font-bold text-[14px]  rounded-[5px] mb-0  flex justify-center items-center"
              to="https://github.com/Mitrjoshi?tab=repositories"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectOne;
