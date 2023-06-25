import { ContactItem } from "@/components/molecules";
import { AiOutlineUser } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen px-10">
      <div className="max-w-[1240px] mx-auto px-2 py-10">
        <p className="py-4 uppercase text-xl tracking-widest text-[#035B81] ">
          Contact
        </p>
        <h2 className="py-4">Hubungi saya</h2>
        <div className="w-[13%] bg-[#035B81] h-2" />
        <div className="grid lg:grid-cols-5 gap-8 pt-4">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full">
            <div className="h-full">
              <div className="py-8">
                <h1 className="font-extrabold">let&apos;s work together</h1>
              </div>
              <div className="pt-8">
                <p className="text-justify">
                  Saya tersedia untuk proyek freelance maupun posisi full-time.
                  Mari kita bergabung dan ciptakan sesuatu yang menakjubkan
                  bersama. Silakan hubungi saya, saya sangat antusias untuk
                  berdiskusi lebih lanjut!
                </p>
              </div>
              <div className="pt-5">
                <p className="uppercase pt-4 text-[#5651e5]">Connect with me</p>
                <ContactItem />
              </div>
            </div>
          </div>

          {/* right */}
          <div className="bg-white col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-[40px] lg:p-4">
            <div className="py-6 px-6 md:p-4 ">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <div className="relative mb-6">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <AiOutlineUser size={20} className="text-[#1f2947]" />
                      </div>
                      <input
                        type="text"
                        id="input-group-1"
                        className="bg-[#F6F6F9] px-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nama"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="relative mb-6">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <BsPhone size={20} />
                      </div>
                      <input
                        type="number"
                        id="input-group-1"
                        className="bg-[#F6F6F9]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="No handhpone"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <div className="relative mb-6">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FiMail size={20} />
                      </div>
                      <input
                        type="email"
                        id="input-group-1"
                        className="bg-[#F6F6F9]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="relative mb-6">
                      <input
                        type="text"
                        placeholder="Subjek"
                        id="default-input"
                        className="bg-[#F6F6F9]  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <textarea
                    id="message"
                    rows="5"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-[#F6F6F9] rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
                <button className="py-2 px-4 text-white mt-16 font-bold ">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
