import Image from "next/image";
import React from "react";
import aboutPhoto from "../../../../public/assets/aboutPhoto.png";
import Link from "next/link";

export default function About() {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 px-10 "
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#035B81]">
            About Me
          </p>
          <h2 className="py-4">Siapa saya?</h2>
          <div className="w-[13%] bg-[#035B81] h-2" />
          <p className="py-2 text-gray-600 text-justify pt-5">
            Saya seorang Jr. Mobile Developer dalam bidang pengembangan aplikasi
            mobile. saya memiliki pengetahuan dan keterampilan dalam membangun
            aplikasi yang dapat berjalan pada perangkat mobile seperti
            smartphone atau tablet dan juga memiliki pemahaman yang baik tentang
            desain antarmuka pengguna (UI) yang responsif, serta kemampuan untuk
            mengintegrasikan layanan pihak ketiga seperti penggunaan API dan
            integrasi dengan database. Sebagai Mobile Developer saya menguasai
            bahasa pemrograman React Native.
          </p>
          <p className="py-2 text-gray-600 text-justify">
            Dan saya juga seorang Jr. Front-End Developer yang fokus pada
            pengembangan interaktif dari sebuah aplikasi web. Saya bertanggung
            jawab untuk menerjemahkan desain UI/UX menjadi kode-kode yang dapat
            dijalankan di web browser dan juga memahami prinsip-prinsip desain
            responsif untuk memastikan tampilan yang optimal pada berbagai
            perangkat dan ukuran layar. Selain itu, saya sering bekerja dengan
            framework dan library seperti React - Next JS untuk mempercepat
            proses pengembangan dan meningkatkan fungsionalitas aplikasi web.
          </p>
          <div className="pt-5">
            <a
              href="https://www.instagram.com/seanzulfi/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-green-500 py-1 px-4 rounded hover:bg-slate-50">
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-[10%] flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={aboutPhoto} className="rounded-[10%]" alt="/" />
        </div>
      </div>
    </div>
  );
}
