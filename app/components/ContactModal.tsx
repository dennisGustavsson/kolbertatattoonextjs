"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
// import "../styles/contactmodal.scss";

const ContactModal: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const overlayRef = useRef<HTMLDivElement | null>(null);
	const contentRef = useRef<HTMLDivElement | null>(null);
	const openerRef = useRef<HTMLElement | null>(null);
	const portalTarget = useMemo(() => {
		if (typeof document === "undefined") return null;
		return document.getElementById("overlay-root");
	}, []);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		const openBtn = document.getElementById("openContactModal");
		if (!openBtn) return;
		const openModal = () => {
			openerRef.current = document.activeElement as HTMLElement | null;
			setIsOpen(true);
		};
		openBtn.addEventListener("click", openModal);
		return () => openBtn.removeEventListener("click", openModal);
	}, []);

	useEffect(() => {
		if (!isOpen) return;

		const chrome = document.getElementById("site-chrome") as any;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		if (chrome) {
			chrome.setAttribute("aria-hidden", "true");
			chrome.inert = true;
		}

		const focusFirst = () => {
			const container = contentRef.current;
			if (!container) return;
			const focusable = container.querySelectorAll<HTMLElement>(
				"button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
			);
			(focusable[0] ?? container).focus();
		};

		const trapTabKey = (e: KeyboardEvent) => {
			if (e.key !== "Tab") return;
			const container = contentRef.current;
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
			if (e.key === "Escape") {
				e.preventDefault();
				setIsOpen(false);
				return;
			}
			trapTabKey(e);
		};
		document.addEventListener("keydown", onKeyDown);

		// Wait a tick so the portal mounts before focusing.
		requestAnimationFrame(focusFirst);

		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.body.style.overflow = previousOverflow;
			if (chrome) {
				chrome.removeAttribute("aria-hidden");
				chrome.inert = false;
			}
			openerRef.current?.focus?.();
		};
	}, [isOpen]);

	const modal = isOpen ? (
		<div
			id='contactModal'
			ref={overlayRef}
			className='modal-overlay'
			role='dialog'
			aria-modal='true'
			aria-labelledby='contactModalTitle'
			aria-describedby='contactModalDescription'
			onClick={(e) => {
				if (e.target === overlayRef.current) setIsOpen(false);
			}}
		>
			<div
				ref={contentRef}
				className='modal-content bg-white rounded shadow-lg position-relative text-start p-6'
				tabIndex={-1}
			>
				<h2 id='contactModalTitle' className='mb-3 font-bold text-center'>
					Innan du kontaktar mig
				</h2>
				<p id='contactModalDescription' className='mb-4'>
					Läs detta innan du mejlar – det hjälper dig att få snabbare svar:
				</p>
				<h5 className='mt-4 font-bold'>📧 Hur du kontaktar mig:</h5>
				<ul className='small mb-4'>
					<li>
						Jag svarar normalt inom 1–7 dagar – skicka igen efter 10 dagar om du
						inte fått svar.
					</li>
					<li>Du når mig via e-post.</li>
					<li>
						Vill du prata i person? Skicka ett meddelande så får du veta när jag
						är i studion.
					</li>
				</ul>
				<h5 className='mt-4 font-bold'>
					📌 Vad du ska skicka med i ditt meddelande:
				</h5>
				<ul className='small mb-4'>
					<li>Motiv</li>
					<li>Placering</li>
					<li>Ungefärlig storlek</li>
					<li>Färg eller gråskala</li>
					<li>Referensbilder</li>
					<li>Om du vill tatuera dig i Örebro eller i aktuell gäststudio</li>
					<li>Vilka dagar som passar dig</li>
					<li>Eventuella frågor</li>
				</ul>
				<h5 className='mt-3 font-bold'>⏳ Väntetid:</h5>
				<ul className='small mb-3'>
					<li>Oftast finns tid inom några veckor.</li>
				</ul>
				<h5 className='mt-3 font-bold'>💰 Priser (cirka):</h5>
				<ul className='small mb-3'>
					<li>Minimum: 1500 kr</li>
					<li>Timpris: 1250 kr / timme</li>
					<li>Heldag: 7500 kr</li>
					<li>Exakt pris ges efter tatueringen är klar.</li>
					<li>Betalning med kontanter, swish eller kort.</li>
				</ul>
				<h5 className='mt-3 font-bold'>📅 Bokning & avbokning:</h5>
				<ul className='small mb-3'>
					<li>Boka via mail eller direkt i studion.</li>
					<li>Omboka eller avboka i god tid. </li>
					<li>
						Dyker du inte upp på din bokade tid och inte hör av dig, så
						debiteras du för hela beloppet av den planerade arbetstiden.
					</li>
				</ul>
				<h5 className='mt-3 font-bold'>🎨 Design:</h5>
				<ul className='small mb-4'>
					<li>
						Fundera noga – tatueringar är permanenta, trender är inte det.
					</li>
					<li>Skicka gärna flera referensbilder.</li>
					<li>
						Kolla så att du gillar min stil. Du kan se mina arbeten här på
						hemsidan, på Instagram eller på Facebook.
					</li>
					{/* <li>Kolla min stil här eller på Instagram/Facebook innan du kontaktar mig.</li> */}
					<li>Jag skickar inga skisser i förhand.</li>
				</ul>

				<div className='grid place-content-center'>
					<a href='mailto:kolbertatattoo@gmail.com' className='btn btn-theme'>
						kolbertatattoo@gmail.com
					</a>
				</div>
				<button
					type='button'
					aria-label='Stäng'
					className='lightbox-btn lightbox-btn-close'
					onClick={() => setIsOpen(false)}
				>
					×
				</button>
			</div>
		</div>
	) : null;

	if (!isMounted) return null;
	if (portalTarget) return createPortal(modal, portalTarget);
	return modal;
};

export default ContactModal;
