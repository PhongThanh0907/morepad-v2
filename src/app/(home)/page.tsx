import SmoothScroll from "@/components/SmoothScroll";
import Banner from "./_components/banner";
import Chains from "./_components/chains";
import ViewCode from "./_components/viewcode";

export default function Home() {
  return (
    <SmoothScroll>
      <Banner />
      <Chains />
      <ViewCode />
    </SmoothScroll>
  );
}
