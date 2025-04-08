
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { StarIcon, Award, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603190287605-e6ade32fa852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black via-rich-black/90 to-rich-black"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">À propos de</span> <span className="text-bordeaux">Aura</span><span className="text-gold">Tickets</span>
            </h1>
            <p className="text-off-white/80 text-lg md:text-xl leading-relaxed">
              Votre partenaire de confiance pour découvrir et réserver les événements les plus exclusifs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16 bg-rich-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Histoire d'AuraTickets"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold text-rich-black p-4 rounded-lg shadow-xl font-playfair font-bold">
                  Depuis 2022
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="font-playfair text-3xl font-bold mb-6 text-gold">Notre histoire</h2>
              <p className="text-off-white/80 mb-6 leading-relaxed">
                AuraTickets est née d'une vision simple : transformer l'expérience d'achat de billets en ligne en un moment agréable et premium. Nous avons constaté que trop souvent, l'achat de billets était synonyme de frustration, de files d'attente virtuelles interminables et d'interfaces confuses.
              </p>
              <p className="text-off-white/80 mb-6 leading-relaxed">
                Fondée en 2022 par une équipe passionnée d'amateurs d'événements et d'experts en technologie, notre plateforme a été conçue pour offrir une expérience fluide et élégante, à l'image des événements de qualité que nous proposons.
              </p>
              <p className="text-off-white/80 leading-relaxed">
                Aujourd'hui, nous sommes fiers de connecter des milliers de participants à des événements exclusifs dans toute la France, avec une approche qui privilégie la qualité, la transparence et la satisfaction client.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Values */}
      <section className="py-16 glassmorphism-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl font-bold mb-6">
              <span className="text-gradient">Notre mission</span>
            </h2>
            <p className="text-off-white/80 text-lg leading-relaxed">
              Nous avons pour mission de démocratiser l'accès aux événements de qualité tout en offrant une expérience premium de bout en bout, depuis la découverte jusqu'à la participation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/30 p-8 rounded-lg border border-titanium/30 hover:border-gold transition-all">
              <div className="bg-bordeaux/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <StarIcon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4 text-gold">Excellence</h3>
              <p className="text-off-white/70">
                Nous ne proposons que des événements soigneusement sélectionnés et nous nous efforçons d'offrir un service impeccable à chaque étape.
              </p>
            </div>
            
            <div className="bg-black/30 p-8 rounded-lg border border-titanium/30 hover:border-gold transition-all">
              <div className="bg-bordeaux/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4 text-gold">Innovation</h3>
              <p className="text-off-white/70">
                Nous repoussons constamment les limites de la technologie pour rendre l'expérience de réservation plus intuitive et agréable.
              </p>
            </div>
            
            <div className="bg-black/30 p-8 rounded-lg border border-titanium/30 hover:border-gold transition-all">
              <div className="bg-bordeaux/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4 text-gold">Confiance</h3>
              <p className="text-off-white/70">
                La transparence et la sécurité sont au cœur de notre approche, garantissant une tranquillité d'esprit totale à nos utilisateurs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-rich-black">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-bold mb-10 text-center">
            <span className="text-gradient">Notre équipe</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sophie Laurent",
                position: "Fondatrice & CEO",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              },
              {
                name: "Marc Dubois",
                position: "Directeur Technique",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              },
              {
                name: "Julie Moreau",
                position: "Responsable Événements",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
              },
              {
                name: "Thomas Lefèvre",
                position: "Directeur Marketing",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gold">{member.name}</h3>
                <p className="text-off-white/70">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
