import Link from "next/link";
import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";

export default function ContactItem() {
  return (
    <div className="flex items-center justify-between max-w-[400px] m-auto py-4">
      <a
        href="https://www.linkedin.com/in/clint-briley-50056920a/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <FaLinkedinIn />
        </div>
      </a>
      <a
        href="https://github.com/zulfirizkiawan"
        target="_blank"
        rel="noreferrer"
      >
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <FaGithub />
        </div>
      </a>
      <a
        href="https://www.instagram.com/seanzulfi/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <FaInstagramSquare />
        </div>
      </a>
      <Link href="/resume">
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
          <BsFillPersonLinesFill />
        </div>
      </Link>
    </div>
  );
}
