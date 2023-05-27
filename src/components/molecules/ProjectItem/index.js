import Image from "next/image";
import Link from "next/link";
import React from "react";
import netflix from "../../../../public/assets/project/web/netflix.jpg";

export default function ProjectItem({ imgProject, title, projectUrl }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#069557] to-[#02897A]">
      <Image
        src={imgProject}
        alt="/"
        className="rounded-xl group-hover:opacity-20"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-center text-white">Next JS</p>
        <Link href={projectUrl} legacyBehavior>
          <p className="text-center py-2 px-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}
