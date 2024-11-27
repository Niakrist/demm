import React from "react";

const IconArrow = ({ className }) => {
  return (
    <svg
      className={className}
      width="0"
      height="0"
      viewBox="0 0 5 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1L3.85858 3.85858C3.93668 3.93668 3.93668 4.06332 3.85858 4.14142L1 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconArrow;
