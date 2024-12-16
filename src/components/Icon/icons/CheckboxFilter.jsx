import React from "react";

const CheckboxFilter = ({ className }) => {
  return (
    <svg
      className={className}
      width="0"
      height="0"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="0.5"
        y="0.5"
        width="13"
        height="13"
        rx="1.5"
        stroke="currentColor"
      />
      <path
        d="M4 6.5L6.16073 8.84079C6.23992 8.92658 6.37546 8.92658 6.45465 8.84079L10 5"
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CheckboxFilter;
