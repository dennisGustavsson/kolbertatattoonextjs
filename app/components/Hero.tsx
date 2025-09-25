import Image from "next/image";
import React from "react";
import heroPortrait from "@/public/images/tatuerare-orebro.png";
import * as motion from "motion/react-client";

// --- Legacy SCSS/Bootstrap layout ---
const Hero = () => (
  <section id="about" className="hero__section container">
    {/* <!-- HERO WRAPPER SECTION--> */}
    <div className="hero__wrapper h-100svh">
      {/* <!---HERO CONTENT SECTION--> */}
      <div className="hero__content">
        
          <motion.h1
            id="headtitleid"
            className="headtitle row"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{ width: '100%' }}
          >
            Kolberta Tattoo
          </motion.h1>
        
        <h1 className="hero__text">
          {/* <!-- <span class="line1">Kolberta Tattoo</span><br /> --> */}
          <div>
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
          src={heroPortrait}
          alt="Tatueringsarbete av Caroline"
          className="portrait-img"
          height={900}
          width={600}
          priority
          fetchPriority="high"
          // placeholder="empty"
          sizes="(min-width: 1025px) 50vw, 100vw"
          quality={70}
        />
        <Image
          width={300}
          height={400}
          src="/images/Component-hero.svg"
          alt="Dekorativ form"
          className="portrait-shape"
          sizes="(min-width: 1025px) 40vw, 80vw"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default Hero;
