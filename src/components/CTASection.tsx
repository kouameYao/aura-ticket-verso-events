
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-bordeaux/80 to-rich-black/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gold">Ne manquez plus</span> vos événements préférés
          </h2>
          
          <p className="text-off-white/90 text-lg mb-10 leading-relaxed">
            Inscrivez-vous maintenant pour recevoir en avant-première les annonces d'événements exclusifs et bénéficiez d'offres VIP réservées à nos membres.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gold text-rich-black hover:bg-gold/80 text-lg px-8">
              Créer un compte
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/20 hover:text-gold text-lg px-8">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
