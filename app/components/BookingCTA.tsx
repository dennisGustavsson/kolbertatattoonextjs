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
		<div className='container place-content-center mx-auto'>
			<div className='grid grid-cols-1 lg:grid-cols-2 items-center mb-7 lg:mb-4 lg:gap-8'>
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
						height={600}
						width={600}
						src='/images/hero-portrait.jpg'
						alt='tattooer-portrait'
						className='border-rad-theme-2'
					/>
				</motion.div>
				<div className='cta-box lg:mt-2 mb-5  lg:text-left order-1 lg:order-2 flex justify-between'>
					{/* <h2 className=''>Redo att starta ditt nästa projekt?</h2> */}
					<p className='lg:font-semibold lg:text-3xl m-1'>
						Mitt namn är Carro och jag är en färgglad tatuererska som flyttat
						till Örebro men som har en stor del av hjärtat kvar i Dalarna.
					</p>
					<p className='lg:font-semibold lg:text-3xl m-1'>
						Jag jobbar på Studio Svart Katt som befinner sig i en liten
						kulturhistorisk byggnad i norra/centrala Örebro.
					</p>
					<p className='lg:font-semibold lg:text-3xl m-1'>
						Jag tycker vi har en vacker kultur i Dalarna, därför gör jag mycket
						tatueringar med kurbits och andra dalainspirerade motiv.
					</p>

					<p className='lg:font-semibold lg:text-3xl m-1'>
						Jag inspireras även mycket av naturen och jag gör ofta tatueringar
						med djur och växtlighet i jordnära färger.
					</p>

					{/* <h2 className='animate-pulse'>Boka en tid med Caroline idag!</h2> */}
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
