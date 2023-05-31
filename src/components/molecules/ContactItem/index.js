import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function ContactItem() {
  return (
    <div className="flex items-center justify-between max-w-[400px] m-auto py-4">
      <Link
        href="https://www.linkedin.com/in/clint-briley-50056920a/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="bg-[#018AD2] rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
          <FaLinkedinIn className="text-white" size={25} />
        </div>
      </Link>
      <Link
        href="https://github.com/zulfirizkiawan"
        target="_blank"
        rel="noreferrer"
      >
        <div className="bg-[#8D32AB] rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
          <FaGithub className="text-white" size={25} />
        </div>
      </Link>
      <Link
        href="https://www.instagram.com/seanzulfi/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="bg-[#F44B5B] rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300">
          <AiFillInstagram className="text-white" size={25} />
        </div>
      </Link>
      <a
        href="/../public/Zulfi Rizkiawan-resume.pdf"
        download="Zulfi Rizkiawan-resume.pdf"
      >
        <div className="bg-[#028E37] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <BsFillPersonLinesFill className="text-white" size={20} />
        </div>
      </a>
    </div>
  );
}
