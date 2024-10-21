import React from "react";

import { cn } from "@/libs/utils";
import { IconType } from "@/types/iconType";

const GridColumn: React.FC<IconType> = ({ onClick, height, className }) => {
  return (
    <svg
      onClick={onClick}
      className={cn("cursor-pointer", className)}
      height={height || 235}
      viewBox="0 0 1440 235"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_156_10274)">
        <rect
          y="0.5"
          width="1440"
          height="0.783333"
          fill="white"
          fill-opacity="0.3"
        />
        <rect
          y="3.97656"
          width="1440"
          height="0.783333"
          fill="white"
          fill-opacity="0.3"
        />
        <rect
          y="8.53125"
          width="1440"
          height="0.783333"
          fill="white"
          fill-opacity="0.3"
        />
        <rect
          y="14.1641"
          width="1440"
          height="0.783333"
          fill="white"
          fill-opacity="0.3"
        />
        <rect
          y="21.9297"
          width="1440"
          height="0.783333"
          fill="white"
          fill-opacity="0.3"
        />
        <rect
          y="32.9141"
          width="1440"
          height="0.783333"
          fill="white"
          fill-opacity="0.3"
        />
        <rect
          y="47.6484"
          width="1440"
          height="0.783333"
          fill="white"
          fill-opacity="0.3"
        />
        <rect
          y="67.2109"
          width="1440"
          height="0.783333"
          fill="white"
          fill-opacity="0.3"
        />
        <rect
          y="93.1953"
          width="1440"
          height="0.783333"
          fill="white"
          fill-opacity="0.3"
        />
        <rect
          y="127.742"
          width="1440"
          height="0.783333"
          fill="white"
          fill-opacity="0.3"
        />
        <rect
          y="170.875"
          width="1440"
          height="0.783333"
          fill="white"
          fill-opacity="0.3"
        />
        <rect
          y="222.594"
          width="1440"
          height="0.783333"
          fill="white"
          fill-opacity="0.3"
        />
        <rect
          x="279.5"
          y="0.5"
          width="1"
          height="282"
          fill="white"
          fill-opacity="0.3"
        />
        <rect
          x="619.5"
          y="0.5"
          width="1"
          height="282"
          fill="white"
          fill-opacity="0.3"
        />
        <rect
          x="959.5"
          y="0.5"
          width="1"
          height="282"
          fill="white"
          fill-opacity="0.3"
        />
        <rect
          x="1299.5"
          y="0.5"
          width="1"
          height="282"
          fill="white"
          fill-opacity="0.3"
        />
      </g>
      <defs>
        <clipPath id="clip0_156_10274">
          <rect
            width="1440"
            height="282"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GridColumn;
