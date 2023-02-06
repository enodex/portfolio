import { FC, Fragment } from "react";

import { BiChevronsDown } from "react-icons/bi";
import Canvas from "./Canvas";
import { characters } from "../shared/contants";
import { m } from "framer-motion";
import "../shared/lol.css";

const Intro: FC = () => {
  return (
   
<div class="container">
    <div class="box">

        <div class="title">
            <span class="block"></span>
            <h1>Hi, I'm Enodex<span></span></h1>
        </div>

        <div class="role">
            <div class="block"></div>
            <p>Staking PoS Validator</p>
        </div>

    </div>
</div>
    </div>
     
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
