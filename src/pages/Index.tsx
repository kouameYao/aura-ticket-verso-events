
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventsSection from '@/components/EventsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />
      <Hero />
      <EventsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
