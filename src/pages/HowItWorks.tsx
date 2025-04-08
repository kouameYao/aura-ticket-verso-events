import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Search,
  Ticket,
  CreditCard,
  CalendarCheck,
  ShareIcon,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-gold" />,
      title: "Recherchez vos événements",
      description:
        "Parcourez notre sélection d'événements exclusifs ou utilisez nos filtres avancés pour trouver exactement ce qui vous intéresse.",
    },
    {
      icon: <Ticket className="h-12 w-12 text-gold" />,
      title: "Sélectionnez vos billets",
      description:
        "Choisissez la catégorie de billets qui vous convient et le nombre de places dont vous avez besoin.",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-gold" />,
      title: "Paiement sécurisé",
      description:
        "Effectuez votre paiement en toute sécurité via notre plateforme qui accepte les principales cartes de crédit et méthodes de paiement.",
    },
    {
      icon: <CalendarCheck className="h-12 w-12 text-gold" />,
      title: "Recevez vos billets",
      description:
        "Vos billets électroniques seront immédiatement envoyés à votre adresse email et disponibles dans votre espace personnel.",
    },
  ];

  const organizerSteps = [
    {
      icon: <UserPlus className="h-12 w-12 text-gold" />,
      title: "Créez votre compte",
      description:
        "Inscrivez-vous gratuitement en tant qu'organisateur pour accéder à notre plateforme de gestion d'événements.",
    },
    {
      icon: <Ticket className="h-12 w-12 text-gold" />,
      title: "Ajoutez votre événement",
      description:
        "Créez une page attrayante pour votre événement avec photos, descriptions, prix et options de billets.",
    },
    {
      icon: <ShareIcon className="h-12 w-12 text-gold" />,
      title: "Partagez et vendez",
      description:
        "Utilisez nos outils de promotion intégrés et votre propre réseau pour vendre des billets via notre plateforme sécurisée.",
    },
    {
      icon: <CalendarCheck className="h-12 w-12 text-gold" />,
      title: "Gérez votre événement",
      description:
        "Accédez aux données en temps réel, communiquez avec les participants et utilisez notre application de scan à l'entrée.",
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
              "url('https://images.unsplash.com/photo-1508997449629-303059a039c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black via-rich-black/90 to-rich-black"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Comment ça marche</span>
            </h1>
            <p className="text-off-white/80 text-lg md:text-xl leading-relaxed">
              Découvrez comment AuraTickets rend l'achat et la vente de billets
              simples, sécurisés et agréables.
            </p>
          </div>
        </div>
      </section>

      {/* For Attendees */}
      <section className="py-16 bg-rich-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl font-bold mb-6 text-gold">
              Pour les participants
            </h2>
            <p className="text-off-white/80">
              Acheter des billets n'a jamais été aussi simple
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-black/30 p-8 rounded-lg border border-titanium/30 hover:border-gold transition-all relative"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-bordeaux flex items-center justify-center font-bold text-off-white">
                  {index + 1}
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">{step.icon}</div>
                  <h3 className="font-playfair text-xl font-semibold mb-4 text-gold">
                    {step.title}
                  </h3>
                  <p className="text-off-white/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Organizers */}
      <section className="py-16 glassmorphism-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-playfair text-3xl font-bold mb-6 text-gold">
              Pour les organisateurs
            </h2>
            <p className="text-off-white/80">
              Créez et gérez vos événements sans effort
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizerSteps.map((step, index) => (
              <div
                key={index}
                className="bg-black/30 p-8 rounded-lg border border-titanium/30 hover:border-gold transition-all relative"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-bordeaux flex items-center justify-center font-bold text-off-white">
                  {index + 1}
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">{step.icon}</div>
                  <h3 className="font-playfair text-xl font-semibold mb-4 text-gold">
                    {step.title}
                  </h3>
                  <p className="text-off-white/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-rich-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl font-bold mb-6">
                <span className="text-gradient">Fonctionnalités premium</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-4 text-gold">
                  Pour les participants
                </h3>
                <ul className="space-y-4">
                  {[
                    "Billets électroniques sécurisés avec QR code",
                    "Notifications personnalisées pour vos événements préférés",
                    "Recommandations basées sur vos goûts et votre historique",
                    "Support client prioritaire 24/7",
                    "Possibilité de revendre vos billets en toute sécurité",
                    "Accès aux offres exclusives et préventes",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      <span className="text-off-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-playfair text-2xl font-bold mb-4 text-gold">
                  Pour les organisateurs
                </h3>
                <ul className="space-y-4">
                  {[
                    "Tableau de bord analytique complet",
                    "Personnalisation de la page d'événement",
                    "Gestion des codes promotionnels et remises",
                    "Application mobile de scan et validation des billets",
                    "Outils de marketing intégrés",
                    "Paiements sécurisés avec versements automatiques",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      <span className="text-off-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bordeaux/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold mb-6 text-gold">
              Prêt à démarrer ?
            </h2>
            <p className="text-off-white/90 text-lg mb-8">
              Que vous soyez participant ou organisateur, AuraTickets vous offre
              une expérience premium à chaque étape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gold text-rich-black hover:bg-gold/80 text-lg px-8"
                asChild
              >
                <Link to="/">Découvrir les événements</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold/20 hover:text-gold text-lg px-8"
              >
                Créer un compte
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
