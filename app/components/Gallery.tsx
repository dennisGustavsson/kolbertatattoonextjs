"use client";
import NextImage from "next/image";
import React, { useEffect } from "react";
import * as motion from "motion/react-client";

export interface GalleryItem {
	key: string;
	src: string;
	alt: string;
}

const images: GalleryItem[] = [
	{
		key: "portfolio-1",
		src: "portfolio-tatuerare-orebro-1.jpeg",
		alt: "Tatueringsstudio i Örebro",
	},
	{
		key: "kurbits-2",
		src: "kurbits-tatuerare-orebro-2.jpg",
		alt: "Tatuering i färg med kurbits på foten.",
	},
	{
		key: "neotraditional-kobra-3",
		src: "neotraditional-kobra-tatuerare-orebro-3.jpg",
		alt: "Neo-traditional tatuering av en kobra i färg",
	},
	{
		key: "neotraditional-unicorn-4",
		src: "neotraditional-unicorn-tatuerare-orebro-4.jpg",
		alt: "Neo-traditional sleeve tatuering av en unicorn i pastelfärger",
	},
	{
		key: "kurbits-tjur-5",
		src: "kurbits-tjur-tatuerare-orebro-5.jpg",
		alt: "Tatuering av en tjur med kurbits i neo-traditional stil",
	},
	{
		key: "dala-kurbits-6",
		src: "dala-kurbits-tatuerare-orebro-6.jpg",
		alt: "Kurbits-tatuering i svank",
	},
	{
		key: "neo-traditional-hand-7",
		src: "neo-traditional-hand-tatuerare-orebro-7.jpg",
		alt: "Neo-traditional hand-tatuering i färg.",
	},
	{
		key: "kurbits-8",
		src: "kurbits-tatuerare-orebro-8.jpg",
		alt: "Ryggtatuering med dalamotiv kurbits i färg.",
	},
	{
		key: "dalarna-octopus-9",
		src: "dalarna-octopus-tatuerare-orebro-9.jpg",
		alt: "Neo-traditional bläckfisk-tatuering i dalastil",
	},
	{
		key: "neotraditional-harmonica-10",
		src: "neotraditional-harmonica-tatuerare-orebro-10.jpg",
		alt: "Neo-traditional tatuering med munspel i färg.",
	},
	{
		key: "neo-traditional-sleeve-11",
		src: "neo-traditional-sleeve-tatuerare-orebro-11.png",
		alt: "Neo-traditional full sleeve i klara färger.",
	},
	{
		key: "award-winning-12",
		src: "award-winning-tattoo-tatuerare-orebro-12.jpg",
		alt: "Prisbelönt tatuerare i neo-traditionl stil.",
	},
	{
		key: "hund-portratt-13",
		src: "hund-portratt-tatuerare-orebro-13.png",
		alt: "Neo-traditional hundporträtt i färg.",
	},
];
const galleryAnimation = {
	offscreen: {
		opacity: 0, // Section is hidden and moved down
		y: 100,
	},
	onscreen: {
		opacity: 1, // Section is visible and in place
		y: 0,
		transition: {
			type: "spring" as const, // Uses spring animation for smoothness
			bounce: 0.4,
			duration: 0.8,
		},
	},
};
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
		<motion.section
			id='gallery'
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ amount: 0.4, once: true }}
			variants={galleryAnimation}
		>
			<div className='gallery-section container pt-2'>
				<h2 className='gallery-title text-end'>Galleri</h2>
				<div className='carousel gallery-grid'>
					{images.map((img) => (
						<NextImage
							key={img.key}
							className='gallery-item'
							src={`/images/${img.src}`}
							alt={`${img.alt}`}
							width={300}
							height={400}
							loading='lazy'
							sizes='(min-width: 768px) 33vw, 100vw'
							quality={65}
							// Use the original image file for the lightbox; no generated size variants
							data-fullsrc={`/images/${img.src}`}
						/>
					))}
				</div>
				<div className='text-center mt-4'>
					<button id='loadMoreBtn' className='btn-theme'>
						Visa fler bilder
					</button>
				</div>
			</div>
		</motion.section>
	);
};

export default Gallery;
