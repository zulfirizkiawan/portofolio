import Image from "next/image";
import React from "react";

export default function Skill() {
  return (
    <div className="w-full lg:h-screen p-2 px-10">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="py-4 uppercase text-xl tracking-widest text-[#035B81] ">
          Skills
        </p>
        <h2>Apa yang saya bisa lakukan</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="uppercase flex-col items-center justify-center">
                  javascript
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="uppercase flex-col items-center justify-center">
                  React Native
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="uppercase flex-col items-center justify-center">
                  Next Js
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="uppercase flex-col items-center justify-center">
                  Tailwinds
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="uppercase flex-col items-center justify-center">
                  HTML
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="uppercase flex-col items-center justify-center">
                  CSS
                </h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github1.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="uppercase flex-col items-center justify-center">
                  Github
                </h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/laravel.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div>
                <h3 className="uppercase flex-col items-center justify-center">
                  LARAVEL
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
