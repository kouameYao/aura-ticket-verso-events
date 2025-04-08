import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Zap, Shield, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const Partners = () => {
  const partners = [
    {
      name: "Festival de Cannes",
      logo: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Culture",
    },
    {
      name: "Roland Garros",
      logo: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Sport",
    },
    {
      name: "Stade de France",
      logo: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Sport",
    },
    {
      name: "Olympia",
      logo: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Concert",
    },
    {
      name: "Opéra National de Paris",
      logo: "https://images.unsplash.com/photo-1537365587684-f490dff69498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Culture",
    },
    {
      name: "Parc des Princes",
      logo: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Sport",
    },
    {
      name: "Théâtre du Châtelet",
      logo: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Culture",
    },
    {
      name: "AccorHotels Arena",
      logo: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Concert",
    },
  ];

  const benefits = [
    {
      icon: <BadgeCheck className="h-12 w-12 text-gold" />,
      title: "Visibilité premium",
      description:
        "Présentez vos événements en tête de liste et bénéficiez d'une mise en avant sur notre page d'accueil.",
    },
    {
      icon: <Zap className="h-12 w-12 text-gold" />,
      title: "Outils avancés",
      description:
        "Accédez à des outils de gestion et d'analyse exclusifs pour maximiser vos ventes de billets.",
    },
    {
      icon: <Shield className="h-12 w-12 text-gold" />,
      title: "Support dédié",
      description:
        "Un gestionnaire de compte personnel vous accompagne pour optimiser vos campagnes de billetterie.",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-gold" />,
      title: "Insights détaillés",
      description:
        "Obtenez des rapports analytiques complets sur les performances de vos événements et le comportement des acheteurs.",
    },
  ];

  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black via-rich-black/90 to-rich-black"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Nos partenaires</span>
            </h1>
            <p className="text-off-white/80 text-lg md:text-xl leading-relaxed">
              Découvrez les lieux emblématiques et organisateurs prestigieux qui
              nous font confiance pour leur billetterie.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-rich-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-black/30 p-6 rounded-lg border border-titanium/30 hover:border-gold transition-all group"
              >
                <div className="h-24 flex items-center justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain filter brightness-75 group-hover:brightness-100 transition-all"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gold">{partner.name}</h3>
                  <p className="text-off-white/60 text-sm">
                    {partner.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 glassmorphism-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl font-bold mb-6 text-gold">
              Devenir partenaire
            </h2>
            <p className="text-off-white/80 mb-8">
              Rejoignez notre réseau d'organisateurs premium et bénéficiez
              d'avantages exclusifs pour la distribution de vos billets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-black/30 p-8 rounded-lg border border-titanium/30 hover:border-gold transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="font-playfair text-xl font-semibold mb-4 text-gold">
                    {benefit.title}
                  </h3>
                  <p className="text-off-white/70">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gold text-rich-black hover:bg-gold/80 text-lg px-8"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-rich-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl font-bold mb-6">
              <span className="text-gradient">Ce qu'ils disent de nous</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "AuraTickets a transformé notre approche de la billetterie en ligne. Leur plateforme intuitive nous a permis d'augmenter nos ventes de 30% dès le premier mois.",
                author: "Marie Dufour",
                position: "Directrice, Festival Jazz à Paris",
              },
              {
                quote:
                  "Le niveau de personnalisation et le support client sont incomparables. Notre public apprécie particulièrement la facilité d'achat et la sécurité.",
                author: "Thomas Leroy",
                position: "Responsable Événements, Stade Lyon",
              },
              {
                quote:
                  "Depuis que nous utilisons AuraTickets, nos événements sont systématiquement complets. La visibilité offerte par la plateforme est exceptionnelle.",
                author: "Claire Martin",
                position: "Fondatrice, Théâtre Moderne",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="glassmorphism p-8 rounded-lg relative"
              >
                <div className="text-gold text-6xl font-serif absolute top-4 left-4 opacity-20">
                  "
                </div>
                <p className="text-off-white/80 italic mb-6 relative z-10">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-bordeaux/50 flex items-center justify-center text-gold font-bold mr-3">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gold">
                      {testimonial.author}
                    </p>
                    <p className="text-off-white/60 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bordeaux/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold mb-6 text-gold">
              Prêt à rejoindre nos partenaires ?
            </h2>
            <p className="text-off-white/90 text-lg mb-8">
              Donnez à vos événements la visibilité qu'ils méritent et
              simplifiez votre processus de billetterie.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gold text-rich-black hover:bg-gold/80 text-lg px-8"
                asChild
              >
                <Link to="/contact">Nous contacter</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold/20 hover:text-gold text-lg px-8"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
