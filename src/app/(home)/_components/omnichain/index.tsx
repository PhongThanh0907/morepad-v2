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

  const opacityItem1 = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const bottomItem1 = useTransform(scrollYProgress, [0.1, 0.45], ["0%", "62%"]);

  const opacityItem2 = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const bottomItem2 = useTransform(
    scrollYProgress,
    [0.3, 0.45],
    ["-20%", "12%"]
  );

  const leftBackground = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    ["100%", "100%"]
  );

  const widthBackground = useTransform(
    scrollYProgress,
    [0.5, 0.8],
    ["0", "100vw"]
  );

  const opacityText = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const topText = useTransform(scrollYProgress, [0.6, 0.9], ["60%", "20%"]);

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

      <div className="h-[400vh] relative hidden lg:block" ref={targetRef}>
        <div className="h-screen sticky top-0 overflow-hidden">
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
                bottom: bottomItem1,
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
                bottom: bottomItem2,
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
                left: leftBackground,
                background:
                  "radial-gradient(93.76% 93.76% at 62.26% 16.98%, #E6E5E9 66.38%, #A65AF2 100%)",
                width: widthBackground,
              }}
              className="absolute h-screen w-screen"
            >
              <div className="h-full w-full grid grid-cols-3 relative">
                <motion.div
                  style={{
                    opacity: opacityText,
                    top: topText,
                  }}
                  className="absolute space-y-5 left-20"
                >
                  <span className="text-[var(--purple)] uppercase text-[32px]">
                    Develop with morepad
                  </span>
                  <p className="text-[#08010F] text-[42px] leading-[130%] w-[60%]">
                    MOREPad provides the necessary tools for easy building,
                    adjusting, and integrating of projects with Omnichain
                    Standard functions across 50+ blockchains/ecosystems.
                  </p>
                </motion.div>
                <div className="border-l border-r border-dashed border-[var(--purple)]" />
                <div className="border-r border-dashed border-[var(--purple)]" />
                <div className="border-r border-dashed border-[var(--purple)]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
