import ContactItem from "@/components/molecules/ContactItem";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen px-10">
      <div className="max-w-[1240px] mx-auto px-2 py-10">
        <p className="py-4 uppercase text-xl tracking-widest text-[#035B81] ">
          Contact
        </p>
        <h2 className="py-4">Hubungi saya</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1683755300481-a1d7f62ce644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="/"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-2">Zulfi Rizkiawan</h2>
                <p>Mobile Developer & Front-End Developer</p>
                <p className="py-4">
                  Saya tersedia untuk freelance atau full-time. Hubungi saya dan
                  mari kita bicara.
                </p>
              </div>
              <div>
                <p className="uppercase pt-4 text-[#5651e5]">Connect with me</p>
                <ContactItem />
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Nama</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-100"
                      type="text"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Nomor WA / HP
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-100"
                      type="number"
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-100"
                    type="email"
                  ></input>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subjek</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-100"
                    type="text"
                  ></input>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Pesan</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-100"
                    rows="10"
                    type="text"
                  ></textarea>
                </div>
                <button className="w-full p-3 text-white mt-4">
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
