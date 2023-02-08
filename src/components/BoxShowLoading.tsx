import { Card } from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";
import React from "react";

const BoxShowLoading = () => {
  const { isDark } = useTheme();
  return (
    <div className="h-[11.25rem] w-[21rem] animate-pulse rounded-xl bg-[#16181A]">
      <Card.Body>
        <div className="flex justify-center">
          <div className="h-5 w-3/4 rounded-full bg-slate-700"></div>
        </div>
        <div className="my-2 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-down"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={isDark ? "#ffffff" : "#000000"}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1={12} y1={5} x2={12} y2={19} />
            <line x1={18} y1={13} x2={12} y2={19} />
            <line x1={6} y1={13} x2={12} y2={19} />
          </svg>
        </div>
        <div className="h-5 rounded-full bg-slate-700"></div>
      </Card.Body>
      <Card.Footer>
        <div className="h-5 w-1/4 rounded-full bg-slate-700"></div>
      </Card.Footer>
    </div>
  );
};

export default BoxShowLoading;
