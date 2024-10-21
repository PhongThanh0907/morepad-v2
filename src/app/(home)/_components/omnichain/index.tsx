"use client";

import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import PlusIcon from "@/icons/PlusIcon";

const Index = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const yCirle = useTransform(
    scrollYProgress,
    [0.3, 0.8, 1],
    ["-35%", "-50%", "-80%"]
  );
  const opacityCircle = useTransform(
    scrollYProgress,
    [0.28, 0.8, 1],
    [0, 1, 0]
  );
  const boxShadow = useTransform(
    scrollYProgress,
    [0.1, 0.8],
    [
      "0px 0px 0px rgba(149, 48, 251, 0.2), 0px 0px 0px rgba(149, 48, 251, 0.4)",
      "0px 0px 90px rgba(149, 48, 251, 0.4), 0px 0px 140px rgba(149, 48, 251, 0.6)",
    ]
  );

  const yItem1 = useTransform(scrollYProgress, [0.4, 1], ["0%", "-500%"]);
  const opacityItem1 = useTransform(
    scrollYProgress,
    [0.45, 0.6, 0.8],
    [0, 1, 0]
  );

  const yItem2 = useTransform(scrollYProgress, [0.6, 1], ["0%", "-400%"]);
  const opacityItem2 = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 0]);

  return (
    <div className="pt-28">
      <div
        style={{
          background: "var(--gradient-01)",
        }}
        className="bg-[var(--gradient-01)] mb-10"
      >
        <p className="text-end width-screen uppercase text-[72px] py-2">
          Omnichain Standard
        </p>
      </div>

      <div
        className="h-[200vh] relative hidden lg:block width-screen"
        ref={targetRef}
      >
        <div className="h-screen sticky top-0">
          <motion.div
            style={{
              opacity: opacityCircle,
              y: yCirle,
              boxShadow,
            }}
            className="absolute top-1/2 left-20 transform -translate-y-1/2 h-[488px] w-[488px] rounded-full flex-center-row"
          >
            <Image src="/iconmorepad.png" alt="icon" width={365} height={178} />
          </motion.div>

          <motion.div
            style={{
              opacity: opacityItem1,
              y: yItem1,
            }}
            className="w-[423px] space-y-4 absolute right-20 bottom-0"
          >
            <PlusIcon />
            <p className="text-[24px] leading-[130%] uppercase pt-2">
              Tokenization
            </p>
            <p className="text-[var(--gray)] leading-[130%]">
              Converting traditional and digital assets into blockchain-based
              tokens for easier transfer and ownership representation.
            </p>
          </motion.div>

          <motion.div
            style={{
              opacity: opacityItem2,
              y: yItem2,
            }}
            className="w-[423px] space-y-4 absolute right-20 bottom-0"
          >
            <PlusIcon />
            <p className="text-[24px] leading-[130%] uppercase pt-2">
              Fractionalization
            </p>
            <p className="text-[var(--gray)] leading-[130%]">
              Allowing the sharing of ownership rights in assets, making
              investment opportunities more accessible.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
