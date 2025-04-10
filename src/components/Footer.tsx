import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Événements",
      links: [
        { name: "Concerts", href: "/#events" },
        { name: "Festivals", href: "/#events" },
        { name: "Sports", href: "/#events" },
        { name: "Théâtre", href: "/#events" },
        { name: "Conférences", href: "/#events" },
      ],
    },
    {
      title: "Informations",
      links: [
        { name: "À propos", href: "/about" },
        { name: "Comment ça marche", href: "/how-it-works" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" },
        { name: "Partenaires", href: "/partners" },
      ],
    },
    {
      title: "Légal",
      links: [
        { name: "Conditions générales", href: "/cgu" },
        { name: "Politique de confidentialité", href: "/privacy" },
        { name: "Cookies", href: "/cookies" },
        { name: "Mentions légales", href: "/legal" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <FacebookIcon className="h-5 w-5" />, href: "#" },
    {
      name: "Instagram",
      icon: <InstagramIcon className="h-5 w-5" />,
      href: "#",
    },
    { name: "Twitter", icon: <TwitterIcon className="h-5 w-5" />, href: "#" },
    { name: "Youtube", icon: <YoutubeIcon className="h-5 w-5" />, href: "#" },
  ];

  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo and info */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="font-playfair font-bold text-3xl">
                <span className="text-bordeaux">Aura</span>
                <span className="text-gold">Tickets</span>
              </span>
            </Link>

            <p className="text-off-white/70 mb-6 max-w-md">
              Votre plateforme premium pour accéder aux événements les plus
              exclusifs. Nous vous proposons une expérience de billetterie en
              ligne de luxe.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-3" />
                <span className="text-off-white/80">+33 1 23 45 67 89</span>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-3" />
                <span className="text-off-white/80">
                  contact@auratickets.com
                </span>
              </div>

              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gold mr-3" />
                <span className="text-off-white/80">
                  75 Avenue des Champs-Élysées, Paris
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <div key={index} className="md:col-span-1">
              <h3 className="font-playfair font-semibold text-lg mb-4 text-gold">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-off-white/70 hover:text-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-titanium/20" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-off-white/50 text-sm">
            © {currentYear} AuraTickets. Tous droits réservés.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                asChild
                className="text-titanium hover:text-gold"
              >
                <a href={social.href} aria-label={social.name}>
                  {social.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
