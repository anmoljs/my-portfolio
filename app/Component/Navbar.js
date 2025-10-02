"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "#projects", scroll: false }, 
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full  ">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-[32px] md:text-[40px] font-bold font-comfortaa">
          Anmol Munir
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={link.scroll === false ? false : true}
              className={`font-comfortaa text-[20px] font-bold transition ${
                pathname === link.href
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "hover:text-yellow-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-6 py-6 bg-white shadow-lg">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={link.scroll === false ? false : true}
              onClick={() => setIsOpen(false)}
              className={`font-comfortaa text-[20px] font-bold transition ${
                pathname === link.href
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-gray-800 hover:text-yellow-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
