const CheckboxIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="0"
      height="0"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="13" height="13" rx="1.5" stroke="white" />
      <path
        d="M3 7.23077L6.33905 9.87265C6.42726 9.94245 6.55565 9.92579 6.62314 9.83581L11 4"
        stroke="white"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CheckboxIcon;
