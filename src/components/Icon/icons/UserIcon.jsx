import React from "react";

const UserIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="0"
      height="0"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.3346 19.25V17.4167C18.3346 16.4442 17.9483 15.5116 17.2607 14.8239C16.5731 14.1363 15.6404 13.75 14.668 13.75H7.33464C6.36217 13.75 5.42954 14.1363 4.74191 14.8239C4.05428 15.5116 3.66797 16.4442 3.66797 17.4167V19.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9987 10.0833C13.0237 10.0833 14.6654 8.44171 14.6654 6.41667C14.6654 4.39162 13.0237 2.75 10.9987 2.75C8.97365 2.75 7.33203 4.39162 7.33203 6.41667C7.33203 8.44171 8.97365 10.0833 10.9987 10.0833Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserIcon;
