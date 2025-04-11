import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  Zap,
  Shield,
  BarChart3,
  Star,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Underliner } from "@/components/customs/Underliner";

const Partners = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "Tous" },
    { id: "Sport", name: "Sport" },
    { id: "Culture", name: "Culture" },
    { id: "Concert", name: "Concert" },
  ];

  const partners = [
    {
      name: "Festival de Cannes",
      logo: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Culture",
      featured: true,
      description:
        "Le plus prestigieux festival de cinéma au monde, accueillant les plus grandes stars du 7ème art.",
    },
    {
      name: "Roland Garros",
      logo: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Sport",
      featured: true,
      description:
        "Tournoi international de tennis sur terre battue, l'un des quatre tournois du Grand Chelem.",
    },
    {
      name: "Stade de France",
      logo: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Sport",
      featured: true,
      description:
        "Plus grand stade de France, hôte de grands événements sportifs et musicaux depuis 1998.",
    },
    {
      name: "Olympia",
      logo: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Concert",
      featured: false,
      description:
        "Salle de spectacle parisienne mythique, accueillant les plus grands artistes depuis 1893.",
    },
    {
      name: "Opéra National de Paris",
      logo: "https://images.unsplash.com/photo-1537365587684-f490dff69498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Culture",
      featured: false,
      description:
        "Institution culturelle française d'exception dédiée à l'art lyrique et à la danse.",
    },
    {
      name: "Parc des Princes",
      logo: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Sport",
      featured: false,
      description:
        "Stade mythique de la capitale, antre du Paris Saint-Germain et théâtre de grands matchs.",
    },
    {
      name: "Théâtre du Châtelet",
      logo: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Culture",
      featured: false,
      description:
        "Théâtre parisien emblématique proposant une programmation variée et prestigieuse.",
    },
    {
      name: "AccorHotels Arena",
      logo: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Concert",
      featured: false,
      description:
        "Grande salle multifonctionnelle accueillant concerts et événements sportifs d'envergure.",
    },
  ];

  const filteredPartners =
    activeCategory === "all"
      ? partners
      : partners.filter((partner) => partner.category === activeCategory);

  const featuredPartners = partners.filter((partner) => partner.featured);

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black via-rich-black/80 to-rich-black"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="text-gradient">Nos partenaires</span>
            </h1>
            <p className="text-off-white/90 text-lg md:text-xl leading-relaxed mb-10">
              Découvrez les lieux emblématiques et organisateurs prestigieux qui
              nous font confiance pour leur billetterie.
            </p>
            <Underliner icon={<Star className="text-gold mx-4" />} />
          </motion.div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20 bg-rich-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6">
              <span className="text-gold">Partenaires vedettes</span>
            </h2>
            <p className="text-off-white/70 max-w-2xl mx-auto">
              Ces lieux d'exception nous accordent leur confiance pour la
              billetterie de leurs événements prestigieux.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group relative h-72 rounded-xl overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-rich-black text-xs font-bold uppercase py-1 px-3 rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="font-playfair text-2xl font-bold text-gold mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {partner.description}
                    </p>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Partners Grid with Filter */}
      <section className="py-16 bg-rich-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-6 text-center">
              <span className="text-gradient">Tous nos partenaires</span>
            </h2>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  variant={
                    activeCategory === category.id ? "secondary" : "ghost"
                  }
                  className={cn(
                    "rounded-full px-6",
                    activeCategory === category.id
                      ? "border-2 border-gold"
                      : "hover:bg-gold/10"
                  )}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredPartners.map((partner, index) => (
              <motion.div key={index} variants={item}>
                <div className="glassmorphism rounded-lg transition-all hover:border-gold group h-full">
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-6 h-40 flex items-center justify-center overflow-hidden rounded-lg">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-full object-cover filter brightness-90 group-hover:brightness-100 transition-all"
                      />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-gold mb-2 group-hover:text-gold">
                      {partner.name}
                    </h3>
                    <p className="text-off-white/60 text-sm mb-3">
                      {partner.category}
                    </p>
                    <p className="text-off-white/80 text-sm mb-4 flex-grow">
                      {partner.description}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gold/80 hover:text-gold self-start group-hover:text-gold group-hover:bg-gold/10 p-0"
                    >
                      Voir les événements{" "}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 glassmorphism-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-playfair text-3xl font-bold mb-6 text-gold">
              Devenir partenaire
            </h2>
            <p className="text-off-white/80 mb-8">
              Rejoignez notre réseau d'organisateurs premium et bénéficiez
              d'avantages exclusifs pour la distribution de vos billets.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-black/30 p-8 rounded-lg border border-titanium/30 hover:border-gold transition-all group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-4 text-gold">
                    {benefit.title}
                  </h3>
                  <p className="text-off-white/70">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button
              size="lg"
              className="bg-gold text-rich-black hover:bg-gold/80 text-lg px-10 py-6"
            >
              Nous contacter
            </Button>
          </motion.div>
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
