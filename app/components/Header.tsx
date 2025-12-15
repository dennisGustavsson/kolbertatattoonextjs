"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import "../styles/header.scss";

const Header = () => {
	const pathname = usePathname();
	const isHomePage = pathname === "/";
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const getSectionHref = (hash: string) => {
		if (hash.startsWith("/")) return hash;
		return isHomePage ? hash : `/${hash}`;
	};

	const handleNewsletterClick = (
		event: React.MouseEvent<HTMLAnchorElement>
	) => {
		const section = document.getElementById("newsletter");
		if (section) {
			event.preventDefault();
			const prefersReducedMotion = window.matchMedia(
				"(prefers-reduced-motion: reduce)"
			).matches;
			section.scrollIntoView({
				behavior: prefersReducedMotion ? "auto" : "smooth",
				block: "center",
			});
		}
	};

	const closeMobileMenu = () => setIsMobileMenuOpen(false);

	return (
		<header>
			<div className='py-1 py-lg-2 navigationbar'>
				<nav
					id='nav-menu'
					className={`nav-links container ${isMobileMenuOpen ? "show" : ""}`}
				>
					<Link
						href={getSectionHref("/")}
						className='text-decoration-none m-2'
						onClick={closeMobileMenu}
					>
						Start
					</Link>
					<Link
						href={getSectionHref("/about")}
						className='text-decoration-none m-2'
						onClick={closeMobileMenu}
					>
						Om mig
					</Link>
					<Link
						href={getSectionHref("#gallery")}
						className='text-decoration-none m-2'
						onClick={closeMobileMenu}
					>
						Galleri
					</Link>
					<Link
						href='/blog'
						className='text-decoration-none m-2'
						onClick={closeMobileMenu}
					>
						Blogg
					</Link>
					<Link
						href={getSectionHref("#care")}
						className='text-decoration-none m-2'
						onClick={closeMobileMenu}
					>
						Skötselråd
					</Link>
					<Link
						href={getSectionHref("#contact")}
						className='text-decoration-none m-2'
						onClick={closeMobileMenu}
					>
						Kontakt
					</Link>
					<Link
						href={getSectionHref("#newsletter")}
						className='text-decoration-none m-2'
						onClick={(e) => {
							handleNewsletterClick(e);
							closeMobileMenu();
						}}
					>
						Nyhetsbrev
					</Link>
				</nav>
				<button
					id='menu-toggle'
					className='menu-toggle d-md-none mr-4'
					aria-label='Meny'
					aria-controls='nav-menu'
					aria-expanded={isMobileMenuOpen}
					onClick={() => setIsMobileMenuOpen((v) => !v)}
				>
					&#9776;
				</button>
			</div>
		</header>
	);
};

export default Header;
