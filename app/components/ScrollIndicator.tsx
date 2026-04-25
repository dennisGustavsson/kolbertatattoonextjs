"use client";

import React, { useState, useEffect } from "react";

const ScrollIndicator = () => {
	const [hasScrolled, setHasScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setHasScrolled(true);
			} else {
				setHasScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Check on mount

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className={`scroll-indicator transition-opacity duration-500 ${
				hasScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
			}`}
		>
			<svg
				className='scroll-arrow'
				xmlns='http://www.w3.org/2000/svg'
				width='32'
				height='32'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='M12 5v14M19 12l-7 7-7-7' />
			</svg>
		</div>
	);
};

export default ScrollIndicator;
