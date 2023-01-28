import { useTheme } from "@nextui-org/react";
import clsx from "clsx";
import React, { useState } from "react";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  righticon?: {
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  };
};

const Input = (props: Props) => {
  const { isDark } = useTheme();
  const [isFocusd, setIsFocused] = useState<boolean>(false);
  return (
    <div
      className={clsx(
        "sm:text-md flex w-[90%] max-w-[530px] items-center rounded-full bg-opacity-25 py-2 px-3 text-sm transition-all duration-500 md:py-3 md:px-4 md:text-lg ",
        isDark ? "bg-white text-white" : "bg-gray-400 text-gray-800",
        isFocusd ? "h-12 max-w-[600px] outline-none md:h-14" : ""
      )}
    >
      <input
        className="h-full w-full bg-transparent outline-none"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="text"
        {...props}
      />
      {props.righticon && (
        <div
          className="hover:shodow ml-2 flex cursor-pointer items-center justify-center"
          onClick={props.righticon.onClick}
        >
          {props.righticon.children}
        </div>
      )}
    </div>
  );
};

export default Input;
