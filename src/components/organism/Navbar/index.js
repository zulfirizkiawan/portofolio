import ContactItem from "@/components/molecules/ContactItem";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../../../public/assets/logo.svg";
import logoMobile from "../../../../public/assets/logoMobile.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#f8fbfd");
  const [linkColor, setLinkColor] = useState("#173A56");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const sectionRef = useRef(null);

  const handleMenuClick = (id) => {
    const target = document.querySelector(id);
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-10 2xl:px-16">
        <Link href="/" legacyBehavior>
          <a>
            <Image src={logo} alt="/" className="cursor-pointer" />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm font-medium uppercase group hover:border-b hover:text-[#173A56] hover:font-bold">
              <a onClick={() => handleMenuClick("#home")}>Home</a>
            </li>
            <li className="ml-10 text-sm font-medium uppercase group hover:border-b hover:text-[#173A56] hover:font-bold">
              <a onClick={() => handleMenuClick("#about")}>About</a>
            </li>
            <li className="ml-10 text-sm font-medium uppercase group hover:border-b hover:text-[#173A56] hover:font-bold">
              <a onClick={() => handleMenuClick("#skill")}>Skills</a>
            </li>
            <li className="ml-10 text-sm font-medium uppercase group hover:border-b hover:text-[#173A56] hover:font-bold">
              <a onClick={() => handleMenuClick("#project")}>Projects</a>
            </li>
            <li className="ml-10 text-sm font-medium uppercase group hover:border-b hover:text-[#173A56] hover:font-bold">
              <a href="/resume">Resume</a>
            </li>
            <li className="ml-10 text-sm font-medium uppercase group hover:border-b hover:text-[#173A56] hover:font-bold">
              <a onClick={() => handleMenuClick("#contact")}>Contact</a>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={logoMobile} alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Work for money and customer satisfaction
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm group hover:text-[#173A56] hover:font-medium"
              >
                <a onClick={() => handleMenuClick("#home")}>Home</a>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm group hover:text-[#173A56] hover:font-medium"
              >
                <a onClick={() => handleMenuClick("#about")}>About</a>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm group hover:text-[#173A56] hover:font-medium"
              >
                <a onClick={() => handleMenuClick("#skill")}>Skill</a>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm group hover:text-[#173A56] hover:font-medium"
              >
                <a onClick={() => handleMenuClick("#project")}>Projects</a>
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm group hover:text-[#173A56] hover:font-medium"
              >
                Resume
              </li>
              <li
                onClick={() => setNav(false)}
                className="py-4 text-sm group hover:text-[#173A56] hover:font-medium"
              >
                <a onClick={() => handleMenuClick("#contact")}>Contact</a>
              </li>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <ContactItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
