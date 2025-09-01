"use client";
import React from "react";
import dynamic from "next/dynamic";

const Gallery = dynamic(() => import("./Gallery"), {
  ssr: false,
  loading: () => null,
});
const ContactModal = dynamic(() => import("./ContactModal"), {
  ssr: false,
  loading: () => null,
});

const DeferredBelowFold: React.FC = () => {
  return (
    <>
      <Gallery />
      <ContactModal />
    </>
  );
};

export default DeferredBelowFold;
