import React from "react";
import Writer from "./Writer";
import Button from "@/components/button";

const Index = () => {
  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(/Bg-Hero.png)",
      }}
    >
      <div className="relative width-screen h-full">
        <div className="absolute top-[53%] left-0 w-2/3">
          <div className="h-56">
            <Writer />
          </div>
          <Button>START BUILDING</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
