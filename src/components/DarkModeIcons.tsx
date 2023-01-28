import React from "react";

type Props = {
  isDark: boolean;
  onClick?: () => void;
};

const DarkModeIcon = ({ isDark, onClick }: Props) => {
  return (
    <>
      <button onClick={onClick}>
        {!isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brightness-down"
            width={36}
            height={36}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx={12} cy={12} r={3} />
            <line x1={12} y1={5} x2={12} y2="5.01" />
            <line x1={17} y1={7} x2={17} y2="7.01" />
            <line x1={19} y1={12} x2={19} y2="12.01" />
            <line x1={17} y1={17} x2={17} y2="17.01" />
            <line x1={12} y1={19} x2={12} y2="19.01" />
            <line x1={7} y1={17} x2={7} y2="17.01" />
            <line x1={5} y1={12} x2={5} y2="12.01" />
            <line x1={7} y1={7} x2={7} y2="7.01" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-moon-stars"
            width={33}
            height={33}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#eeeeee"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
            <path d="M19 11h2m-1 -1v2" />
          </svg>
        )}
      </button>
    </>
  );
};

export default DarkModeIcon;
