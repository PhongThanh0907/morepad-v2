import ETH from "@/icons/ETH";
import Image from "next/image";
import React from "react";

const Index = () => {
  const chains = [
    "",
    "/chains/BnBChain.png",
    "/chains/Arbitrum.png",
    "/chains/Optimism.png",
    "/chains/Polygon.png",
    "/chains/Bitlayer.png",
    "/chains/Scroll.png",
    "/chains/Mantle.png",
    "/chains/Taiko.png",
  ];
  return (
    <div className="relative mb-10 mt-24">
      <p className="opacity-50 text-base text-center absolute inset-x-0 -top-12">
        SUPPORTED CHAINS
      </p>
      <div className="animate-horizontal-scroll flex items-center w-max">
        {chains.map((chain, index) => (
          <div
            style={{
              border: "1px dashed rgba(255, 255, 255, 0.12)",
            }}
            className="h-[190px] w-[190px] flex-center-row mx-2"
            key={index}
          >
            {index === 0 ? (
              <ETH />
            ) : (
              <Image
                src={chain}
                alt="chain"
                height={44}
                width={156}
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center w-max">
        {chains.map((chain, index) => (
          <div
            style={{
              border: "1px dashed rgba(255, 255, 255, 0.12)",
            }}
            className="h-[190px] w-[190px] flex-center-row mx-2"
            key={index}
          >
            {index === 0 ? (
              <ETH />
            ) : (
              <Image
                src={chain}
                alt="chain"
                height={44}
                width={156}
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
