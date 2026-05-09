"use client";
import React from "react";
import * as motion from "motion/react-client";

const reviews = [
	{
		id: 1,
		name: "Therese Gustafsson Blank",
		date: "18 feb. 2025",
		text: "Åkte 30 mil för att tatuera en kurbits hos @kolbertatattoo och det var värt varenda mil och öre! Proffsigt i både utförande och bemötande, rekommenderar varmt!",
	},
	{
		id: 2,
		name: "Emma Kleviam",
		date: "13 feb. 2025",
		text: "Proffsig. Tydlig information. Trevlig sittning. Och tatueringen blev fantastiskt fin! Caroline kan verkligen sin grej. Kurbits",
	},
	{
		id: 3,
		name: "Sara Wingsköld",
		date: "22 jan. 2025",
		text: "Jag har tatuerat mig flera gånger hos Carro och är så nöjd med allt hon gjort! Hon är otroligt tillmötesgående och lyssnar alltid på vad jag vill, sen kommer hon med råd och tips på hur den kan bli ännu bättre. Hon är otroligt noggrann och alla tatueringar jag gjort är otroligt fina & detaljrika.",
	},
	{
		id: 4,
		name: "Emma Ljung",
		date: "22 jan. 2025",
		text: "Otroligt nöjd med min tatuering hos Carro. Hon gjorde en väldigt fin skiss enligt på mina önskemål, dessutom är hon proffsig och noggrann. Rekommenderas varmt!",
	},
	{
		id: 5,
		name: "Jacqueline Sellner-Axberg",
		date: "22 jan. 2025",
		text: "Väldigt noggrann och fantastisk på alla sätt. Finns ingen som förstår precis det man vill ha och skapar det lilla extra som Carro.",
	},
	{
		id: 6,
		name: "Filippa Andersson",
		date: "för ett år sedan",
		text: "Går inte till någon annan! Otroligt linework, supernoga och så bra på det hon gör! Alla i min familj går till Carro för man vet att man får det bästa av det bästa. Skadar inte att hon är väldigt trevlig också:)",
	},
];

const reviewsVariants = {
	offscreen: {
		opacity: 0,
		y: 50,
	},
	onscreen: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring" as const,
			bounce: 0.4,
			duration: 0.8,
		},
	},
};

const Reviews = () => {
	const getFontSize = (text: string) => {
		if (text.length < 100) return "text-2xl md:text-3xl";
		if (text.length < 150) return "text-xl md:text-2xl";
		if (text.length < 200) return "text-lg md:text-xl";
		return "text-base md:text-lg";
	};

	return (
		<motion.section
			id='reviews'
			className='w-full py-10 mt-10 max-w-[100vw] overflow-hidden'
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ amount: 0.2, once: true }}
			variants={reviewsVariants}
		>
			<div className='container mx-auto px-4'>
				<h2 className='text-4xl lg:text-5xl font-bold mb-8 text-center'>
					Vad kunderna säger
				</h2>

				<div className='flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 hide-scrollbar w-full'>
					{reviews.map((review) => (
						<div
							key={review.id}
							className='snap-center shrink-0 w-[85vw] sm:w-80 md:w-96 bg-zinc-900/50 backdrop-blur-md p-8 rounded-[2.5rem] flex flex-col'
						>
							<p className={`${getFontSize(review.text)} font-medium mb-6 flex-grow italic opacity-90 leading-relaxed`}>
								"{review.text}"
							</p>
							<div className='flex items-center gap-1 mb-6 text-yellow-500'>
								{/* 5 Stars */}
								{[...Array(5)].map((_, i) => (
									<svg
										key={i}
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='w-7 h-7'
									>
										<path
											fillRule='evenodd'
											d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
											clipRule='evenodd'
										/>
									</svg>
								))}
							</div>
							<div className='mt-auto pt-6 border-t border-zinc-700/50 flex items-center gap-4'>
								<div className='w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='w-7 h-7 text-zinc-400'
									>
										<path
											fillRule='evenodd'
											d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
											clipRule='evenodd'
										/>
									</svg>
								</div>
								<div>
									<p className='font-bold text-lg'>{review.name}</p>
									<p className='text-sm opacity-70'>{review.date}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Mobile Swipe Indicator */}
				<div className='flex md:hidden justify-center items-center gap-3 mt-2 text-zinc-500 animate-pulse'>
					<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-5 h-5'>
						<path strokeLinecap='round' strokeLinejoin='round' d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18' />
					</svg>
					<span className='text-xs uppercase tracking-widest font-semibold'>Svep</span>
					<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-5 h-5'>
						<path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' />
					</svg>
				</div>
			</div>
			<style dangerouslySetInnerHTML={{ __html: `
				/* Hides scrollbar for an elegant look but keeps functionality */
				.hide-scrollbar::-webkit-scrollbar {
					display: none;
				}
				.hide-scrollbar {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
			`}} />
		</motion.section>
	);
};

export default Reviews;
