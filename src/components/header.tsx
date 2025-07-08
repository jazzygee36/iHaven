"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import HomeButton from "./button";
import ToggleMenu from "@/assets/icons/toggle";
import HomeInput from "./input";
import Avater from "@/assets/icons/user";
import { courses } from "@/utils/courses";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState<typeof courses>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const isLoggedIn = token === true;
  const navLinks = isLoggedIn ? DashboardLink : HeaderLink;
  const hidePublicLinks = pathname === "/dashboard" || pathname === "/my-learning";

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken?.(false);
    router.push("/");
    router.refresh();
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setFilteredCourses([]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-6 py-5 bg-white flex justify-between items-center border-b border-[#1a1a1a33] backdrop-blur-sm">
      {/* Logo */}
      <Link
        href="/"
        className="text-xl font-bold bg-gradient-to-r from-[#193A8E] to-[#FF6933] bg-clip-text text-transparent"
      >
        iHaven
      </Link>

      {/* Search Bar */}
      <div className="w-[45%] hidden md:block relative">
        <HomeInput
          type="text"
          placeholder="Search courses"
          width="100%"
          borderRadius="20px"
          value={searchQuery}
          onChange={(e) => {
            const value = e.target.value;
            setSearchQuery(value);
            const results = courses.filter((course) =>
              course.title.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredCourses(results);
          }}
          onKeyDown={handleSearch}
        />

        {/* Course Suggestions */}
        {searchQuery && filteredCourses.length === 0 && (
          <div className="absolute z-50 mt-2 bg-white border rounded shadow w-full px-4 py-2 text-sm text-gray-500">
            No courses found.
          </div>
        )}
        {searchQuery && filteredCourses.length > 0 && (
          <div className="absolute z-50 mt-2 bg-white border rounded shadow w-full max-h-60 overflow-y-auto">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                // onClick={() => {
                //   router.push(`/courses/${course.id}`);
                //   setSearchQuery("");
                //   setFilteredCourses([]);
                // }}
              >
                {course.title}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 items-center">
        {(isLoggedIn && (pathname.startsWith("/dashboard") || pathname.startsWith("/my-learning"))
          ? DashboardLink
          : HeaderLink
        ).map((link) => (
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
                  pathname === link.path
                    ? "bg-[#FF6933] w-1/2"
                    : "bg-transparent w-0 group-hover:w-1/2"
                }`}
              />
            </h2>
          </Link>
        ))}

        {isLoggedIn ? (
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setShowDropdown(!showDropdown)}>
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
        ) : (
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
              onClick={() => router.push("/register")}
            />
          </div>
        )}
      </nav>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden text-[#1a1a1a] focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "X" : <ToggleMenu />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col gap-4 md:hidden"
        >
          {!hidePublicLinks &&
            navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium text-center pb-1 ${
                  pathname === link.path
                    ? "text-[#1a1a1a] font-semibold"
                    : "text-[#1a1a1a99] hover:text-black"
                }`}
              >
                {link.title}
              </Link>
            ))}

          {!hidePublicLinks && !isLoggedIn ? (
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
                onClick={() => router.push("/register")}
              />
            </div>
          ) : (
            <p
              onClick={handleLogout}
              className="cursor-pointer text-center text-sm text-red-500"
            >
              Logout
            </p>
          )}
        </div>
      )}
    </header>
  );
}
