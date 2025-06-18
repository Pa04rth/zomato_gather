import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import TopVendors from "../components/TopVendors";
import EventTypes from "../components/EventTypes";
import Testimonials from "../components/Testimonials";
import MobileApp from "../components/MobileApp";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <TopVendors />
      <EventTypes />
      <Testimonials />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default Index;
