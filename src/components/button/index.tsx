import { cn } from "@/libs/utils";
import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  return (
    <button
      style={style}
      className={cn(
        "px-6 py-3 rounded-sm flex-center gap-1 backdrop-blur-md bg-[var(--purple)]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
