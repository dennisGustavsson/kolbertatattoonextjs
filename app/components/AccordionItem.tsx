"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({
	title,
	text,
}: {
	title: string;
	text: string | string[];
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const formatTextWithBold = (text: string) => {
		// Om texten innehåller ett kolon, dela upp den
		if (text.includes(":")) {
			const parts = text.split(":");
			// parts[0] är rubriken (t.ex. "Om du har fått kompress")
			// parts[1] är resten av texten
			// Vi lägger tillbaka kolonet manuellt
			return (
				<>
					<strong>{parts[0]}:</strong>
					{parts[1]}
				</>
			);
		}
		return text;
	};

	return (
		<article className='care-item border-b border-gray-200 py-4'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='flex w-full items-center justify-between text-left focus:outline-none'
			>
				<h3 className='font-semibold m-0 text-2xl'>{title}</h3>
				<span
					className={`transform transition-transform duration-300 hover:pointer ${
						isOpen ? "rotate-180" : ""
					}`}
				>
					▼
				</span>
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className='overflow-hidden'
					>
						{Array.isArray(text) ? (
							// JA: Loopa igenom varje stycke
							text.map((paragraph, pIndex) => (
								<p key={pIndex} className='mb-4 text-xl'>
									{/* Tips: Här kan vi även göra texten fet om den innehåller kolon! */}
									{formatTextWithBold(paragraph)}
								</p>
							))
						) : (
							<p className='mt-2 text-white text-xl'>{text}</p>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</article>
	);
};

export default AccordionItem;
