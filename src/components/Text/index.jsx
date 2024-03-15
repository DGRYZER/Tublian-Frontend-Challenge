import React from "react";

const sizes = {
  xs: "text-[8px] font-normal",
  lg: "text-base font-normal",
  s: "text-xs font-medium",
  "2xl": "text-2xl font-normal",
  "3xl": "text-[40px] font-medium",
  xl: "text-xl font-normal",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700 font-aeonik ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
