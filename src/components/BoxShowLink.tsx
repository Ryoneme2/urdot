import { Card, Text, useTheme } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

type Props = {
  base: string;
  shorted: string;
  clickedNum: number;
};

const BoxShowLink = ({ base, shorted, clickedNum }: Props) => {
  const { isDark } = useTheme();
  return (
    <div>
      <Card isHoverable variant="bordered" css={{ maxWidth: "21.875rem" }}>
        <Card.Body>
          <div className="flex flex-col items-center justify-center">
            <Text className="max-w-[18.75rem] truncate">{shorted}</Text>
            <div className="my-2">
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
            <Text className="w-full truncate text-center">
              <Link href={base}>{base}</Link>
            </Text>
          </div>
        </Card.Body>
        <Card.Footer>
          <div>
            <p className="truncate text-gray-500">
              used {clickedNum} time{clickedNum < 1 ? "" : "s"}
            </p>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default BoxShowLink;
