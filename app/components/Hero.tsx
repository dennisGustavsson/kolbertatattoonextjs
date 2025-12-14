import Image from "next/image";
import React from "react";
import heroPortrait from "@/public/images/tatuerare-orebro.jpg";
import * as motion from "motion/react-client";

// --- Legacy SCSS/Bootstrap layout ---
const Hero = () => (
	<section id='about' className='hero__section container'>
		{/* <!-- HERO WRAPPER SECTION--> */}
		<div className='hero__wrapper h-100svh'>
			{/* <!---HERO CONTENT SECTION--> */}
			<div className='hero__content'>
				<motion.h1
					id='headtitleid'
					className='headtitle row'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					style={{ width: "100%" }}
				>
					Kolberta Tattoo
				</motion.h1>

				<h2 className='hero__text'>
					<div>
						<span className='line2'>Din tatuerare i Örebro</span>
						<span className='line3'>Specialist inom neo-traditional stil och dalamotiv.</span>
						{/* <br />
						<span className='line3'>
							Välkommen till Kolberta Tattoo, Örebros prisbelönta tatuerare.
							Caroline specialiserar sig på livfulla Neo-Traditionella motiv där
							varje linje, färg och skugga handlar om konstnärlig perfektion.
						</span>
						<br /> */}
					</div>
				</h2>
			</div>

			<div className='hero__images'>
				<Image
					src={heroPortrait}
					alt='Tatueringsarbete av Caroline'
					className='portrait-img rounded-full'
					height={800}
					width={600}
					priority
					fetchPriority='high'
					// placeholder="empty"
					sizes='(min-width: 800px) 50vw, 100vw'
					quality={75}
				/>
				<Image
					width={300}
					height={400}
					src='/images/Component-hero.svg'
					alt='Dekorativ form'
					className='portrait-shape'
					sizes='(min-width: 1025px) 40vw, 80vw'
					loading='lazy'
				/>
			</div>
		</div>
	</section>
);

export default Hero;
