// https://github.com/delbaoliveira/website/blob/main/ui/challenge/TextSlider.tsx
import React from "react";

import { useInterval } from "react-use";

import clsx from "clsx";
import { useTheme } from "@nextui-org/react";

interface BigTextProps {
  slides: Array<string>;
}

export default function BigText({ slides }: BigTextProps) {
  const { isDark } = useTheme();

  const [currentSlide, setSlide] = React.useState(0);

  const totalSlides = slides.length;

  useInterval(() => {
    if (totalSlides - 1 === currentSlide) {
      setSlide(0);
    } else {
      setSlide(currentSlide + 1);
    }
  }, 2000);

  return (
    <div className="flex flex-col items-center text-4xl font-extrabold tracking-tight md:text-8xl">
      <div className="flex flex-col items-center">
        {slides.map((text, index) => {
          return (
            <span key={text} className="relative block text-center">
              <span
                className={clsx(
                  "absolute transition duration-1000",
                  currentSlide !== index
                    ? isDark
                      ? "text-white opacity-100"
                      : "opacity-100"
                    : "opacity-0"
                )}
                aria-hidden={true}
              >
                {text}
              </span>

              <span
                className={clsx(
                  "bg-gradient-to-r decoration-clone bg-clip-text text-transparent",
                  index === 0 ? "from-yellow-400 via-red-500 to-pink-500" : "",
                  index === 1 ? "from-green-400 to-blue-500" : "",
                  index === 2 ? "from-purple-400 via-pink-500 to-red-500" : ""
                )}
              >
                {text}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
