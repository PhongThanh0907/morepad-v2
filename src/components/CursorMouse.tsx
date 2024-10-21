"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorMouse: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-[var(--purple)] shadow-2xl rounded-full pointer-events-none z-50"
      variants={cursorVariants}
      animate="default"
    />
  );
};

export default CursorMouse;
