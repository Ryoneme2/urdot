import { useTheme } from "@nextui-org/react";
import clsx from "clsx";
import React from "react";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = (props: Props) => {
  const { isDark } = useTheme();
  return (
    <input
      className={clsx(
        "focus:outline-non w-[90%] max-w-[530px] rounded-full  bg-opacity-25 py-3 px-4 text-lg transition-all duration-500 focus:h-14 focus:max-w-[600px]",
        isDark ? "bg-white text-white" : "bg-gray-400 text-gray-800"
      )}
      type="text"
      {...props}
    />
  );
};

export default Input;
