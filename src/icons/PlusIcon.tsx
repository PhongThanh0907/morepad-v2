import React from "react";

import { cn } from "@/libs/utils";
import { IconType } from "@/types/iconType";

const PlusIcon: React.FC<IconType> = ({
  onClick,
  height,
  width,
  className,
}) => {
  return (
    <svg
      onClick={onClick}
      className={cn("cursor-pointer", className)}
      width={width || 46}
      height={height || 42}
      viewBox="0 0 46 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="23.1699"
        y1="2.18558e-08"
        x2="23.1699"
        y2="19.8068"
        stroke="white"
        stroke-opacity="0.6"
      />
      <line
        x1="23.1699"
        y1="2.18558e-08"
        x2="23.1699"
        y2="19.8068"
        stroke="white"
        stroke-opacity="0.6"
      />
      <line
        x1="23.1699"
        y1="2.18558e-08"
        x2="23.1699"
        y2="19.8068"
        stroke="white"
        stroke-opacity="0.6"
      />
      <line
        x1="23.1699"
        y1="2.18558e-08"
        x2="23.1699"
        y2="19.8068"
        stroke="white"
        stroke-opacity="0.6"
      />
      <line
        x1="23.1699"
        y1="2.18558e-08"
        x2="23.1699"
        y2="19.8068"
        stroke="white"
        stroke-opacity="0.6"
      />
      <line
        x1="23.1699"
        y1="2.18558e-08"
        x2="23.1699"
        y2="19.8068"
        stroke="white"
        stroke-opacity="0.6"
      />
      <line
        x1="23.1699"
        y1="22.1953"
        x2="23.1699"
        y2="42.0021"
        stroke="white"
        stroke-opacity="0.6"
      />
      <line
        y1="20.5"
        x2="19.8068"
        y2="20.5"
        stroke="white"
        stroke-opacity="0.6"
      />
      <line
        x1="25.2949"
        y1="20.5"
        x2="45.1017"
        y2="20.5"
        stroke="white"
        stroke-opacity="0.6"
      />
    </svg>
  );
};

export default PlusIcon;
