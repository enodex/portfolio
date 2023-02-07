import { FC } from "react";
import { BiChevronsDown } from "react-icons/bi";
import Canvas from "./Canvas";
import { m } from "framer-motion";

const Intro: FC = () => {
  return (
<div className="relative h-screen flex justify-center items-center flex-col gap-5">
      <Canvas />
 <m.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="text-5xl text-center z-[1] overflow-hidden"
      >
        {`Hi, I'm Enodex`}
      </m.p>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
      <m.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="text-3xl text-center z-[1] overflow-hidden"
      >
        {`Independent Staking PoS provider`}
      </m.p>

      <m.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#who"
        data-scroll-to
      >
        <BiChevronsDown className="animate-bounce" size={56} />
      </m.a>
    </div>
  );
};

export default Intro;
