import SkillItem from "@/components/atoms/SkillItem";
import React from "react";
import {
  Css,
  Github,
  Html,
  Javascript,
  Laravel,
  Nextjs,
  ReactNative,
  Tailwind,
} from "../../../../public/assets";

const SkillGroup = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 pt-7 md:hidden ">
      <SkillItem imgSkill={Javascript} title="javascript" />
      <SkillItem imgSkill={ReactNative} title="React Native" />
      <SkillItem imgSkill={Nextjs} title="Next Js" />
      <SkillItem imgSkill={Tailwind} title="Tailwinds" />
      <SkillItem imgSkill={Html} title="HTML" />
      <SkillItem imgSkill={Css} title="CSS" />
      <SkillItem imgSkill={Github} title="Github" />
      <SkillItem imgSkill={Laravel} title="LARAVEL" />
    </div>
  );
};

export default SkillGroup;
