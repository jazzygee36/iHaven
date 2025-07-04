"use client";

import Image from "next/legacy/image";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useState } from "react";
import HomeButton from "./button";
import { Modal } from "./modal";
import ToggleMenu from "@/assets/icons/toggle";
import HomeInput from "./input";

const HeaderLink = [
  { title: "Home", path: "/" },
  { title: "Programs", path: "/programs" },
  { title: "Hubs", path: "/hubs" },
  { title: "Mentors", path: "/mentors" },
  { title: "Impact", path: "/impact" },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 py-5 bg-white flex justify-between items-center border-b-[1px] border-[#1a1a1a33]  relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="text-[#193A8E] font-bold text-1xl flex items-center gap-2"
        >
          iHaven{" "}
        </Link>
      </div>
      <div className="w-[45%] hidden md:block">
        <HomeInput
          type={"text"}
          placeholder={"Search courses"}
          width={"100%"}
          borderRadius="20px"
        />
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center">
        {HeaderLink.map((link, index) => (
          <Link key={index} href={link.path}>
            <h2 className="relative inline-block text-sm font-medium cursor-pointer pb-1">
              <span
                className={`relative z-10 ${
                  pathname === link.path
                    ? "text-[#1a1a1a] font-semibold"
                    : "text-[#1a1a1a66] hover:text-black"
                }`}
              >
                {link.title}
              </span>
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-200 ${
                  pathname === link.path
                    ? "bg-[#FF6933] w-1/2"
                    : "bg-transparent w-0 group-hover:w-1/2"
                }`}
              />
            </h2>
          </Link>
        ))}

        <div className="flex gap-2">
          <HomeButton
            title={"Student Portal"}
            type={"button"}
            bg={""}
            width={""}
            border="1xp solid #193A8E66"
            borderRadius="20px"
            height={"45px"}
            color="#1A1A1A"
          />
          <HomeButton
            title={"Get Started"}
            type={"button"}
            bg={"#193A8E"}
            borderRadius="20px"
            width={""}
            height={"45px"}
            color="#fff"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#1a1a1a] focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "X" : <ToggleMenu />}
      </button>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col gap-4 md:hidden">
          {HeaderLink.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium  pb-1 ${
                pathname === link.path
                  ? "border-[#193a8e] text-[#1a1a1a] font-semibold text-center"
                  : "border-transparent text-[#1a1a1a99] hover:text-black text-center"
              }`}
            >
              {link.title}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-2 text-center">
            <HomeButton
              title={"Student Portal"}
              type={"button"}
              bg={""}
              width={""}
              border="1xp solid #193A8E66"
              borderRadius="20px"
              height={"45px"}
              color="#1A1A1A"
            />
            <HomeButton
              title={"Get Started"}
              type={"button"}
              bg={"#193A8E"}
              borderRadius="20px"
              width={""}
              height={"45px"}
              color="#fff"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      )}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Create your account."
      >
        <div className="w-full md:w-[60%] mx-auto">
          <p className="text-sm text-[#5D6C81] text-center">
            Build skills for today, tomorrow, and beyond. Education to
            future-proof your career.
          </p>

          <div className="flex flex-col items-center gap-5 mt-6">
            <HomeButton
              title="Continue with Google"
              type="button"
              bg="#1d1B20"
              borderRadius="20px"
              width="100%"
              height="45px"
            />
            <HomeButton
              title="Continue with Facebook"
              type="button"
              bg="#1275B1"
              borderRadius="20px"
              width="100%"
              height="45px"
            />
            <HomeButton
              title="Continue with Apple"
              type="button"
              bg="#4A5667"
              borderRadius="20px"
              width="100%"
              height="45px"
            />
          </div>
          <p className="mt-2 text-sm text-center">
            Don't have any of the above account{" "}
            <span
              className="text-sm text-[#1275B1] font-semibold cursor-pointer hover:underline"
              onClick={() => {
                setIsOpen(false), router.push("/register");
              }}
            >
              Sign Up
            </span>
          </p>

          <p className="text-xs text-[#5D6C81] text-center mt-4">
            By continuing, you agree to iHaven{" "}
            <Link href={""} className="font-semibold">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href={""} className="font-semibold">
              Terms and Conditions
            </Link>{" "}
            and to receive electronic communication about my accounts and
            services
          </p>
        </div>
      </Modal>
    </header>
  );
}
