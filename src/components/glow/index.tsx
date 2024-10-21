import { cn } from "@/libs/utils";
import React from "react";

interface GlowProps {
  children: React.ReactNode;
  className?: string;
  classNameLight?: string;
  sizeLight?: number;
}

const Glow: React.FC<GlowProps> = ({ children, className, sizeLight }) => {
  return (
    <div className={(cn(""), className)}>
      {children}
      <div
        style={{
          height: sizeLight,
          width: sizeLight,
        }}
        className="light animate-moveLight"
      ></div>
      {/* <div
        style={{
          height: sizeLight,
          width: sizeLight,
        }}
        className="light-2 animate-moveLight2"
      ></div> */}
      <div
        style={{
          height: sizeLight,
          width: sizeLight,
        }}
        className="light-3 animate-moveLight3"
      ></div>
    </div>
  );
};

export default Glow;
