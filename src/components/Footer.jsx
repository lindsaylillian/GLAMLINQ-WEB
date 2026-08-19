import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaInstagram,
  FaSnapchatGhost,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const whatsappUrl = "https://wa.me/256776241092";
  const instagramUrl = "https://www.instagram.com/glam__linq";
  const twitterUrl = "https://x.com/YOUR_TWITTER";
  const snapchatUrl = "https://www.snapchat.com/add/YOUR_SNAPCHAT";

  return (
    <footer className="bg-[#c6c5c5] text-white px-8 md:px-16 lg:px-24 py-14">
      <div className="max-w-7xl mx-auto">

        {/* Top Footer Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* GlamLinq Logo */}
          <Link
            to="/"
            className="text-[30px] font-light tracking-wide text-black"
          >
            <h1>
              GLAMLINQ{" "}
              <span className="script text-[28px] normal-case">
                by Lindsay
              </span>
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-7 md:gap-9 text-sm md:text-base tracking-wide text-black">
            <Link to="/#about" className="hover:opacity-60 transition">
              ABOUT
            </Link>

            <Link to="/#services" className="hover:opacity-60 transition">
              SERVICES
            </Link>

            <Link to="/#gallery" className="hover:opacity-60 transition">
              GALLERY
            </Link>

            <Link to="/#faq" className="hover:opacity-60 transition">
              FAQ
            </Link>
          </nav>

          {/* Book Now */}
          <Link
            to="/booking"
            className="border border-black rounded-full px-9 py-3 text-sm md:text-base tracking-wide text-black hover:bg-black hover:text-white transition duration-300"
          >
            BOOK NOW
          </Link>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 mt-10">

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-11 h-11 rounded-full bg-white text-[#111111] flex items-center justify-center text-xl hover:scale-110 transition duration-300"
          >
            <FaWhatsapp />
          </a>

          {/* Instagram */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 rounded-full bg-white text-[#111111] flex items-center justify-center text-xl hover:scale-110 transition duration-300"
          >
            <FaInstagram />
          </a>

          {/* X / Twitter */}
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="w-11 h-11 rounded-full bg-white text-[#111111] flex items-center justify-center text-xl hover:scale-110 transition duration-300"
          >
            <FaXTwitter />
          </a>

          {/* Snapchat */}
          <a
            href={snapchatUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Snapchat"
            className="w-11 h-11 rounded-full bg-white text-[#111111] flex items-center justify-center text-xl hover:scale-110 transition duration-300"
          >
            <FaSnapchatGhost />
          </a>

        </div>

        {/* Divider */}
        <div className="border-t border-black/15 mt-10" />

        {/* Copyright */}
        <div className="text-center mt-7 text-sm md:text-base text-black/80">
          © 2026 GlamLinq by Lindsay. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;