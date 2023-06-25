import Image from "next/image";
import React from "react";

export default function SkillItem({ imgSkill, title }) {
  return (
    <div className="bg-white w-[300px] mr-4 p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={imgSkill} width="64" height="64" alt="/" />
        </div>
        <div>
          <h3 className="uppercase flex-col items-center justify-center">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}
