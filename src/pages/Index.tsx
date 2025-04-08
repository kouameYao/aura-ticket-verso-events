import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventsSection from "@/components/EventsSection";
import CTASection from "@/components/CTASection";
import FeaturedEvents from "@/components/FeaturedEvents";
import CreatorSection from "@/components/CreatorSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />
      <Hero />
      <FeaturedEvents />
      <EventsSection />
      <CreatorSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
