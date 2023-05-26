import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import {
  FaGithub,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsFillPersonLinesFill, BsPersonLinesFill } from "react-icons/bs";
import logo from "../../../../public/assets/logo.svg";
import logoMobile from "../../../../public/assets/logoMobile.svg";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

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
              <Link href="/" legacyBehavior>
                Home
              </Link>
            </li>
            <li className="ml-10 text-sm font-medium uppercase group hover:border-b hover:text-[#173A56] hover:font-bold">
              <Link href="/#about" legacyBehavior>
                About
              </Link>
            </li>
            <li className="ml-10 text-sm font-medium uppercase group hover:border-b hover:text-[#173A56] hover:font-bold">
              <Link href="/#skills" legacyBehavior>
                Skills
              </Link>
            </li>
            <li className="ml-10 text-sm font-medium uppercase group hover:border-b hover:text-[#173A56] hover:font-bold">
              <Link href="/#projects" legacyBehavior>
                Projects
              </Link>
            </li>
            <li className="ml-10 text-sm font-medium uppercase group hover:border-b hover:text-[#173A56] hover:font-bold">
              <Link href="/resume" legacyBehavior>
                Resume
              </Link>
            </li>
            <li className="ml-10 text-sm font-medium uppercase group hover:border-b hover:text-[#173A56] hover:font-bold">
              <Link href="/#contact" legacyBehavior>
                Contact
              </Link>
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
              <Link href="/" legacyBehavior>
                <a>
                  <Image src={logoMobile} alt="/" />
                </a>
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
              <Link href="/" legacyBehavior>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm group hover:text-[#173A56] hover:font-medium"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about" legacyBehavior>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm group hover:text-[#173A56] hover:font-medium"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills" legacyBehavior>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm group hover:text-[#173A56] hover:font-medium"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects" legacyBehavior>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm group hover:text-[#173A56] hover:font-medium"
                >
                  Projects
                </li>
              </Link>
              <Link href="/resume" legacyBehavior>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm group hover:text-[#173A56] hover:font-medium"
                >
                  Resume
                </li>
              </Link>
              <Link href="/#contact" legacyBehavior>
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm group hover:text-[#173A56] hover:font-medium"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/clint-briley-50056920a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/zulfirizkiawan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/seanzulfi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaInstagramSquare />
                  </div>
                </a>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
