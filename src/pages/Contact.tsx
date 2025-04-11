import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, PhoneCall } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { Underliner } from "@/components/customs/Underliner";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black via-rich-black/90 to-rich-black"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Contactez-nous</span>
            </h1>
            <p className="text-off-white/80 text-lg md:text-xl mb-5">
              Une question, une suggestion ou un projet ? Notre équipe est à
              votre écoute.
            </p>
            <Underliner icon={<PhoneCall className="text-gold mx-4" />} />
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-rich-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glassmorphism p-8 rounded-lg">
              <h2 className="font-playfair text-2xl font-bold mb-6 text-gold">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      id="firstName"
                      placeholder="Votre prénom"
                      className="bg-transparent border-titanium/30 focus:border-gold"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      placeholder="Votre nom"
                      className="bg-transparent border-titanium/30 focus:border-gold"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    className="bg-transparent border-titanium/30 focus:border-gold"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    placeholder="Sujet de votre message"
                    className="bg-transparent border-titanium/30 focus:border-gold"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Votre message"
                    className="bg-transparent border-titanium/30 focus:border-gold min-h-[150px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold text-rich-black hover:bg-gold/80"
                >
                  <Send className="mr-2 h-4 w-4" /> Envoyer
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-playfair text-2xl font-bold mb-6 text-gold">
                Nos informations
              </h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-bordeaux/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-off-white mb-1">
                      Notre adresse
                    </h3>
                    <p className="text-off-white/70">
                      75 Avenue des Champs-Élysées
                      <br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-bordeaux/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-off-white mb-1">Email</h3>
                    <p className="text-off-white/70">
                      contact@auratickets.com
                      <br />
                      support@auratickets.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-bordeaux/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-off-white mb-1">
                      Téléphone
                    </h3>
                    <p className="text-off-white/70">
                      +33 1 23 45 67 89
                      <br />
                      +33 1 23 45 67 90
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-bordeaux/20 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-off-white mb-1">
                      Horaires
                    </h3>
                    <p className="text-off-white/70">
                      Lundi - Vendredi: 9h00 - 18h00
                      <br />
                      Weekend: Fermé
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 h-[250px] rounded-lg overflow-hidden border border-titanium/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047035348!2d2.3006568161003924!3d48.87072760857867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc53b0ff651%3A0x57c9a2193ce7a673!2sChamps-%C3%89lys%C3%A9es!5e0!3m2!1sfr!2sfr!4v1651042932037!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AuraTickets Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 glassmorphism-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-2xl font-bold mb-6 text-gold">
            Questions fréquentes
          </h2>
          <p className="text-off-white/80 mb-8 max-w-2xl mx-auto">
            Vous avez peut-être des questions auxquelles nous avons déjà
            répondu. Consultez notre FAQ pour trouver rapidement les
            informations dont vous avez besoin.
          </p>
          <Link to="/faq">
            <Button className="bg-gold text-rich-black hover:bg-gold/80">
              Voir la FAQ
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
