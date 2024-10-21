"use client";

import ArrowTop from "@/icons/ArrowTop";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const Index = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const yItem1 = useTransform(scrollYProgress, [0.15, 0.3], ["0px", "-40px"]);
  const opacityItem1 = useTransform(scrollYProgress, [0.15, 0.3], [1, 0]);

  const yItem2 = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.55, 0.7],
    ["50%", "46%", "46%", "41%"]
  );
  const opacityItem2 = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.55, 0.7],
    [0, 1, 1, 0]
  );

  const yItem3 = useTransform(
    scrollYProgress,
    [0.6, 0.75, 0.9, 1],
    ["50%", "46%", "46%", "46%"]
  );
  const opacityItem3 = useTransform(
    scrollYProgress,
    [0.6, 0.75, 0.9, 1],
    [0, 1, 1, 1]
  );

  return (
    <div className="h-[300vh] relative hidden lg:block" ref={targetRef}>
      <div className="h-screen sticky top-0 overflow-hidden">
        <div className="width-screen ">
          <h4 className="text-[58px] uppercase pt-28">MOREPad Ecosystem</h4>

          <motion.div
            style={{
              borderBottom: "1px dash rgba(255, 255, 255, 0.2)",
              y: yItem1,
              opacity: opacityItem1,
            }}
            className="absolute top-[40%] transform -translate-y-1/2 w-[391px] flex-between h-[88px] border-b border-dashed border-[#333333]"
          >
            <span className="text-[20px] ">Comming Soon1</span>
            <ArrowTop />
          </motion.div>

          <motion.div
            style={{
              borderBottom: "1px dash rgba(255, 255, 255, 0.2)",
              top: yItem2,
              opacity: opacityItem2,
            }}
            className="absolute transform -translate-y-1/2 w-[391px] flex-between h-[88px] border-b border-dashed border-[#333333]"
          >
            <span className="text-[20px] ">Comming Soon2</span>
            <ArrowTop />
          </motion.div>

          <motion.div
            style={{
              borderBottom: "1px dash rgba(255, 255, 255, 0.2)",
              top: yItem3,
              opacity: opacityItem3,
            }}
            className="absolute transform -translate-y-1/2 w-[391px] flex-between h-[88px] border-b border-dashed border-[#333333]"
          >
            <span className="text-[20px] ">Comming Soon3</span>
            <ArrowTop />
          </motion.div>

          <div className="absolute top-[58%] right-[150px] transform -translate-y-1/2">
            <Image src="/iconmorepad.png" alt="icon" width={609} height={296} />
            <div
              style={{
                filter: "blur(150px)",
              }}
              className="h-[268px] w-[268px] bg-[#AF5FFF] absolute top-0 right-[180px]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
