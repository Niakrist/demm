import React from "react";

const PresenceNo = ({ className }) => {
  return (
    <svg
      className={className}
      width="0"
      height="0"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect y="0.5" width="14" height="14" rx="7" fill="#E4E5E9" />
      <path d="M5 5.5L9 9.5" stroke="#797D91" strokeLinecap="round" />
      <path d="M5 9.5L9 5.5" stroke="#797D91" strokeLinecap="round" />
    </svg>
  );
};

export default PresenceNo;
