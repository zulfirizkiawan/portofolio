import Image from "next/image";
import aboutPhoto from "public/assets/aku.png";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { BiSupport, BiMedal, BiCodeBlock } from "react-icons/bi";

export default function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="about" className="w-full p-2 flex flex-col py-16 px-10 ">
      <div className="w-full">
        <p className="uppercase text-xl tracking-widest text-[#035B81] pt-10">
          About Me
        </p>
        <h2 className="py-4">Siapa saya?</h2>
        <div className="w-[13%] bg-[#035B81] h-2" />
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-2 mt-5 gap-10">
        <div
          className="col-span-3 lg:col-span-2 w-full h-full flex justify-center items-center"
          data-aos="fade-up"
          data-aos-offset="150"
        >
          <Image
            src={aboutPhoto}
            className="rounded-[5%] h-[320px] w-[320px]"
            alt="/"
          />
        </div>

        <div className="col-span-3 w-full h-auto">
          <p className="text-gray-600 text-justify">
            Halo, nama saya Zulfi Rizkiawan. Saya lulusan dari STIKI Malang
            dengan program studi Teknik Informatika. Saya seorang Front-end
            Developer dan Mobile Developer, saya memiliki keahlian dan
            pengalaman di bidang pengembangkan aplikasi mobile dan desain web
            yang responsif dan menarik. Saya berdedikasi untuk menciptakan
            pengalaman pengguna yang optimal melalui desain yang intuitif dan
            fungsional.
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 text-center"
            data-aos="fade-up"
            data-aos-offset="200"
          >
            <div className="flex flex-col w-full py-10 shadow-lg shadow-gray-300 p-3 rounded-lg justify-center items-center ">
              <BiMedal size={30} />
              <h6 className="mt-2">Pengalaman</h6>
              <p className="mt-2 text-gray-500">Kurang dari 1 tahun </p>
            </div>
            <div className="flex flex-col w-full py-10 shadow-lg shadow-gray-300 p-3 rounded-lg justify-center items-center ">
              <BiCodeBlock size={30} />
              <h6 className="mt-2">Menyelesaikan</h6>
              <p className="mt-2 text-gray-500">8 Project</p>
            </div>
            <div className="flex flex-col w-full py-10 shadow-lg shadow-gray-300 p-3 rounded-lg justify-center items-center ">
              <BiSupport size={30} />
              <h6 className="mt-2">Bantuan</h6>
              <p className="mt-2 text-gray-500">Senin - Jumat </p>
              <p className="text-gray-500">08:00 - 16:00 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
