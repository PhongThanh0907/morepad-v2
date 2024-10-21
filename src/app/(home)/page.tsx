import SmoothScroll from "@/components/SmoothScroll";
import Banner from "./_components/banner";
import Chains from "./_components/chains";
import ViewCode from "./_components/viewcode";
import Omnịchain from "./_components/omnichain";
import Ecosystem from "./_components/ecosystem";

export default function Home() {
  return (
    <SmoothScroll>
      <Banner />
      <Chains />
      <ViewCode />
      <Omnịchain />
      <Ecosystem />
      <div className="h-screen w-screen" />
    </SmoothScroll>
  );
}
