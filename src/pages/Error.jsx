import React from "react";
import styles from "../style";

const Error = () => {
  return (
    <div
      className={`${styles.boxWidth} ${styles.paddingX} bg-gradient-to-br   from-chineseBlack to-maastrichtBlue lg:mt-0  h-[100vh] flex justify-center items-center`}
    >
      <h1 className="text-[#3d70ff] text-[30px] break-words">
        Oops, something went wrong
      </h1>
    </div>
  );
};

export default Error;
