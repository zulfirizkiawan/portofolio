import Navbar from "@/components/organism/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { foodmarket, foodmarket2, foodmarket3 } from "../../public/assets";

const Foodmarket = () => {
  const imgData = [
    {
      id: 0,
      imgProject: foodmarket,
    },
    {
      id: 1,
      imgProject: foodmarket2,
    },
    {
      id: 2,
      imgProject: foodmarket3,
    },
  ];

  const filteredImageData = imgData.filter((projectImg) => projectImg.id === 0);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Navbar />
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          {filteredImageData.map((projectImg) => (
            <Image
              key={projectImg.id}
              className="absolute z-1"
              layout="fill"
              objectFit="cover"
              src={projectImg.imgProject}
              alt="/"
            />
          ))}
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Aplikasi Android Food Market</h2>
            <h3>React Native / Redux / API Integrasi </h3>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 px-6 ">
          <p className="py-4 uppercase text-xl tracking-widest text-[#035B81] ">
            Project
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-2">
            {imgData.map((projectImg) => (
              <div key={projectImg.id}>
                <Image
                  src={projectImg.imgProject}
                  alt="/"
                  className="w-full cursor-pointer"
                  onClick={() => handleImageClick(projectImg.imgProject)}
                />
              </div>
            ))}

            {/* Modal */}
            {selectedImage && (
              <div className="fixed inset-0 flex items-center justify-center z-50 ">
                <div
                  className="fixed inset-0 cursor-pointer"
                  onClick={handleCloseModal}
                />
                <div className="bg-white p-4 lg:w-[60%] shadow-xl shadow-gray-500 flex items-center justify-center rounded-xl">
                  <Image
                    src={selectedImage}
                    alt="/"
                    className="w-[90%] self-center"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-5 px-6">
          <div className="col-span-4">
            <h2>Ringkasan</h2>
            <p className="text-justify pt-3">
              Aplikasi Food Market hadir dengan tujuan memberikan kemudahan dan
              kenyamanan dalam proses pembelian makanan. Dengan aplikasi ini,
              kamu dapat menjelajahi beragam restoran dan warung makan di
              sekitarmu tanpa harus keluar rumah. Cukup dengan beberapa ketukan
              pada layar ponselmu, pilihan makanan lezat tersaji di hadapanmu.
              Aplikasi ini juga dilengkapi dengan fitur penilaian dan ulasan,
              memungkinkanmu untuk melihat pengalaman orang lain sebelum
              memutuskan untuk memesan. Dengan sistem pembayaran yang
              terintegrasi, transaksi menjadi lebih cepat dan aman. Tidak hanya
              itu, aplikasi Food Market juga menyediakan opsi pengiriman yang
              fleksibel, sehingga kamu dapat menikmati hidangan favoritmu di
              mana saja, kapan saja.
            </p>
            <a
              href="https://github.com/zulfirizkiawan/FoodMareket-APP-React-Native"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <button className="px-8 py-2 mt-4">Demo</button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Teknologi</p>
              <div className="grid grid-cols-3 md:grid-cols-1 ml-2">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> React Native
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> API Integrasi
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Redux
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Redux-thunk
                </p>
              </div>
            </div>
          </div>
          <Link href="/#project">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Foodmarket;
