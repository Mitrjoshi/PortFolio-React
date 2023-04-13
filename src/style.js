const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "mb-4 sm:text-[20px] lg:mt-0 lg:mb-0 text-[15px] text-[#9f9f9f]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  image: "w-full sm:mt-4 rounded-xl",
  hr: "ml-4 mr-4 border-[#15275a]",
  techList: "text-[#9f9f9f] sm:text-[20px] text-[15px]",
  normalBtn:
    "hover:bg-none hover:border-1 hover:bg-[#3d70ff] border border-1 border-[#3d70ff] h-[40px] w-[120px] font-bold text-[14px] lg:mt-[42px] rounded-[5px] mb-0  flex justify-center items-center",
  githubBtn:
    "hover:bg-none hover:border-1 hover:bg-[#3d70ff] border border-1 border-[#3d70ff] h-[40px] w-[120px] font-bold  text-[14px] lg:mt-[42px] rounded-[5px] mb-0  flex justify-center items-center",
  skillsImgDiv: "grid  justify-center",
  footerImg: "w-[25px] sm:w-[30px]",
  sendBtn:
    "w-[100px] h-[40px] rounded-[5px] bg-[#060b19] outline-none cursor-pointer text-[1em] font-semibold",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
