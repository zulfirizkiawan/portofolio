import Image from "next/image";
import React from "react";
import aboutPhoto from "../../../../public/assets/aboutPhoto.svg";

export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center px-10">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-4 uppercase text-xl tracking-widest text-[#035B81] ">
            Tentang Saya
          </p>
          <h2 className="py-4">Siapa Saya</h2>
          <p className="py-2 text-gray-600">
            Seorang Mobile Developer adalah seorang profesional dalam bidang
            pengembangan aplikasi mobile. Mereka memiliki pengetahuan dan
            keterampilan dalam membangun aplikasi yang dapat berjalan pada
            perangkat mobile seperti smartphone dan tablet. Seorang Mobile
            Developer biasanya menguasai bahasa pemrograman seperti Java atau
            Kotlin untuk platform Android, serta Objective-C atau Swift untuk
            platform iOS. Mereka juga memiliki pemahaman yang baik tentang
            desain antarmuka pengguna (UI) yang responsif, serta kemampuan untuk
            mengintegrasikan layanan pihak ketiga seperti penggunaan API dan
            integrasi dengan database.
          </p>
          <p className="py-2 text-gray-600">
            Seorang Front-End Developer adalah seorang profesional yang fokus
            pada pengembangan aspek visual dan interaktif dari sebuah aplikasi
            web. Mereka bertanggung jawab untuk menerjemahkan desain UI/UX
            menjadi kode-kode yang dapat dijalankan di web browser. Front-End
            Developer biasanya menguasai bahasa pemrograman seperti HTML, CSS,
            dan JavaScript. Mereka juga memahami prinsip-prinsip desain
            responsif untuk memastikan tampilan yang optimal pada berbagai
            perangkat dan ukuran layar. Selain itu, mereka sering bekerja dengan
            framework dan library seperti React, Vue, atau Angular untuk
            mempercepat proses pengembangan dan meningkatkan fungsionalitas
            aplikasi web.
          </p>
          <a
            href="https://www.instagram.com/seanzulfi/"
            target="_blank"
            rel="noreferrer"
          >
            <button class="bg-green-500 py-1 px-4 rounded hover:bg-slate-50">
              Resume
            </button>
          </a>
        </div>
        <div className="w-full h-auto m-auto flex items-center justify-center pt-5">
          <Image src={aboutPhoto} />
        </div>
      </div>
    </div>
  );
}
