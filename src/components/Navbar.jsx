import { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";
import styles from "../style";
import { menu, close } from "../assets";
import { rightarrow } from "../assets";
import { footerLinks } from "../constants";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import index from "../index.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      <div
        className={`bg-transparent backdrop-blur-sm fixed w-full top-0 ${styles.paddingX} ${styles.flexCenter}  font-montserrat `}
      >
        <div className={` ${styles.boxWidth}`}>
          <nav className={` w-full flex justify-between h-[80px] py-1`}>
            <div>
              <Link
                to="/"
                onClick={scrollToTop}
                className="text-[50px] text-[aliceblue]"
              >
                Mitr Joshi
              </Link>
            </div>

            <div className="items-center flex justify-center ">
              <ul className="list-none p-0 hidden ms:flex  justify-end items-center flex-1">
                {footerLinks.map((footer, index) => (
                  <a
                    key={footer.id}
                    className={`text-[aliceblue] flex  justify-center items-center cursor-pointer text-[14px]  font-extrabold  rounded-[5px] p-2`}
                    href={`${footer.link}`}
                  >
                    <li className="border-4 w-[50px] rounded-md border-t-0 border-l-0 border-r-0 p-1 border-ultramarineBlueSecond hover:border-ultramarineBlueSecond justify-center flex hover-border">
                      <img
                        className={`${styles.footerImg}`}
                        src={footer.img}
                        alt={footer.id}
                      />
                    </li>
                  </a>
                ))}
              </ul>
            </div>

            <div className="ms:hidden flex  flex-1 justify-end items-center">
              <img
                src={toggle ? close : menu}
                className="object-contain"
                onClick={() => setToggle((prev) => !prev)}
              />

              <div>
                <ul
                  className={`${
                    toggle
                      ? "flex list-none absolute w-[200px] top-[80px] right-[25px] sm:right-[60px] sidebar flex-col  justify-center items-center flex-1 "
                      : "hidden"
                  } `}
                >
                  {footerLinks.map((footer, index) => (
                    <a
                      key={footer.id}
                      className={`text-[aliceblue] w-full hover:cursor-pointer  p-3 font-bold cursor-pointer border bg-[#181f32] border-[#3f454b]  h-[50px] block justify-center items-center ${
                        index === 0 ? "rounded-t-[12px]" : "rounded-t-[0px]"
                      } ${
                        index === footerLinks.length - 1
                          ? "rounded-b-[12px]"
                          : "rounded-b-[0px]"
                      }`}
                      href={`${footer.link}`}
                    >
                      <li className="flex h-auto items-center justify-between ">
                        <div className="flex flex-row items-center ">
                          <img
                            className={`${styles.footerImg}`}
                            src={footer.img}
                            alt={footer.id}
                          />
                          <h1 className="ml-5">{footer.title}</h1>
                        </div>
                        <div>
                          <img src={rightarrow} alt="rightarrow" />
                        </div>
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Navbar;
