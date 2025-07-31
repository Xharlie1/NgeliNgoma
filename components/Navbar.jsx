'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/assets/assets';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  // Functions to control mobile menu
  const openMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    // Handles scroll event to change navbar appearance
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrolls to the top of the page and closes the mobile menu
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu(); // Ensure menu closes when navigating to top
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? ''
            : ''
        }`}
      >
      {/* Logo */}
      <Link href="/">
          <h1 className="text-2xl font-semibold tracking-wider font-Ovo 
          bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500
           bg-clip-text text-transparent cursor-pointer">
            Ngeli Ngoma<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul
            className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
           bg-white shadow-sm bg-opacity-50 border border-gray-200 transition-all duration-300`}>

          <li>
            <Link
              onClick={scrollToTop} // Always smooth scroll to top for Home
              href="#home"
              className="tracking-wider font-Ovo bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link className="tracking-wider font-Ovo bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent" href="#about">
              About me
            </Link>
          </li>
          <li>
            <Link className="tracking-wider font-Ovo bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent underline" href="#services" >
              Blog
            </Link>
          </li>
          <li>
            <Link className="tracking-wider font-Ovo bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent" href="#latest">
              Advocacy
            </Link>
          </li>
          <li>
            <Link className="tracking-wider font-Ovo bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent" href="#gallery">
              Gallery
            </Link>
          </li>
        </ul>

        {/* Contact Button and Mobile Menu Icon */}
        <div className="flex items-center gap-4">
          {/* Contact Button */}
          <a
            href="#contact"
             
              
              className={` hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo
            text-2xl font-bold tracking-wider
                ${
               isScroll
                 ? 'hover:bg-purple-400 hover:text-blue-500 transition cursor-pointer tracking-wider font-Ovo bg-gradient-to-r from-pink-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent'
                 : 'text-white'}`}
          >
            Contact
            </a>

          {/* Mobile menu icon (Button for accessibility) */}
          <button
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open menu"
            tabIndex={0} // Make focusable
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openMenu(); }} // Added Spacebar support
          >
            <Image src={assets.menu_black} alt="Menu" className="w-6 " width={24} height={24} />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64  text-gray-600 z-50 h-screen bg-rose-50 transition duration-500
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} 
          aria-hidden={!isMobileMenuOpen} // Hides from screen readers when closed
        >
          <div
            className="absolute right-6 top-6 "
            onClick={closeMenu}
            role="button"
            tabIndex={0}
            aria-label="Close menu"
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') closeMenu(); }} // Added Spacebar support
          >
            <Image src={assets.close_black} alt="Close" className="w-5 cursor-pointer" width={20} height={20} />
          </div>
          <li>
            <Link className="font-Ovo cursor-pointer" onClick={scrollToTop} href="#home">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#about" onClick={closeMenu}>
              About me
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#services" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#latest" onClick={closeMenu}>
              Advocacy
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#gallery" onClick={closeMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link className="font-Ovo" href="#contact" onClick={closeMenu}>
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;