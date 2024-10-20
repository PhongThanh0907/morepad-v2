"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const Writer = () => {
  return (
    <div className="flex gap-3 text-4xl leading-[50px] font-semibold">
      <Typewriter
        options={{
          loop: true,
          delay: 50,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `Build Everything with <span style="color: #AF5EFF">Omnichain Standard</span>`
            )
            .pauseFor(1000)
            .deleteAll()
            .typeString(
              `Build <span style="color: #AF5EFF">ERC-404 v3.0</span> with NFT Ecosystem`
            )
            .pauseFor(1000)
            .start();
        }}
      />
    </div>
  );
};

export default Writer;
