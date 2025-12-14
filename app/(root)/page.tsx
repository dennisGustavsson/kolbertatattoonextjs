import React from "react";
import Hero from "../components/Hero";
import BookingCTA from "../components/BookingCTA";
import Contact from "../components/Contact";
import Care from "../components/Care";

// Defer heavy client-only components
import DeferredBelowFold from "../components/DeferredBelowFold";
import NewsletterForm from "../components/NewsletterForm";

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "TattooParlor", 
	name: "Kolberta Tattoo",
	image: "https://kolbertatattoo.se/images/hero-portrait.jpg",
	description:
		"Prisbelönt tatuerare i Örebro specialiserad på Neo-traditional.",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Skolgatan 38E",
		addressLocality: "Örebro",
		postalCode: "70364",
		addressCountry: "SE",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: "59.27956076662967",
		longitude: "15.22289115769777",
	},
	url: "https://kolbertatattoo.se",
	priceRange: "$$",
};

const HomePage = () => (
	<>
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>

		<div className='grid place-items-center w-full'>
			<Hero />
			<BookingCTA />
			<DeferredBelowFold />
			<Contact />
			<NewsletterForm />
			<Care />
		</div>
	</>
);

export default HomePage;
