import React from "react";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = (props: Props) => {
  return (
    <input
      className="w-[90%] max-w-[470px] rounded-full bg-white bg-opacity-25 py-3 px-4 text-lg text-white transition-all duration-500 focus:h-14 focus:max-w-[550px] focus:outline-none dark:bg-gray-400 dark:bg-opacity-20"
      type="text"
      {...props}
    />
  );
};

export default Input;
