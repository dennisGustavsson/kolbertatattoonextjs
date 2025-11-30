"use client";
import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client";

// Animation variants for the BookingCTA section.
// Defines the initial (offscreen) and animated (onscreen) states.
const sectionVariants = {
	offscreen: {
		opacity: 0, // Section is hidden and moved down
		y: 100,
	},
	onscreen: {
		opacity: 1, // Section is visible and in place
		y: 0,
		transition: {
			type: "spring" as const, // Uses spring animation for smoothness
			bounce: 0.4,
			duration: 0.8,
		},
	},
};

const BookingCTA = () => (
	<motion.section
		id='booking-cta'
		className='cta-section w-full'
		initial='offscreen'
		whileInView='onscreen'
		viewport={{ amount: 0.2, once: true }}
		variants={sectionVariants}
	>
		<div className='container place-content-center mx-auto pb-2'>
			<div className='grid grid-cols-1 lg:grid-cols-2 items-center  lg:gap-8'>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.4,
						scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
					}}
					className='image-box flex justify-center lg:justify-start order-2 lg:order-1'
				>
					<Image
						height={400}
						width={800}
						src='/images/Untitled_Artwork-2.png'
						alt='flower'
					/>
				</motion.div>
				<div className='cta-box lg:mt-5 mb-5  lg:text-left order-1 lg:order-2 '>
					<h2 className=''>Redo att starta ditt nästa projekt?</h2>

					<h2 className='animate-pulse'>Boka en tid med Caroline idag!</h2>
					<Link
						className='btn-theme mt-5 mb-4 font-bold lg:text-2xl'
						href='/#contact'
					>
						Kontakta Caroline
					</Link>
				</div>
			</div>
		</div>
	</motion.section>
);

export default BookingCTA;
