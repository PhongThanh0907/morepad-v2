import Button from "@/components/button";
import Glow from "@/components/glow";
import GridColumn from "@/icons/GridColumn";
import LayerZero from "@/icons/LayerZero";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-48 width-screen pb-20 pt-36">
        <div className="relative">
          <p className="text-[58px]">{`</>`}</p>
          <p className="text-[58px] flex items-center gap-4 uppercase">
            Build on <LayerZero className="relative " />
          </p>
          <p className="space-mono-regular text-[var(--gray)] tracking-tighter leading-[150%] text-[15px] pt-4">
            Integrating LayerZero infrastructure to provide an Omnichain
            Standard, featuring capabilities such as tokenization,
            fractionalization, interoperability, management, DeFi integration,
            and liquidity for assets related to the NFT ecosystem (traditional
            assets, art, games, and more).
          </p>
          <div className="absolute bottom-0">
            <Button className="bg-transparent border-white border uppercase px-8">
              Learn more
            </Button>
          </div>
        </div>
        <Glow
          className="h-[538px] relative  w-[487px] glow-animation  rounded overflow-hidden bg-gray-200/20 group"
          //   sizeLight={200}
        >
          <div className="absolute inset-0.5 z-10">
            <Image
              src="/code.png"
              width={487}
              height={538}
              alt="img-code"
              className="h-full object-cover w-full"
            />
          </div>
        </Glow>
      </div>

      <GridColumn className="w-screen" />
    </div>
  );
};

export default Index;
