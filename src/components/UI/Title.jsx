import React from "react";

const Title = ({ children, subtitle, align = "text-left" }) => {
  return (
    <div className={align}>
      <h3 className="text-primary">{subtitle}</h3>
      <h2 className="sm:text-3xl text-2xl font-bold text-darkContent mt-3">{children}</h2>
    </div>
  );
};

export default Title;
