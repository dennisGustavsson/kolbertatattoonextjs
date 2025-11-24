import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BookingCTA from "../components/BookingCTA";
import Contact from "../components/Contact";
import Care from "../components/Care";
import Footer from "../components/Footer";

// Defer heavy client-only components
import DeferredBelowFold from "../components/DeferredBelowFold";

const HomePage = () => (
	<>
		<div className='grid place-items-center w-full'>
			<Hero />
			<BookingCTA />
			<DeferredBelowFold />
			<Contact />
			<Care />
		</div>
	</>
);

export default HomePage;
