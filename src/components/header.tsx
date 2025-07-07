"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import HomeButton from "./button";
import { Modal } from "./modal";
import ToggleMenu from "@/assets/icons/toggle";
import HomeInput from "./input";
import Avater from "@/assets/icons/user";

const HeaderLink = [
  { title: "Home", path: "/" },
  { title: "Programs", path: "/programs" },
  { title: "Hubs", path: "/hubs" },
];

const DashboardLink = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "My Learning", path: "/my-learning" },
];

interface HeaderProps {
  setToken?: (value: boolean) => void;
  token?: boolean;
}

export default function Header({ setToken, token }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const isLoggedIn = token === true;
  const navLinks = isLoggedIn ? DashboardLink : HeaderLink;

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken?.(false);
    router.push("/");
    router.refresh();
  };

  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderNavLinks = () =>
    navLinks.map((link) => (
      <Link key={link.path} href={link.path}>
        <h2 className="relative inline-block text-sm font-medium cursor-pointer pb-1">
          <span
            className={`relative z-10 ${
              pathname === link.path ? "text-[#1a1a1a] font-semibold" : "text-[#1a1a1a66] hover:text-black"
            }`}
          >
            {link.title}
          </span>
          <span
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-200 ${
              pathname === link.path ? "bg-[#FF6933] w-1/2" : "bg-transparent w-0 group-hover:w-1/2"
            }`}
          />
        </h2>
      </Link>
    ));

  const renderMobileMenu = () => (
    <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col gap-4 md:hidden">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          onClick={() => setIsMenuOpen(false)}
          className={`text-base font-medium text-center pb-1 ${
            pathname === link.path ? "text-[#1a1a1a] font-semibold" : "text-[#1a1a1a99] hover:text-black"
          }`}
        >
          {link.title}
        </Link>
      ))}
      {!isLoggedIn ? (
        <div className="flex flex-col gap-3 mt-2 text-center">
          <HomeButton
            title="Student Portal"
            type="button"
            bg=""
            width=""
            border="1px solid #193A8E66"
            borderRadius="20px"
            height="45px"
            color="#1A1A1A"
            onClick={() => router.push("/students-portal")}
          />
          <HomeButton
            title="Get Started"
            type="button"
            bg="#193A8E"
            borderRadius="20px"
            width=""
            height="45px"
            color="#fff"
            onClick={() => setIsOpen(true)}
          />
        </div>
      ) : (
        <p onClick={handleLogout} className="cursor-pointer text-center text-sm text-red-500">
          Logout
        </p>
      )}
    </div>
  );

  return (
    <header className="w-full px-6 py-5 bg-white flex justify-between items-center border-b-[1px] border-[#1a1a1a33] relative z-50">
      {/* Logo */}
      <Link
        href="/"
        className="text-xl font-bold bg-gradient-to-r from-[#193A8E] to-[#FF6933] bg-clip-text text-transparent"
      >
        iHaven
      </Link>

      {/* Search Bar */}
      <div className="w-[45%] hidden md:block">
        <HomeInput type="text" placeholder="Search courses" width="100%" borderRadius="20px" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 items-center">
        {renderNavLinks()}
        {!isLoggedIn ? (
          <div className="flex gap-2">
            <HomeButton
              title="Student Portal"
              type="button"
              bg=""
              width=""
              border="1px solid #193A8E66"
              borderRadius="20px"
              height="45px"
              color="#1A1A1A"
              onClick={() => router.push("/students-portal")}
            />
            <HomeButton
              title="Get Started"
              type="button"
              bg="#193A8E"
              borderRadius="20px"
              width=""
              height="45px"
              color="#fff"
              onClick={() => setIsOpen(true)}
            />
          </div>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown}>
              <Avater />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Mobile Toggle Button */}
      <button className="md:hidden text-[#1a1a1a] focus:outline-none" onClick={toggleMenu}>
        {isMenuOpen ? "X" : <ToggleMenu />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && renderMobileMenu()}

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Create your account.">
        <div className="w-full md:w-[60%] mx-auto">
          <p className="text-sm text-[#5D6C81] text-center">
            Build skills for today, tomorrow, and beyond. Education to future-proof your career.
          </p>

          <div className="flex flex-col items-center gap-5 mt-6">
            <HomeButton title="Continue with Google" type="button" bg="#1d1B20" borderRadius="20px" width="100%" height="45px" />
            <HomeButton title="Continue with Facebook" type="button" bg="#1275B1" borderRadius="20px" width="100%" height="45px" />
            <HomeButton title="Continue with Apple" type="button" bg="#4A5667" borderRadius="20px" width="100%" height="45px" />
          </div>

          <p className="mt-2 text-sm text-center">
            Don&apos;t have any of the above account{" "}
            <span
              className="text-sm text-[#1275B1] font-semibold cursor-pointer hover:underline"
              onClick={() => {
                setIsOpen(false);
                router.push("/register");
              }}
            >
              Sign Up
            </span>
          </p>

          <p className="text-xs text-[#5D6C81] text-center mt-4">
            By continuing, you agree to iHaven{" "}
            <Link href="" className="font-semibold">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="" className="font-semibold">
              Terms and Conditions
            </Link>{" "}
            and to receive electronic communication about my accounts and services
          </p>
        </div>
      </Modal>
    </header>
  );
}
