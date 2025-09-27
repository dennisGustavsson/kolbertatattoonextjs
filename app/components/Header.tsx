"use client";
import React, { useEffect } from "react";
// import "../styles/header.scss";

const Header = () => {
	useEffect(() => {
		const menuToggle = document.getElementById("menu-toggle");
		const navMenu = document.getElementById("nav-menu");
		const headTitle = document.getElementById("headtitleid");
		if (!menuToggle || !navMenu || !headTitle) return;
		// Toggle the mobile nav. When opened we add `hideTitle` to the header title
		// and `show` to the nav. When closing we remove both immediately (no delay).
		const handleClick = () => {
			const isMenuOpen = navMenu.classList.contains("show");
			if (isMenuOpen) {
				navMenu.classList.remove("show");
				headTitle.classList.remove("hideTitle");
			} else {
				headTitle.classList.add("hideTitle");
				navMenu.classList.add("show");
			}
		};

		// Helper to close the menu (used by link clicks). This always closes
		// the menu if it's open and mirrors the closing logic above.
		const closeMenu = () => {
			if (navMenu.classList.contains("show")) {
				navMenu.classList.remove("show");
				headTitle.classList.remove("hideTitle");
			}
		};

		// Add click listeners to every anchor in the nav so that when a user
		// taps a link on mobile the menu closes. We store handlers so they can
		// be removed on cleanup.
		const navLinks: NodeListOf<HTMLAnchorElement> =
			navMenu.querySelectorAll("a");
		const linkHandlers: ((this: HTMLAnchorElement, ev: MouseEvent) => void)[] =
			[];
		navLinks.forEach((link) => {
			const handler = () => {
				// Close the menu when a nav link is clicked (mobile behaviour)
				closeMenu();
			};
			linkHandlers.push(handler);
			link.addEventListener("click", handler);
		});

		menuToggle.addEventListener("click", handleClick);
		return () => {
			menuToggle.removeEventListener("click", handleClick);
			// remove link listeners added above
			navLinks.forEach((link, i) => {
				const handler = linkHandlers[i];
				if (handler) link.removeEventListener("click", handler);
			});
		};
	}, []);

	return (
		<header>
			<div className='py-1 py-lg-2 navigationbar'>
				<nav id='nav-menu' className='nav-links container'>
					<a href='#about' className='text-decoration-none m-2'>
						Om mig
					</a>
					<a href='#gallery' className='text-decoration-none m-2'>
						Galleri
					</a>
					<a href='#care' className='text-decoration-none m-2'>
						Skötselråd
					</a>
					<a href='#contact' className='text-decoration-none m-2'>
						Kontakt
					</a>
				</nav>
				<button
					id='menu-toggle'
					className='menu-toggle d-md-none mr-4'
					aria-label='Meny'
				>
					&#9776;
				</button>
			</div>
		</header>
	);
};

export default Header;
