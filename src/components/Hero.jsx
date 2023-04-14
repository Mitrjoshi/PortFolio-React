import styles from "../style";
import { close, menu } from "../assets";
import { Link } from "react-router-dom";
import { resume } from "../assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = resume;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/jpeg");
      const link = document.createElement("a");
      link.href = dataURL;
      link.setAttribute("download", "resume.jpg");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
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
      className="w-full flex flex-col justify-center"
    >
      <div className="flex justify-center">
        <h1 className="sm:text-[50px] text-[30px] mb-5">About</h1>
      </div>
      <div className="p-1 borderAnimation md:p-0 flex lg:flex-row flex-col justify-center sm:ml-[10%] sm:mr-[10%] mr-[5%] ml-[5%] ">
        <div className="lg:m-[42px] m-[20px]">
          <h1 className="sm:text-[40px] text-[20px]">i'm a full stack</h1>
          <h1 className="text-[#53b962] sm:text-[80px] text-[40px]">
            web developer
          </h1>
        </div>
        <div className="flex flex-col pr-4">
          <div className="lg:m-[42px] m-[20px] mt-0">
            <p className={`${styles.paragraph}`}>
              Born in 2003 in Mumbai, India
            </p>{" "}
            <p className={`${styles.paragraph}`}>
              As a full stack web developer, I have a passion for designing and
              developing web applications that are intuitive, user-friendly, and
              visually appealing.
            </p>{" "}
            <p className={`${styles.paragraph}`}>
              I have experience working on various web development projects that
              showcase my skills and creativity, and I am dedicated to
              delivering high-quality solutions that meet the needs of my
              clients.
            </p>
          </div>
          <div
            className="flex lg:mb-[20px] mb-[5px] lg:flex-row sm:flex-row flex-col
          sm:justify-center "
          >
            <button
              onClick={() => (window.location = "mailto:mitrjoshi26@gmail.com")}
              className="sm:m-4, mt-0 mr-0 m-4 sm:h-16 lg:w-full  h-12  border-1 hover:bg-none bg-gradient-to-r from-veryLightBlueFirst via-veryLightBlueFirst  to-ultramarineBlueSecond lg:ml-[42px] rounded-[5px] hover:border-1 border hover:border-[#3d70ff] border-[#3d70ff] sm:mr-2 sm:w-full font-bold sm:text-[25px] text-[16px]"
            >
              Work with me
            </button>{" "}
            <button
              onClick={handleDownload}
              className="sm:m-4, mt-0 mr-0 m-4 sm:h-16 lg:w-full  h-12  border-1 hover:bg-none bg-gradient-to-r from-veryLightBlueFirst via-veryLightBlueFirst  to-ultramarineBlueSecond  rounded-[5px] hover:border-1 border hover:border-[#3d70ff] border-[#3d70ff] sm:mr-2 sm:w-full font-bold sm:text-[25px] text-[16px]"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
