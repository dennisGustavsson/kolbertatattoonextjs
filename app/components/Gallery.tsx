"use client";
import NextImage from "next/image";
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
      document.querySelectorAll("#gallery img.gallery-item")
    ) as HTMLImageElement[];

    // Keep handler refs for proper cleanup
    const imgClickHandlers: Array<(e: MouseEvent) => void> = [];
    const keydownHandler = (e: KeyboardEvent) => {
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
    };

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
    lightbox.className = "lightbox-overlay d-none h-100svh";

    const lightboxImage = document.createElement("img");
    lightboxImage.className = "lightbox-image";
    lightboxImage.setAttribute("tabindex", "0");
    lightboxImage.decoding = "async";
    lightboxImage.loading = "eager";
    lightboxImage.setAttribute("fetchpriority", "high");

    const leftButton = document.createElement("button");
    leftButton.innerHTML = "←";
    leftButton.className = "lightbox-btn lightbox-btn-left";
    const rightButton = document.createElement("button");
    rightButton.innerHTML = "→";
    rightButton.className = "lightbox-btn lightbox-btn-right";
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "✖";
    closeButton.className = "lightbox-btn lightbox-btn-close";

    lightbox.appendChild(lightboxImage);
    lightbox.appendChild(leftButton);
    lightbox.appendChild(rightButton);
    lightbox.appendChild(closeButton);
    document.body.appendChild(lightbox);

    const fullSrcForIndex = (i: number) => {
      const el = allImages[i];
      if (!el) return undefined;
      // Prefer the original file path provided in data-fullsrc; fallback to currentSrc/src
      return el.dataset.fullsrc || el.currentSrc || el.src;
    };

    const preloadIndex = (i: number) => {
      if (i < 0 || i >= allImages.length) return;
      const src = fullSrcForIndex(i);
      if (!src) return;
      const pre = new window.Image();
      pre.decoding = "async";
      pre.src = src;
    };

    function openLightbox(index: number) {
      currentIndex = index;
      const src = fullSrcForIndex(currentIndex);
      if (src) {
        lightboxImage.src = src;
      }
      lightbox.classList.remove("d-none");
      lightboxImage.focus();
      // Preload neighbors for faster nav
      preloadIndex(currentIndex + 1);
      preloadIndex(currentIndex - 1);
    }

    function closeLightbox() {
      lightbox.classList.add("d-none");
      lightboxImage.src = "";
      currentIndex = -1;
    }

    function showNext() {
      if (currentIndex < allImages.length - 1) {
        currentIndex++;
        const src = fullSrcForIndex(currentIndex);
        if (src) {
          lightboxImage.src = src;
        }
        preloadIndex(currentIndex + 1);
      }
    }

    function showPrev() {
      if (currentIndex > 0) {
        currentIndex--;
        const src = fullSrcForIndex(currentIndex);
        if (src) {
          lightboxImage.src = src;
        }
        preloadIndex(currentIndex - 1);
      }
    }

    allImages.forEach((img, index) => {
      img.style.cursor = "pointer";
      const handler = () => openLightbox(index);
      img.addEventListener("click", handler);
      imgClickHandlers.push(handler);
    });

    rightButton.addEventListener("click", showNext);
    leftButton.addEventListener("click", showPrev);
    closeButton.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", keydownHandler);

    const toggleButton = document.getElementById("loadMoreBtn");
    let expanded = false;
    const toggleHandler = () => {
      expanded = !expanded;
      galleryItems.forEach((el, index) => {
        if (index >= maxVisible) {
          el.classList.toggle("d-none", !expanded);
        }
      });
      toggleButton!.textContent = expanded
        ? "Visa färre bilder"
        : "Visa fler bilder";
    };
    toggleButton?.addEventListener("click", toggleHandler);

    const overlayClickHandler = (e: MouseEvent) => {
      if (e.target === lightbox) closeLightbox();
    };
    lightbox.addEventListener("click", overlayClickHandler);

    return () => {
      document.body.removeChild(lightbox);

      allImages.forEach((img, i) => {
        img.removeEventListener("click", imgClickHandlers[i]);
      });

      rightButton.removeEventListener("click", showNext);
      leftButton.removeEventListener("click", showPrev);
      closeButton.removeEventListener("click", closeLightbox);
      document.removeEventListener("keydown", keydownHandler);
      toggleButton?.removeEventListener("click", toggleHandler);
      lightbox.removeEventListener("click", overlayClickHandler);
    };
  }, []);

  return (
    <section id="gallery">
      <div className="gallery-section container pt-2">
        <h2 className="gallery-title text-end">Galleri</h2>
        <div className="carousel gallery-grid">
          {images.map((img, i) => (
            <NextImage
              key={img}
              className="gallery-item"
              src={`/images/${img}`}
              alt={`Tatuering ${i + 1}`}
              width={300}
              height={400}
              loading="lazy"
              sizes="(min-width: 768px) 33vw, 100vw"
              quality={65}
              // Use the original image file for the lightbox; no generated size variants
              data-fullsrc={`/images/${img}`}
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
