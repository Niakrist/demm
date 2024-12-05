import React from "react";

const PresenceYes = ({ className }) => {
  return (
    <svg
      className={className}
      width="0"
      height="0"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect y="0.5" width="16" height="16" rx="8" fill="currentColor" />
      <path
        d="M5 8L7.16073 10.3408C7.23992 10.4266 7.37546 10.4266 7.45465 10.3408L11 6.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PresenceYes;
