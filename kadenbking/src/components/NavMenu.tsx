'use client';

import React from "react";
import Link from "next/link";
import { ThemeContext } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

interface Props {
  navbarOpen: boolean;
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navigation = [
  { name: "Home", href: "/#hero" },
  { name: "About Me", href: "/#about" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Contact", href: "/#contact" },
];

const NavMenu: React.FC<Props> = ({ navbarOpen, setNavbarOpen }) => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const handleClick = (href: string) => {
    setNavbarOpen(false);
    const targetId = href.split('#')[1];
    if (targetId) {
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed flex top-0 left-0 w-full px-10 z-40 h-screen overflow-y-scroll bg-primaryBlue transform delay-100 transition-all duration-500 ${
        navbarOpen
          ? "opacity-100 rotate-0 scale-100 skew-y-0"
          : "opacity-0 rotate-180 scale-0 skew-y-12"
      }`}
    >
      <ul className="w-full flex flex-col items-start justify-center align-center">
        {navigation.map((item) => (
          <li
            key={item.name}
            className="flex mx-auto my-5 list-none focus:outline-none transition-all duration-200 ease-in-out"
          >
            <Link
              href={item.href}
              className="px-10 py-5 font-bold uppercase rounded-md text-lg text-white text-center hover:bg-darkBlue cursor-pointer hover:-skew-y-6"
              onClick={() => handleClick(item.href)}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li
          className="mx-auto text-center list-none focus:outline-none hover:bg-darkBlue px-10 py-5 rounded-md hover:-skew-y-6 cursor-pointer"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            setNavbarOpen(false);
          }}
        >
          <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === "dark" ? (
              <FaSun className="text-white text-2xl cursor-pointer" />
            ) : (
              <FaMoon className="text-white text-2xl cursor-pointer" />
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
