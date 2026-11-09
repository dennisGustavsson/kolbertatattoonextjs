import Image from "next/image";
import React from "react";
import heroPortrait from "@/public/images/2609120509 22.png";
import * as motion from "motion/react-client";
import ScrollIndicator from "./ScrollIndicator";
import HeroText from "./HeroText";

// Animation variants for the BookingCTA section.
// Defines the initial (offscreen) and animated (onscreen) states.

// --- Legacy SCSS/Bootstrap layout ---
const Hero = () => (
	<section id='about' className='hero__section'>
		{/* <!-- HERO WRAPPER SECTION--> */}
		<div className='hero__wrapper'>
			<Image
				width={300}
				height={400}
				src='/images/Component-hero.svg'
				alt='Dekorativ form'
				className='portrait-shape'
				loading='lazy'
			/>
			{/* <!---HERO CONTENT SECTION--> */}
			<div className='hero__content'>
				<motion.h1
					id='headtitleid'
					className='headtitle'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					style={{ width: "100%" }}
				>
					Kolberta Tattoo
				</motion.h1>
				<div className='hidden min-[1025px]:block w-full z-10'>
					<HeroText className='py-8' />
				</div>
			</div>

			<div className='hero__images'>
				<motion.div
					className='portrait-motion'
					initial={{ opacity: 0, x: 120 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
				>
					<Image
						src={heroPortrait}
						alt='Tatueringsarbete av Caroline'
						className='portrait-img'
						height={800}
						width={600}
						priority
						fetchPriority='high'
						quality={75}
					/>
				</motion.div>
			</div>

			<ScrollIndicator />
		</div>
		<div className='block min-[1025px]:hidden w-full z-10'>
			<HeroText className='py-20 md:py-32' />
		</div>
	</section>
);

export default Hero;
