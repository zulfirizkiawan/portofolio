import SkillItem from "@/components/atoms/SkillItem";
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
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { SkillGroup } from "@/components/molecules";

export default function Skill() {
  const [skills, setSkills] = useState(false);
  return (
    <div id="skill" className="w-full lg:h-screen p-2 px-10">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="py-4 uppercase text-xl tracking-widest text-[#035B81] ">
          Skills
        </p>
        <h2 className="py-4">Apa yang saya bisa lakukan</h2>
        <div className="w-[13%] bg-[#035B81] h-2" />
        <div className="relative overflow-x-hidden hidden md:flex">
          <div className="py-5 flex animate-marquee whitespace-nowrap">
            <SkillItem imgSkill={Javascript} title="javascript" />
            <SkillItem imgSkill={ReactNative} title="React Native" />
            <SkillItem imgSkill={Nextjs} title="Next Js" />
            <SkillItem imgSkill={Tailwind} title="Tailwinds" />
            <SkillItem imgSkill={Html} title="HTML" />
            <SkillItem imgSkill={Css} title="CSS" />
            <SkillItem imgSkill={Github} title="Github" />
            <SkillItem imgSkill={Laravel} title="LARAVEL" />
          </div>

          <div className="absolute flex top-0 py-5 animate-marquee2 whitespace-nowrap">
            <SkillItem imgSkill={Javascript} title="javascript" />
            <SkillItem imgSkill={ReactNative} title="React Native" />
            <SkillItem imgSkill={Nextjs} title="Next Js" />
            <SkillItem imgSkill={Tailwind} title="Tailwinds" />
            <SkillItem imgSkill={Html} title="HTML" />
            <SkillItem imgSkill={Css} title="CSS" />
            <SkillItem imgSkill={Github} title="Github" />
            <SkillItem imgSkill={Laravel} title="LARAVEL" />
          </div>
        </div>

        <div className="relative overflow-x-hidden hidden md:flex">
          <div className="py-5 flex animate-marquee3 whitespace-nowrap">
            <SkillItem imgSkill={Github} title="Github" />
            <SkillItem imgSkill={Laravel} title="LARAVEL" />
            <SkillItem imgSkill={Nextjs} title="Next Js" />
            <SkillItem imgSkill={Tailwind} title="Tailwinds" />
            <SkillItem imgSkill={Html} title="HTML" />
            <SkillItem imgSkill={Css} title="CSS" />
            <SkillItem imgSkill={Javascript} title="javascript" />
            <SkillItem imgSkill={ReactNative} title="React Native" />
          </div>

          <div className="absolute flex top-0 py-5 animate-marquee4 whitespace-nowrap">
            <SkillItem imgSkill={Html} title="HTML" />
            <SkillItem imgSkill={Css} title="CSS" />
            <SkillItem imgSkill={Github} title="Github" />
            <SkillItem imgSkill={Laravel} title="LARAVEL" />
            <SkillItem imgSkill={Javascript} title="javascript" />
            <SkillItem imgSkill={ReactNative} title="React Native" />
            <SkillItem imgSkill={Nextjs} title="Next Js" />
            <SkillItem imgSkill={Tailwind} title="Tailwinds" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-5  md:hidden">
          <SkillItem imgSkill={Javascript} title="javascript" />
          <SkillItem imgSkill={ReactNative} title="React Native" />
          <SkillItem imgSkill={Nextjs} title="Next Js" />
          <SkillItem imgSkill={Tailwind} title="Tailwinds" />
          <SkillItem imgSkill={Html} title="HTML" />
          <SkillItem imgSkill={Css} title="CSS" />
          <SkillItem imgSkill={Github} title="Github" />
          <SkillItem imgSkill={Laravel} title="LARAVEL" />
        </div>
      </div>
    </div>
  );
}
