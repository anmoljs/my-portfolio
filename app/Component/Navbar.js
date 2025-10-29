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
    { name: "Projects", href: "#projects" },
    { name: "About", href: "/about" }, 
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-[32px] md:text-[40px] font-bold font-comfortaa">
          Anmol Munir
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          {links.map((link) =>
            link.name === "Projects" ? (
              
              <a
                key={link.href}
                href={link.href}
                className="font-comfortaa text-[20px] font-bold transition hover:text-yellow-500"
              >
                {link.name}
              </a>
            ) : (
              
              <Link
                key={link.href}
                href={link.href}
                className={`font-comfortaa text-[20px] font-bold transition ${
                  pathname === link.href
                    ? "text-yellow-500 border-b-2 border-yellow-500 capitalize"
                    : "hover:text-yellow-500"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-6 py-6 bg-white shadow-lg">
          {links.map((link) =>
            link.name === "Projects" ? (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-comfortaa text-[20px] font-bold text-gray-800 hover:text-yellow-500"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-comfortaa text-[20px] font-bold transition ${
                  pathname === link.href
                    ? "text-yellow-500 border-b-2 border-yellow-500"
                    : "text-gray-800 hover:text-yellow-500"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
