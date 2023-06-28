import { ContactItem } from "@/components/molecules";
import React, { useRef } from "react";

export default function MainBanner() {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div id="home" className="w-full h-screen pt-10">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex items-center">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 mt-5 gap-5">
          <div className="col-span-3 max-w-[90%] h-auto pt-40 md:pt-0 pl-7 md:pl-20 text-center md:text-left">
            <p className="uppercase text-sm tracking-widest text-gray-600 pt-5">
              AYO BANGUN SESUATU BERSAMA
            </p>
            <p className="text-2xl font-bold md:text-4xl">
              Hi, Saya <span className="text-[#035B81]">Zulfi Rizkiawan</span>
            </p>
            <h3 className="py-2 text-gray-700 text-2xl ">
              Mobile Developer & Front-End Web Developer
            </h3>
            <p className="py-4 text-gray-600">
              Setiap commit di repository GitHub adalah langkah maju dalam
              perjalanan sebagai seorang pengembang. Terus memperluas
              pengalaman, karena setiap kode yang ditulis akan memberikan
              wawasan besar.
            </p>
            <div className="pr-0 md:pr-40 max-w-[100%] md:max-w-[80%]">
              <ContactItem />
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2 w-full h-full flex justify-center items-center pr-0 md:pr-10">
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
