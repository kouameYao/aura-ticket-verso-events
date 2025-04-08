
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      category: "Acheter des billets",
      questions: [
        {
          question: "Comment puis-je acheter des billets sur AuraTickets ?",
          answer: "Vous pouvez acheter des billets en naviguant sur notre site, en sélectionnant l'événement qui vous intéresse, puis en choisissant vos places et options. Suivez ensuite le processus de paiement sécurisé pour finaliser votre achat."
        },
        {
          question: "Quels modes de paiement acceptez-vous ?",
          answer: "Nous acceptons les principales cartes de crédit (Visa, Mastercard, American Express), PayPal, et dans certains cas, les virements bancaires pour les achats groupés."
        },
        {
          question: "Comment récupérer mes billets après achat ?",
          answer: "Vos billets sont automatiquement envoyés par email à l'adresse que vous avez fournie lors de l'achat. Vous pouvez également les retrouver dans votre espace personnel sur notre site."
        },
        {
          question: "Est-il possible d'annuler ou de rembourser mes billets ?",
          answer: "Les politiques d'annulation varient selon les événements. Veuillez consulter les conditions spécifiques mentionnées sur la page de l'événement. En général, les remboursements sont possibles jusqu'à 14 jours avant l'événement, sauf indication contraire."
        }
      ]
    },
    {
      category: "Compte utilisateur",
      questions: [
        {
          question: "Comment créer un compte sur AuraTickets ?",
          answer: "Cliquez sur 'Créer un compte' en haut à droite de notre site. Remplissez le formulaire avec vos informations personnelles et confirmez votre email pour activer votre compte."
        },
        {
          question: "Comment modifier mes informations personnelles ?",
          answer: "Connectez-vous à votre compte, puis accédez à votre profil en cliquant sur votre nom d'utilisateur. Vous pourrez y modifier vos informations personnelles, vos préférences de notification et vos méthodes de paiement."
        },
        {
          question: "J'ai oublié mon mot de passe, que faire ?",
          answer: "Sur la page de connexion, cliquez sur 'Mot de passe oublié'. Entrez votre adresse email et suivez les instructions envoyées pour réinitialiser votre mot de passe."
        }
      ]
    },
    {
      category: "Organisation d'événements",
      questions: [
        {
          question: "Comment puis-je ajouter mon événement sur AuraTickets ?",
          answer: "Créez un compte organisateur, puis accédez à votre tableau de bord. Cliquez sur 'Ajouter un événement' et suivez les étapes pour renseigner les informations nécessaires : titre, date, lieu, description, images, et options de billetterie."
        },
        {
          question: "Quels sont les frais pour les organisateurs ?",
          answer: "Nous appliquons une commission de 5% sur chaque billet vendu, plus des frais fixes de 0,50€ par transaction. Des offres spéciales sont disponibles pour les organisations à but non lucratif et les événements de grande envergure."
        },
        {
          question: "Quand serai-je payé pour mes ventes de billets ?",
          answer: "Les paiements sont effectués automatiquement 7 jours après la tenue de l'événement. Pour les événements de grande envergure, des versements partiels peuvent être organisés. Contactez notre service client pour plus d'informations."
        },
        {
          question: "Quels outils proposez-vous pour la gestion des entrées ?",
          answer: "Nous fournissons une application mobile gratuite permettant de scanner et valider les billets à l'entrée de votre événement. Vous pouvez également générer des listes d'invités et des rapports d'activité en temps réel."
        }
      ]
    },
    {
      category: "Service client",
      questions: [
        {
          question: "Comment contacter le service client ?",
          answer: "Vous pouvez nous contacter par email à support@auratickets.com, par téléphone au +33 1 23 45 67 89 (du lundi au vendredi, 9h-18h), ou via le formulaire de contact sur notre site."
        },
        {
          question: "Quel est le délai de réponse à mes demandes ?",
          answer: "Nous nous efforçons de répondre à toutes les demandes dans un délai de 24 heures ouvrées. Pour les demandes urgentes concernant des événements imminents, nous proposons un service prioritaire."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black via-rich-black/90 to-rich-black"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Questions fréquentes</span>
            </h1>
            <p className="text-off-white/80 text-lg mb-8">
              Trouvez des réponses aux questions les plus courantes concernant AuraTickets.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-off-white/50" />
              <Input 
                type="text"
                placeholder="Rechercher une question..."
                className="pl-10 bg-transparent border-titanium/30 focus:border-gold rounded-full h-12"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Content */}
      <section className="py-16 bg-rich-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqs.map((category, index) => (
              <div key={index} className="mb-12">
                <h2 className="font-playfair text-2xl font-semibold mb-6 text-gold">
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, qIndex) => (
                    <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`} className="border-titanium/30">
                      <AccordionTrigger className="text-left font-medium text-off-white hover:text-gold">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-off-white/70">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Still Have Questions */}
      <section className="py-16 glassmorphism-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl font-bold mb-6 text-gold">
              Vous n'avez pas trouvé votre réponse ?
            </h2>
            <p className="text-off-white/80 mb-8">
              Notre équipe de support se fera un plaisir de vous aider avec toute question supplémentaire.
            </p>
            <Button size="lg" className="bg-gold text-rich-black hover:bg-gold/80 text-lg px-8">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQ;
