"use client";

import NextImage from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
		opacity: 0,
		y: 100,
	},
	onscreen: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring" as const,
			bounce: 0.4,
			duration: 0.8,
		},
	},
};

const Gallery = () => {
	const [expanded, setExpanded] = useState(false);
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [isMounted, setIsMounted] = useState(false);

	const overlayRef = useRef<HTMLDivElement | null>(null);
	const closeBtnRef = useRef<HTMLButtonElement | null>(null);
	const openerRef = useRef<HTMLElement | null>(null);

	const portalTarget = useMemo(() => {
		if (typeof document === "undefined") return null;
		return document.getElementById("overlay-root");
	}, []);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const visibleImages = expanded ? images : images.slice(0, 3);
	const current = images[currentIndex];

	const openLightbox = (index: number, opener: HTMLElement) => {
		openerRef.current = opener;
		setCurrentIndex(index);
		setIsLightboxOpen(true);
	};

	const closeLightbox = () => setIsLightboxOpen(false);

	const showNext = () =>
		setCurrentIndex((i) => Math.min(i + 1, images.length - 1));
	const showPrev = () => setCurrentIndex((i) => Math.max(i - 1, 0));

	useEffect(() => {
		if (!isLightboxOpen) return;

		const chrome = document.getElementById("site-chrome") as any;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		if (chrome) {
			chrome.setAttribute("aria-hidden", "true");
			chrome.inert = true;
		}

		const trapTabKey = (e: KeyboardEvent) => {
			if (e.key !== "Tab") return;
			const container = overlayRef.current;
			if (!container) return;

			const focusable = Array.from(
				container.querySelectorAll<HTMLElement>(
					"button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
				)
			).filter(
				(el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
			);

			if (focusable.length === 0) {
				e.preventDefault();
				return;
			}

			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			const active = document.activeElement as HTMLElement | null;

			if (e.shiftKey) {
				if (!active || active === first) {
					e.preventDefault();
					last.focus();
				}
			} else {
				if (active === last) {
					e.preventDefault();
					first.focus();
				}
			}
		};

		const onKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case "Escape":
					e.preventDefault();
					setIsLightboxOpen(false);
					break;
				case "ArrowRight":
					showNext();
					break;
				case "ArrowLeft":
					showPrev();
					break;
				default:
					trapTabKey(e);
			}
		};

		document.addEventListener("keydown", onKeyDown);
		requestAnimationFrame(() => closeBtnRef.current?.focus());

		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.body.style.overflow = previousOverflow;
			if (chrome) {
				chrome.removeAttribute("aria-hidden");
				chrome.inert = false;
			}
			openerRef.current?.focus?.();
		};
	}, [isLightboxOpen]);

	useEffect(() => {
		if (!isLightboxOpen) return;
		const next = images[currentIndex + 1];
		const prev = images[currentIndex - 1];
		if (next) new window.Image().src = `/images/${next.src}`;
		if (prev) new window.Image().src = `/images/${prev.src}`;
	}, [isLightboxOpen, currentIndex]);

	const lightboxNode = isLightboxOpen ? (
		<div
			ref={overlayRef}
			className='lightbox-overlay h-100svh'
			role='dialog'
			aria-modal='true'
			aria-label='Bildvisare'
			onClick={(e) => {
				if (e.target === overlayRef.current) closeLightbox();
			}}
		>
			<img
				className='lightbox-image'
				src={`/images/${current?.src ?? ""}`}
				alt={current?.alt ?? ""}
				decoding='async'
				loading='eager'
				fetchPriority='high'
			/>
			<button
				type='button'
				className='lightbox-btn lightbox-btn-left'
				aria-label='Föregående bild'
				onClick={showPrev}
				disabled={currentIndex === 0}
			>
				←
			</button>
			<button
				type='button'
				className='lightbox-btn lightbox-btn-right'
				aria-label='Nästa bild'
				onClick={showNext}
				disabled={currentIndex === images.length - 1}
			>
				→
			</button>
			<button
				ref={closeBtnRef}
				type='button'
				className='lightbox-btn lightbox-btn-close'
				aria-label='Stäng'
				onClick={closeLightbox}
			>
				✖
			</button>
		</div>
	) : null;

	return (
		<motion.section
			id='gallery'
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ amount: 0.1, once: true }}
			variants={galleryAnimation}
		>
			<div className='gallery-section container pt-1'>
				<h2 className='gallery-title text-end'>Galleri</h2>
				<div id='gallery-grid' className='carousel gallery-grid'>
					{visibleImages.map((img, index) => (
						<button
							key={img.key}
							type='button'
							className='gallery-item-button'
							aria-label={`Öppna bild: ${img.alt}`}
							onClick={(e) => openLightbox(index, e.currentTarget)}
						>
							<NextImage
								className='gallery-item'
								src={`/images/${img.src}`}
								alt={img.alt}
								width={300}
								height={400}
								loading='lazy'
								sizes='(min-width: 768px) 33vw, 100vw'
								quality={75}
							/>
						</button>
					))}
				</div>
				<div className='text-center mt-4'>
					<button
						id='loadMoreBtn'
						type='button'
						className='btn-theme'
						aria-controls='gallery-grid'
						aria-expanded={expanded}
						onClick={() => setExpanded((v) => !v)}
					>
						{expanded ? "Visa färre bilder" : "Visa fler bilder"}
					</button>
				</div>
			</div>

			{isMounted
				? portalTarget
					? createPortal(lightboxNode, portalTarget)
					: lightboxNode
				: null}
		</motion.section>
	);
};

export default Gallery;
