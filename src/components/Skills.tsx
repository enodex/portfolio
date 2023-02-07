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
  <p
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-speed="1"
        className="description text-lg text-left my-[20px]"
      >
Active and monitoring
      </p>
            <h2 className="text-3xl">Provide tools</h2>
            <p className="text-[20px] text-left my-3">
              presents snapshot , statsync , relayer and guide
            </p>
      <span>Endpoints</span>
      <span>IBC Relayers</span>
      <span>Inter-chain Explorer</span>
    </div>
  );
};

export default Skills;
