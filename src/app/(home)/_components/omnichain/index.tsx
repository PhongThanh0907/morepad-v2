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

  const x = useTransform(scrollYProgress, [0.5, 0.8], ["0%", "-100%"]);

  const yCirle = useTransform(scrollYProgress, [0.05, 0.3], ["-35%", "-50%"]);
  const opacityCircle = useTransform(scrollYProgress, [0.07, 0.45], [0, 1]);
  const boxShadow = useTransform(
    scrollYProgress,
    [0.03, 0.45],
    [
      "0px 0px 0px rgba(149, 48, 251, 0.2), 0px 0px 0px rgba(149, 48, 251, 0.4)",
      "0px 0px 90px rgba(149, 48, 251, 0.4), 0px 0px 140px rgba(149, 48, 251, 0.6)",
    ]
  );

  const yItem1 = useTransform(scrollYProgress, [0.1, 0.45], ["0%", "-250%"]);
  const opacityItem1 = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  const yItem2 = useTransform(scrollYProgress, [0.2, 0.45], ["150%", "-70%"]);
  const opacityItem2 = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);

  const xBackground = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    ["95%", "83.5%"]
  );
  //   const widthBackground = useTransform(
  //     scrollYProgress,
  //     [0.5, 1],
  //     ["100vw", "100vw"]
  //   );

  return (
    <div className="mt-28">
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
        className="h-[400vh] relative hidden lg:block width-screen"
        ref={targetRef}
      >
        <div className="h-screen sticky top-0">
          <motion.div
            className="h-screen"
            style={{
              x: x,
            }}
          >
            <motion.div
              style={{
                opacity: opacityCircle,
                y: yCirle,
                boxShadow,
              }}
              className="absolute top-1/2 left-20 transform -translate-y-1/2 h-[488px] w-[488px] rounded-full flex-center-row"
            >
              <Image
                src="/iconmorepad.png"
                alt="icon"
                width={365}
                height={178}
              />
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

            <motion.div
              style={{
                //   opacity: opacityItem1,
                x: xBackground,
              }}
              className="bg-red-400 h-screen"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
