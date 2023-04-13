import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <p className="text-[10px] ">
        © Copyright {currentYear}. Made by Mitr Joshi.
      </p>
    </div>
  );
};

export default Copyright;
