
import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarPlus, Users, BarChart3, Ticket } from 'lucide-react';

const CreatorSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-rich-black/90 to-bordeaux/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">Créez et vendez</span><br />
                vos propres événements
              </h2>
              
              <p className="text-off-white/90 text-lg mb-8 leading-relaxed">
                Vous organisez des événements ? AuraTickets vous offre une plateforme premium pour créer, gérer et promouvoir vos événements avec facilité. Rejoignez notre communauté d'organisateurs et donnez vie à vos projets.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-gold text-rich-black hover:bg-gold/80">
                  Créer un compte organisateur
                </Button>
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/20">
                  En savoir plus
                </Button>
              </div>
              
              <div className="flex items-center text-off-white/70">
                <span className="text-gold font-bold text-lg mr-2">+1000</span> organisateurs font confiance à AuraTickets
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/50 glassmorphism p-6 rounded-lg border border-titanium/30 hover:border-gold transition-all">
                <CalendarPlus className="h-10 w-10 text-gold mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2 text-gold">Créez facilement</h3>
                <p className="text-off-white/70">Créez des événements en quelques clics avec notre interface intuitive.</p>
              </div>
              
              <div className="bg-black/50 glassmorphism p-6 rounded-lg border border-titanium/30 hover:border-gold transition-all">
                <Ticket className="h-10 w-10 text-gold mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2 text-gold">Vendez partout</h3>
                <p className="text-off-white/70">Gérez vos ventes de billets sur web, mobile et en point de vente.</p>
              </div>
              
              <div className="bg-black/50 glassmorphism p-6 rounded-lg border border-titanium/30 hover:border-gold transition-all">
                <Users className="h-10 w-10 text-gold mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2 text-gold">Élargissez votre public</h3>
                <p className="text-off-white/70">Atteignez une nouvelle audience grâce à notre réseau d'acheteurs.</p>
              </div>
              
              <div className="bg-black/50 glassmorphism p-6 rounded-lg border border-titanium/30 hover:border-gold transition-all">
                <BarChart3 className="h-10 w-10 text-gold mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2 text-gold">Analysez vos résultats</h3>
                <p className="text-off-white/70">Accédez à des statistiques détaillées sur vos ventes et participants.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
