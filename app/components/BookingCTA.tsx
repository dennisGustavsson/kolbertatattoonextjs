import React from "react";
import Link from "next/link";
import Image from "next/image";

const BookingCTA = () => (
  <section
    id="booking-cta"
    className="cta-section w-full"
    data-aos="fade-up"
    data-aos-delay="300"
    data-aos-duration="1000"
    data-aos-once="false"
    data-aos-easing="ease-in-out"
  >
    <div className="container place-content-center mx-auto pb-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-8">
        <div className="image-box flex justify-center lg:justify-start order-2 lg:order-1">
          <Image
            height={400}
            width={800}
            src="/images/Untitled_Artwork-1.png"
            alt="flower"
          />
        </div>
        <div className="cta-box lg:mt-5 lg:mb-5 text-center lg:text-left order-1 lg:order-2">
          <h2>
            Boka din tid hos Caroline. Konstnärlig precision och unika motiv i
            varje tatuering.
          </h2>
          <Link className="btn-theme mt-3 mb-4" href="/#contact">
            Kontakta Caroline
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default BookingCTA;
