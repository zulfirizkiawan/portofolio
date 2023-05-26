import Link from "next/link";
import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";

export default function MainBanner() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            AYO BANGUN SESUATU BERSAMA
          </p>
          <h2 className="">
            Hi, Saya <span className="text-[#035B81]">Zulfi Rizkiawan</span>
          </h2>
          <h2 className="py-2 text-gray-700">
            Mobile Developer and Front-End Web Developer
          </h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Sebagai seorang Mobile Developer dan Front-end Developer, saya
            memiliki keahlian dan pengalaman dalam mengembangkan aplikasi mobile
            dan desain web yang responsif dan menarik. Saya berdedikasi untuk
            menciptakan pengalaman pengguna yang optimal melalui desain yang
            intuitif dan fungsional.
          </p>
          <div className="flex items-center justify-between max-w-[300px] m-auto py-4">
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
        </div>
      </div>
    </div>
  );
}
