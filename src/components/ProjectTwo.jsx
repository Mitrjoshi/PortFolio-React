import React from "react";
import styles from "../style";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import { bankHomepage, depositPage, paymentPage, stocksPage } from "../assets";

function ProjectOne() {
  return (
    <div className="w-full flex flex-col justify-center ">
      <div className=" justify-center sm:ml-[10%] sm:mr-[10%] mr-[5%] ml-[5%]">
        <div className="lg:m-[42px]  mt-0 flex justify-center items-center m-[20px] ">
          <h1 className="sm:text-[35px]  lg:mt-0 text-[25px] break-words">
            PORTFOLIO WEBAPP
          </h1>
        </div>

        <div className="flex flex-col lg:m-[42px] m-[20px] ">
          <div>
            <p className={`${styles.paragraph}`}>
              In the ever-evolving digital landscape, it is crucial to
              prioritize performance optimization for web applications. This not
              only enhances user experience but also ensures seamless
              integration with APIs and compatibility across different web
              browsers. With this in mind, I have gone the extra mile to
              emphasize performance optimization for this web app.
            </p>
            <br className="hidden sm:flex" />
            <p className={`${styles.paragraph}`}>
              In addition to ensuring compatibility across web browsers, I have
              leveraged modern technologies like React and Material UI to
              enhance the overall user experience. The portfolio boasts of a
              visually appealing and interactive design, thanks to the efficient
              utilization of these technologies. The responsive design ensures
              that the portfolio looks great on all devices, be it desktops,
              laptops, tablets, or smartphones.
            </p>
            <br className="hidden sm:flex" />
            <p className={`${styles.paragraph}`}>
              The use of React and Material UI has also made the portfolio
              highly customizable and scalable. The modular architecture of
              React allows for easy integration of new features and
              functionalities, while Material UI provides an extensive library
              of pre-built components, saving development time and ensuring
              consistency in design.
            </p>
          </div>

          <div className=" sm:mt-[20px] mb-[10px] ">
            <h1 className="sm:text-[35px] text-[25px] break-words">
              {" "}
              Challenges Faced:
            </h1>
            <p className={`${styles.paragraph}`}>
              One of the most significant challenges I faced while developing my
              web application portfolio was managing the navigation of the app.
              Navigation is a critical aspect of any web application, as it
              affects the user experience and the overall usability of the
              application. After exploring several options, I decided to use
              React Router DOM to solve this issue.
            </p>
            <br className="hidden sm:flex" />
            <p className={`${styles.paragraph}`}>
              React Router DOM is a widely used routing library for React
              applications, and it provides a powerful mechanism for managing
              the navigation of single-page applications. Using React Router
              DOM, I was able to define the routes for different components of
              my portfolio, including the home page, about me page, and project
              pages. The library allowed me to handle the navigation between
              these components effectively, and it made the application more
              organized and easy to navigate.
            </p>
            <br className="hidden sm:flex" />
            <p className={`${styles.paragraph}`}>
              By utilizing React Router DOM, I was able to provide a seamless
              user experience for my portfolio web application. Users can easily
              navigate through different components of the app, and the
              application's structure and organization become more apparent.
              This library has played a crucial role in enhancing the overall
              usability and user experience of my portfolio web app, and I
              highly recommend it for any developer who is facing similar
              navigation challenges.
            </p>
          </div>

          <div className=" sm:mt-[20px] mb-[10px] ">
            <h1 className="sm:text-[35px] text-[25px] break-words">
              Technology used:
            </h1>
            <ul className="">
              <li className={`${styles.techList}`}>React</li>
              <li className={`${styles.techList}`}>Vite</li>
              <li className={`${styles.techList}`}>Tailwind CSS</li>
              <li className={`${styles.techList}`}>HTML 5</li>
              <li className={`${styles.techList}`}>CSS 3</li>
            </ul>
          </div>

          <div className="flex justify-end">
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
