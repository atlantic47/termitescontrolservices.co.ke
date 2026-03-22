"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Areas", href: "/areas" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-heading text-2xl md:text-3xl font-black text-navy uppercase tracking-tighter">
              Pestraid <span className="text-red">Kenya</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold uppercase tracking-wide text-gray-800 hover:text-red transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-red text-white px-6 py-2.5 rounded-full font-bold uppercase text-sm hover:bg-red/90 transition-colors"
            >
              Get In Touch
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-red focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-bold uppercase text-gray-800 hover:text-red transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-3">
              <Link 
                href="/contact" 
                className="w-full block text-center bg-red text-white px-6 py-3 rounded-full font-bold uppercase hover:bg-red/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
