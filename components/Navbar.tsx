"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "BUSINESS", href: "#services" },
    { name: "PORTFOLIO", href: "#works" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background transparency toggle
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy Logic: Find the current active section
      let current = "";
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is currently in view (top is reached, bottom is not passed)
          // Trigger point is 150px from top to account for header
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = link.href;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/10 backdrop-blur-xl backdrop-saturate-150 border-b border-white/20 shadow-lg shadow-black/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo - CLS prevention with explicit dimensions */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="relative h-12 w-44 flex items-center">
            <Image
              src="/images/bblogo_white.png"
              alt="BB Partners"
              width={180}
              height={48}
              priority
              className="object-contain"
            />
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium tracking-widest transition-colors duration-200 cursor-pointer ${
                activeSection === link.href
                  ? "text-brand-accent"
                  : "text-white hover:text-brand-accent"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-black border-b border-white/10 p-6 flex flex-col gap-6 h-screen">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-2xl font-display font-bold cursor-pointer ${
                activeSection === link.href
                  ? "text-brand-accent"
                  : "text-white hover:text-brand-accent"
              }`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
