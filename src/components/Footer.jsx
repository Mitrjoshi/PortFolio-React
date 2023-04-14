import styles from "../style";
import { close, menu } from "../assets";
import { Link } from "react-router-dom";
import { Form, Copyright } from "../components";
import { motion } from "framer-motion";

const Footer = () => {
  const dropIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <div className="flex w-full flex-col">
      <div className="grid grid-cols-1 smd:grid-cols-2">
        <div className="smd:ml-10 flex flex-col smd:items-start smd:justify-center  smd:w-full">
          <motion.div
            variants={dropIn}
            initial="initial"
            animate="animate"
            transition={{ opacity: { duration: 3 } }}
          >
            <h1 className="text-[30px] smd:text-[40px] flex smd:grid justify-center smd:items-center">
              coffee?
            </h1>
          </motion.div>
          <motion.div
            variants={dropIn}
            initial="initial"
            animate="animate"
            transition={{ opacity: { duration: 3, delay: 1 } }}
          >
            <p className="text-[18px] smd:items-center smd:text-[30px] flex smd:grid justify-center">
              mitrjoshi26@gmail.com
            </p>
          </motion.div>
        </div>
        <div className="smd:mr-10 smd:w-full p-2">
          <motion.div
            variants={dropIn}
            initial="initial"
            animate="animate"
            transition={{ opacity: { duration: 3, delay: 2 } }}
          >
            <Form />
          </motion.div>
        </div>
      </div>
      <div className="mt-[20px] flex justify-end sm:mt-[42px]">
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
