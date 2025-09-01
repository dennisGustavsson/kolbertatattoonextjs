import Image from "next/image";
import React from "react";

// --- Legacy SCSS/Bootstrap layout ---
const Hero = () => (
  <section id="hero" className="hero__section container">
    {/* <!-- HERO WRAPPER SECTION--> */}
    <div className="hero__wrapper">
      {/* <!---HERO CONTENT SECTION--> */}
      <div className="hero__content">
        <h1 id="headtitleid" className="headtitle row">
          Kolberta Tattoo
        </h1>
        <h1 className="hero__text">
          {/* <!-- <span class="line1">Kolberta Tattoo</span><br /> --> */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-once="false"
            data-aos-easing="ease-in-out"
          >
            <span className="line2">Neo-traditionella tatueringar</span>
            <br />
            <span className="line3">Med känsla för färg och form.</span>
            <br />
            <span className="line4">I Örebro</span>
          </div>
        </h1>
      </div>

      <div className="hero__images">
        <Image
          src="/images/tatuerare-orebro.png"
          alt="Tatueringsarbete av Caroline"
          className="portrait-img"
        />
        <Image
          src="/images/Component-hero.svg"
          alt="Tatueringsarbete av Caroline"
          className="portrait-shape"
        />
      </div>
    </div>
  </section>
);

export default Hero;
