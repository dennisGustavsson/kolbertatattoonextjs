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
          {/* 
            <!-- Caroline är specialiserad på neo-traditionella motiv med tydliga
            linjer, djupa färger och en konstnärlig känsla för det unika. --> */}
        </h1>
      </div>

      <div className="hero__images">
        <img
          src="/images/tatuerare-orebro.png"
          alt="Tatueringsarbete av Caroline"
          className="portrait-img"
        />
        <img
          src="/images/Component-hero.svg"
          alt="Tatueringsarbete av Caroline"
          className="portrait-shape"
        />
      </div>
    </div>
  </section>
  // <section id="hero" className="hero-section">
  //   <div className="hero__wrapper">
  //     <div className="hero__content">
  //       <h1 className="mb-3 headtitle row" id="headtitleid">
  //         Kolberta Tattoo
  //       </h1>
  //       <h1 className="hero__text">
  //         <div>
  //           <span className="line2">Neo-traditionella tatueringar</span>
  //           <br />
  //           <span className="line3">Med känsla för färg och form.</span>
  //           <br />
  //           <span className="line4">I Örebro</span>
  //         </div>
  //       </h1>
  //     </div>
  //     <div className="hero__images">
  //       <img
  //         src="/images/tatuerare-orebro.png"
  //         alt="Tatueringsarbete av Caroline"
  //         className="portrait-img"
  //       />
  //       <img
  //         src="/images/Component-hero.svg"
  //         alt="Tatueringsarbete av Caroline"
  //         className="portrait-shape"
  //       />
  //     </div>
  //   </div>
  // </section>
);

// --- TailwindCSS Responsive Layout ---
// const Hero = () => (
//   <section id="hero" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
//     <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between min-h-screen">
//       <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left z-10">
//         <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
//           Kolberta Tattoo
//         </h1>
//         <div className="mt-2">
//           <span className="block text-xl md:text-3xl font-semibold text-sage-200 italic mb-2">Neo-traditionella tatueringar</span>
//           <span className="block text-lg md:text-2xl text-sage-100 mb-2">Med känsla för färg och form.</span>
//           <span className="block text-lg md:text-2xl text-sage-100">I Örebro</span>
//         </div>
//       </div>
//       <div className="flex-1 flex flex-col items-center justify-center relative mt-8 md:mt-0">
//         <img
//           src="/images/tatuerare-orebro.png"
//           alt="Tatueringsarbete av Caroline"
//           className="w-64 h-auto md:w-96 rounded-lg shadow-lg z-10"
//         />
//         <img
//           src="/images/Component-hero.svg"
//           alt="Tatueringsarbete av Caroline"
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 md:w-[32rem] opacity-60 pointer-events-none z-0"
//         />
//       </div>
//     </div>
//   </section>
// );

export default Hero;
