import React from "react";
import * as motion from "motion/react-client";

const HeroText = ({ className = "" }: { className?: string }) => (
	<div className={`hero-text-section w-full flex justify-center items-center overflow-hidden ${className}`}>
		<h2 className='hero__text'>
			<div>
				<motion.span 
					className='line3 block'
					initial={{ opacity: 0, x: -60 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					Din tatuerare i Örebro
				</motion.span>
				<motion.span 
					className='line3 block'
					initial={{ opacity: 0, x: 60 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
				>
					Specialist inom neo-traditional stil och dalamotiv.
				</motion.span>
			</div>
		</h2>
	</div>
);

export default HeroText;
