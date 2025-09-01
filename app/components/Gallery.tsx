"use client";
import Image from "next/image";
import React, { useEffect } from "react";
// import "../styles/gallery.scss";

const images = [
  "portfolio-tatuerare-orebro-1.jpeg",
  "kurbits-tatuerare-orebro-2.jpg",
  "neotraditional-kobra-tatuerare-orebro-3.jpg",
  "neotraditional-unicorn-tatuerare-orebro-4.jpg",
  "kurbits-tjur-tatuerare-orebro-5.jpg",
  "dala-kurbits-tatuerare-orebro-6.jpg",
  "neo-traditional-hand-tatuerare-orebro-7.jpg",
  "kurbits-tatuerare-orebro-8.jpg",
  "dalarna-octopus-tatuerare-orebro-9.jpg",
  "neotraditional-harmonica-tatuerare-orebro-10.jpg",
  "neo-traditional-sleeve-tatuerare-orebro-11.png",
  "award-winning-tattoo-tatuerare-orebro-12.jpg",
  "hund-portratt-tatuerare-orebro-13.png",
];

const Gallery = () => {
  useEffect(() => {
    let currentIndex = -1;
    const allImages = Array.from(
      document.querySelectorAll("#gallery img")
    ) as HTMLImageElement[];
    const galleryItems = Array.from(
      document.querySelectorAll("#gallery .gallery-item")
    );
    const maxVisible = 3;
    galleryItems.forEach((el, index) => {
      if (index >= maxVisible) el.classList.add("d-none");
    });
    // Lightbox overlay
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.className = "lightbox-overlay d-none";
    const lightboxImage = document.createElement("img");
    lightboxImage.className = "lightbox-image";
    lightboxImage.setAttribute("tabindex", "0");
    const leftButton = document.createElement("button");
    leftButton.innerHTML = "&#11244;";
    leftButton.className = "lightbox-btn lightbox-btn-left";
    const rightButton = document.createElement("button");
    rightButton.innerHTML = "&#11246;";
    rightButton.className = "lightbox-btn lightbox-btn-right";
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "✖";
    closeButton.className = "lightbox-btn lightbox-btn-close";
    lightbox.appendChild(lightboxImage);
    lightbox.appendChild(leftButton);
    lightbox.appendChild(rightButton);
    lightbox.appendChild(closeButton);
    document.body.appendChild(lightbox);
    function openLightbox(index: any) {
      currentIndex = index;
      lightboxImage.src = allImages[currentIndex].src;
      lightbox.classList.remove("d-none");
      lightboxImage.focus();
    }
    function closeLightbox() {
      lightbox.classList.add("d-none");
      lightboxImage.src = "";
      currentIndex = -1;
    }
    function showNext() {
      if (currentIndex < allImages.length - 1) {
        currentIndex++;
        lightboxImage.src = allImages[currentIndex].src;
      }
    }
    function showPrev() {
      if (currentIndex > 0) {
        currentIndex--;
        lightboxImage.src = allImages[currentIndex].src;
      }
    }
    allImages.forEach((img, index) => {
      img.style.cursor = "pointer";
      img.addEventListener("click", () => openLightbox(index));
    });
    rightButton.addEventListener("click", showNext);
    leftButton.addEventListener("click", showPrev);
    closeButton.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", (e) => {
      if (lightbox.classList.contains("d-none")) return;
      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowRight":
          showNext();
          break;
        case "ArrowLeft":
          showPrev();
          break;
      }
    });
    const toggleButton = document.getElementById("loadMoreBtn");
    let expanded = false;
    toggleButton!.addEventListener("click", () => {
      expanded = !expanded;
      galleryItems.forEach((el, index) => {
        if (index >= maxVisible) {
          el.classList.toggle("d-none", !expanded);
        }
      });
      toggleButton!.textContent = expanded
        ? "Visa färre bilder"
        : "Visa fler bilder";
      // Fix TypeScript error: declare window.AOS type
      if (
        (window as any).AOS &&
        typeof (window as any).AOS.refresh === "function"
      ) {
        (window as any).AOS.refresh();
      }
    });
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
    return () => {
      document.body.removeChild(lightbox);
      allImages.forEach((img, index) => {
        img.removeEventListener("click", () => openLightbox(index));
      });
      rightButton.removeEventListener("click", showNext);
      leftButton.removeEventListener("click", showPrev);
      closeButton.removeEventListener("click", closeLightbox);
      document.removeEventListener("keydown", () => {});
      if (toggleButton) {
        toggleButton.removeEventListener("click", () => {});
      }
      lightbox.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <section
      id="gallery"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-once="false"
      data-aos-easing="ease-in-out"
    >
      <div className="gallery-section container pt-2">
        <h2 className="gallery-title text-end">Galleri</h2>
        <div className="carousel gallery-grid">
          {images.map((img, i) => (
            <Image
              key={img}
              className="gallery-item"
              src={`/images/${img}`}
              alt={`Tatuering ${i + 1}`}
            />
          ))}
        </div>
        <div className="text-center mt-4">
          <button id="loadMoreBtn" className="btn-theme">
            Visa fler bilder
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
