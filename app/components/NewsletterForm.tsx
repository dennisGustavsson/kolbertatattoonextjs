"use client";
import React, { useState } from "react";
import * as motion from "motion/react-client";

// Animation variants for the contact section
const newsletterVariants = {
	offscreen: {
		opacity: 0, // Start fully transparent
		x: -100, // Start shifted left
	},
	onscreen: {
		opacity: 1, // Animate to fully visible
		x: 0, // Animate to original position
		transition: {
			bounce: 0.4, // Bounce effect on transition
			duration: 0.8, // Animation duration in seconds
		},
	},
};

const NewsletterForm = () => {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");
	const [message, setMessage] = useState("");

	const isValidEmail = (value: string) =>
		value.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!isValidEmail(email)) {
			setStatus("error");
			setMessage("Ange en giltig e-postadress.");
			return;
		}
		setStatus("loading");

		try {
			const res = await fetch("/api/newsletter", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const data = await res.json();

			if (res.ok) {
				setStatus("success");
				setMessage("Tack! Du prenumererar nu på nyhetsbrevet.");
				setEmail("");
			} else {
				setStatus("error");
				setMessage(data.error || "Något gick fel, försök igen.");
			}
		} catch (error) {
			setStatus("error");
			setMessage("Ett oväntat fel inträffade.");
		}
	};

	return (
		<section id='newsletter' className='newsletter-section mt-10  w-full'>
			<motion.section
				initial='offscreen'
				whileInView='onscreen'
				viewport={{ amount: 0.3, once: true }}
				variants={newsletterVariants}
			>
				<div className='newsletter-content m-2'>
					<h3 className='text-5xl font-bold'>Nyhetsbrev</h3>
					<p className='text-2xl font-bold'>
						Få uppdateringar om lediga tider, gästspel och ny konst direkt i
						inkorgen.
					</p>

					<form onSubmit={handleSubmit} className='newsletter-form' noValidate>
						<input
							type='email'
							placeholder='Din e-postadress'
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								if (status !== "idle") {
									setStatus("idle");
									setMessage("");
								}
							}}
							required
							className='input-field'
							disabled={status === "loading"}
						/>
						<button
							type='submit'
							className='btn-theme'
							disabled={status === "loading"}
						>
							{status === "loading" ? "Skickar..." : "Prenumerera"}
						</button>
					</form>

					{message && (
						<p className={`status-message ${status}`} aria-live='polite'>
							{message}
						</p>
					)}
				</div>
			</motion.section>
		</section>
	);
};

export default NewsletterForm;
