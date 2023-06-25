import { ContactItem } from "@/components/molecules";
import Image from "next/image";
import aboutPhoto from "public/assets/aku.png";
import React, { useRef } from "react";

export default function MainBanner() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div id="home" className="w-full h-screen text-center pt-10">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex items-center">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 mt-5 gap-5">
          <div className="col-span-3 w-full h-auto pt-40 md:pt-0 ">
            <p className="uppercase text-sm tracking-widest text-gray-600 ">
              AYO BANGUN SESUATU BERSAMA
            </p>
            <h2 className="">
              Hi, Saya <span className="text-[#035B81]">Zulfi Rizkiawan</span>
            </h2>
            <h3 className="py-2 text-gray-700 text-2xl">
              Mobile Developer & Front-End Web Developer
            </h3>
            <p className="py-4 text-gray-600 max-w-[90%] md:max-w-[70%] m-auto">
              Setiap commit di repository GitHub adalah langkah maju dalam
              perjalanan sebagai seorang pengembang. Terus memperluas
              pengalaman, karena setiap kode yang ditulis akan memberikan
              wawasan besar.
            </p>
            <div className="px-10">
              <ContactItem />
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2 w-full h-full flex justify-center items-center">
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://assets9.lottiefiles.com/packages/lf20_0yfsb3a1.json"
              style={{ width: "350px", height: "350px" }}
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}
