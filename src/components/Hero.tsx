
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

interface SliderItem {
  image: string;
  title: string;
  description: string;
  cta: string;
}

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const sliderData: SliderItem[] = [
    {
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Concerts Exclusifs",
      description: "Vivez des moments de musique inoubliables avec nos billets premium pour les concerts les plus attendus.",
      cta: "Découvrir"
    },
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Événements Sportifs",
      description: "Soyez au cœur de l'action avec des places privilégiées pour les plus grands événements sportifs du monde.",
      cta: "Explorer"
    },
    {
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Spectacles & Théâtre",
      description: "Émerveillez-vous devant les plus grands spectacles et pièces de théâtre avec notre sélection de billets VIP.",
      cta: "Réserver"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [sliderData.length]);
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 h-full w-full">
        {sliderData.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(26, 26, 26, 0.8), rgba(117, 14, 33, 0.6)), url(${slide.image})`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-left">
            <h1 
              className={`font-playfair text-4xl md:text-6xl font-bold mb-6 ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              } transition-opacity duration-500`}
            >
              <span className="text-gold">{sliderData[currentSlide].title}</span>
            </h1>
            <p 
              className={`text-lg md:text-xl text-off-white/90 mb-8 max-w-xl ${
                isAnimating ? 'opacity-0' : 'opacity-100'
              } transition-opacity duration-500 delay-100`}
            >
              {sliderData[currentSlide].description}
            </p>
            <div className={`${isAnimating ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 delay-200`}>
              <Button className="bg-gold text-rich-black hover:bg-gold/80 mr-4">
                {sliderData[currentSlide].cta}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-rich-black">
                En savoir plus
              </Button>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="hidden md:flex justify-end">
            <div className="flex flex-col space-y-3">
              {sliderData.map((_, index) => (
                <button
                  key={index}
                  className={`w-16 h-1 transition-all ${
                    currentSlide === index ? 'bg-gold w-24' : 'bg-white/30'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rich-black to-transparent"></div>
    </section>
  );
};

export default Hero;
