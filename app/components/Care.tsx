import React from "react";
import { careSteps, avoidList } from "@/data/careInstructions";
import AccordionItem from "./AccordionItem";

const Care = () => (
	<section id='care' className='py-lg-5 px-lg-3 mt-5 care container'>
		<div className='care-box border-rad-theme-1 m-2'>
			{/* Introduction */}
			<h2>Skötselråd</h2>
			<p className='intro-text'>
				Efter att vi har haft en trevlig stund tillsammans och din tatuering är
				färdig så ska du ta hand om tatueringen när du kommer hem. Här kan du
				läsa alla instruktioner och få svar på andra frågor som kan dyka upp
				kring läkning.
			</p>

			<hr />

			{/* Main Care Steps */}
			<div className='w-full lg:w-1/2'>
				<div className='steps-list'>
					{careSteps.map((step, index) => (
						<AccordionItem key={index} title={step.title} text={step.text} />
					))}
				</div>

				{/* Things to avoid */}
				<div className='avoid-section mt-8'>
					<h3 className='underline mt-3'>Att undvika under läkningen</h3>
					{avoidList.map((item, index) => (
						<AccordionItem key={index} title={item.title} text={item.text} />
					))}
				</div>
			</div>

			{/* <hr /> */}

			{/* Outro */}
			<div className='outro-text'>
				<p>
					Om du följer dessa råd och instruktioner så har du gett dig själv dom
					bästa förutsättningarna för att tatueringen ska läka bra!
				</p>
				<p>
					Men tatueringen sitter på en kropp och saker kan såklart hända fast
					jag har gjort rätt och du har gjort rätt. Om inte tatueringen har läkt
					perfekt kan det i enstaka fall lossna lite bläck, om man haft en envis
					skorpa till exempel. Var isåfall inte rädd för att kontakta mig så
					fyller jag självklart i där det har lossnat. Jag erbjuder alltid en
					gratis touch-up om det skulle behövas.
				</p>
			</div>
		</div>
	</section>
);

export default Care;
