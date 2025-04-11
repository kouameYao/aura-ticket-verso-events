
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const backgroundImage = "public/lovable-uploads/9cb67d57-19bb-4085-92eb-ee4d986fad2b.png";

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(26, 26, 26, 0.7), rgba(117, 14, 33, 0.7)), url(${backgroundImage})`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-gold">
              Événements Sportifs
            </h1>
            <p className="text-lg md:text-xl text-off-white/90 mb-8 max-w-2xl">
              Découvrez nos billets exclusifs pour les événements sportifs les plus attendus. Ne manquez aucun match, aucune compétition.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/events">
                <Button className="bg-gold text-rich-black hover:bg-gold/80 font-bold text-base px-8 py-6">
                  Explorer
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-rich-black font-bold text-base px-8 py-6"
                asChild
              >
                <Link to="/#events">
                  En savoir plus
                </Link>
              </Button>
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
