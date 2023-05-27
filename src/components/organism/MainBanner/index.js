import ContactItem from "@/components/molecules/ContactItem";
import Link from "next/link";
import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";

export default function MainBanner() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            AYO BANGUN SESUATU BERSAMA
          </p>
          <h2 className="">
            Hi, Saya <span className="text-[#035B81]">Zulfi Rizkiawan</span>
          </h2>
          <h2 className="py-2 text-gray-700">
            Mobile Developer & Front-End Web Developer
          </h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Sebagai seorang Mobile Developer dan Front-end Developer, saya
            memiliki keahlian dan pengalaman dalam mengembangkan aplikasi mobile
            dan desain web yang responsif dan menarik. Saya berdedikasi untuk
            menciptakan pengalaman pengguna yang optimal melalui desain yang
            intuitif dan fungsional.
          </p>
          <div className="px-10">
            <ContactItem />
          </div>
        </div>
      </div>
    </div>
  );
}
