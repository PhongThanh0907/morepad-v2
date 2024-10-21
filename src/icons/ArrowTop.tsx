import React from "react";

import { cn } from "@/libs/utils";
import { IconType } from "@/types/iconType";

const ArrowTop: React.FC<IconType> = ({
  onClick,
  height,
  width,
  className,
}) => {
  return (
    <svg
      onClick={onClick}
      className={cn("cursor-pointer", className)}
      width={width || 16}
      height={height || 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.63672 14.3608L14.3647 1.63281M14.3647 1.63281H4.46472M14.3647 1.63281V11.5328"
        stroke="#AF5EFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowTop;
