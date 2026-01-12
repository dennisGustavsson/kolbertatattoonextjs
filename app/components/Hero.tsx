import Image from "next/image";
import React from "react";
import heroPortrait from "@/public/images/tatuerare-orebro.jpg";
import * as motion from "motion/react-client";

// --- Legacy SCSS/Bootstrap layout ---
const Hero = () => (
	<section id='about' className='hero__section'>
		{/* <!-- HERO WRAPPER SECTION--> */}
		<div className='hero__wrapper h-100svh !block min-[1180px]:!grid min-[1180px]:!grid-cols-2 min-[1181px]:!gap-4'>
			{/* <!---HERO CONTENT SECTION--> */}
			<div className='hero__content !absolute min-[1180px]:!static !inset-0 !flex !flex-col !items-baseline !p-8 min-[1180px]:!p-0'>
				<motion.h1
					id='headtitleid'
					className='headtitle row !relative !top-8 min-[1180px]:!top-0 !text-[5rem] min-[1180px]:!text-[10rem]'
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					style={{ width: "100%" }}
				>
					Kolberta Tattoo
				</motion.h1>

				<h2 className='hero__text !mt-24 min-[1180px]:!mt-0 !z-10 !h-full !flex !flex-col !justify-end min-[1180px]:!justify-start'>
					<div>
						<span className='line2 !text-[3rem] min-[1180px]:!text-[5rem]'>
							Din tatuerare i Örebro
						</span>
						<span className='line3 !text-[1.8rem] min-[1180px]:!text-[2.7rem] !pt-2'>
							Specialist inom neo-traditional stil och dalamotiv.
						</span>
					</div>
				</h2>
			</div>

			<div className='hero__images !absolute min-[1180px]:!static !inset-0 !overflow-hidden min-[1180px]:!overflow-visible'>
				<Image
					src={heroPortrait}
					alt='Tatueringsarbete av Caroline'
					className='portrait-img rounded-full !absolute !left-1/2 !-translate-x-1/2 !bottom-0 !w-[90%] !max-w-none min-[1180px]:!static min-[1180px]:!left-auto min-[1180px]:!translate-x-0 min-[1180px]:!w-auto min-[1180px]:!h-[90%] min-[1180px]:!max-w-[80%]'
					height={800}
					width={600}
					priority
					fetchPriority='high'
					sizes='(min-width: 1180px) 50vw, 100vw'
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
