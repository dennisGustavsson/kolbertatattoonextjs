import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BookingCTA from "./components/BookingCTA";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Care from "./components/Care";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";

const HomePage = () => (
  <>

    <Header />
    <div className="grid place-items-center w-full">
      <Hero />
      <BookingCTA />
      <Gallery />
      <Contact />
      <Care />
      <Footer />
      <ContactModal />
    </div>
  </>
);

export default HomePage;
