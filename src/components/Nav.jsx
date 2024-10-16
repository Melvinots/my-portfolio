import { useState } from "react";

import React from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navLinks } from "../constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-[#0b6477] text-white shadow-xl font-code">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mx-5 lg:justify-around lg:mx-0">
          <div className="flex flex-shrink-0">
            <a href="#home">
              <img
                className="ml-3 h-5"
                src={logo}
                alt="Logo"
              />
            </a>
          </div>
          <ul className="flex max-md:hidden ml-14 space-x-12 max-lg:space-x-4 text-sm">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="py-4 px-2 hover:text-yellow-400">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex md:hidden">
            <button onClick={toggleMenu}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {menuOpen && (
          <div className="flex justify-center items-center fixed left-0 z-20 w-full py-1 rounded-br-3xl rounded-bl-3xl bg-[#0b6477] md:hidden">
            <ul className="text-center">
              {navLinks.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.href}
                    className="px-10 hover:text-yellow-400"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
