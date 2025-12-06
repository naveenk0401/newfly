// src/app/page.tsx
"use client";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ServiceGrid from "../components/ServiceGrid";

import TrustedPartners from "../components/TrustedPartners";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServiceGrid />
      <TrustedPartners />
    
    </>
  );
}

