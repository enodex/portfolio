import { FC } from "react";
import { allDataType } from "../shared/types";

interface SkillsProps {
  skills: allDataType["skills"];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="-1"
        className="text-center text-3xl lg:text-4xl"
      >
        Enodex Service
      </h1>
      <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-center my-[30px]"
      >
Enodex fully contribute in network and community.
      </p>
  <p className="text-[20px] text-left my-3">Active Monitoring 24/7</p>
   <p className="text-[20px] text-left my-3">Provide tools</p>   
    <p className="text-[20px] text-left my-3">Endpoint</p> 
      <p className="text-[20px] text-left my-3">IBC Relayer</p> 
      <span>Inter-chain Explorer</span>
    </div>
  );
};

export default Skills;
