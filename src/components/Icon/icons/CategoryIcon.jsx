import React from "react";

const CategoryIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="0"
      height="0"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <line
        x1="0.75"
        y1="1.25"
        x2="11.25"
        y2="1.25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="0.75"
        y1="5.25"
        x2="11.25"
        y2="5.25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="0.75"
        y1="9.25"
        x2="11.25"
        y2="9.25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CategoryIcon;
