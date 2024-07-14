import React from "react";

const Button = ({ children, isPrimary = true }) => {
  return (
    <button
      className={` ${
        isPrimary ? "bg-primary" : "bg-[#ffffff33]"
      } text-white py-6 px-8 transition-colors border-2 border-transparent text-xl flex items-center justify-center gap-4 hover:border-white hover:bg-transparent hover:text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
