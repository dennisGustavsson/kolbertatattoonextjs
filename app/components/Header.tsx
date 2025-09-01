"use client";
import React, { useEffect } from "react";
// import "../styles/header.scss";

const Header = () => {
  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const headTitle = document.getElementById("headtitleid");
    if (!menuToggle || !navMenu || !headTitle) return;
    const handleClick = () => {
      const isMenuOpen = navMenu.classList.contains("show");
      if (isMenuOpen) {
        navMenu.classList.remove("show");
        setTimeout(() => {
          headTitle.classList.remove("hideTitle");
        }, 300);
      } else {
        headTitle.classList.add("hideTitle");
        navMenu.classList.add("show");
      }
    };
    menuToggle.addEventListener("click", handleClick);
    return () => {
      menuToggle.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <header>
      <div className="py-1 py-lg-2 navigationbar">
        <nav id="nav-menu" className="nav-links container">
          <a href="#about" className="text-decoration-none m-2">
            Om mig
          </a>
          <a href="#gallery" className="text-decoration-none m-2">
            Galleri
          </a>
          <a href="#care" className="text-decoration-none m-2">
            Skötselråd
          </a>
          <a href="#contact" className="text-decoration-none m-2">
            Kontakt
          </a>
        </nav>
        <button
          id="menu-toggle"
          className="menu-toggle d-md-none mr-4"
          aria-label="Meny"
        >
          &#9776;
        </button>
      </div>
    </header>
  );
};

export default Header;
