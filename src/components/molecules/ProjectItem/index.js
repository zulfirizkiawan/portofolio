import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({
  title,
  imgProject,
  projectUrl,
  framework,
}) {
  return (
    <div className=" bg-white relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#069557] to-[#02897A]">
      <Image
        src={imgProject}
        alt="/"
        className="rounded-xl group-hover:opacity-20"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-center text-white">{framework}</p>
        <Link href={projectUrl} legacyBehavior>
          <p className="text-center py-2 px-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}
