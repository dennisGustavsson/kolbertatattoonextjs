"use client";
import Image from "next/image";
import React, { useEffect } from "react";
// import "../styles/footer.scss";

const Footer = () => {
  useEffect(() => {
    const footer = document.querySelector("footer");
    const background = document.querySelector(".footer-image");
    if (!footer || !background) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            background.classList.add("visible");
          } else {
            background.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="w-full bg-white border-top mt-5">
      <div className=" py-3 text-center text-muted">
        © {new Date().getFullYear()} Kolberta Tattoo. Alla rättigheter
        förbehållna.
      </div>
      <div className="footer-image container-fluid">
        <Image
          src="/images/neo-traditional-tattoo-orebro.png"
          alt="big flower"
          layout="responsive"
        />
      </div>
    </footer>
  );
};

export default Footer;
