
import React, { useState } from "react";
import EventCard, { EventProps } from "./EventCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock data for events
const mockEvents: EventProps[] = [
  {
    id: 1,
    title: "Festival de Jazz de Paris",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?q=80&w=1740&auto=format&fit=crop",
    date: "15 juin 2025",
    time: "19:00",
    location: "Parc de la Villette, Paris",
    category: "Jazz",
    price: "À partir de 45€"
  },
  {
    id: 2,
    title: "Concert de Céline Dion",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1740&auto=format&fit=crop",
    date: "20 juillet 2025",
    time: "20:30",
    location: "AccorHotels Arena, Paris",
    category: "Pop",
    price: "À partir de 79€"
  },
  {
    id: 3,
    title: "Ballet du Bolchoï",
    image: "https://images.unsplash.com/photo-1576074087307-3e4b4421e021?q=80&w=1587&auto=format&fit=crop",
    date: "5 août 2025",
    time: "19:30",
    location: "Opéra Garnier, Paris",
    category: "Danse",
    price: "À partir de 120€"
  },
  {
    id: 4,
    title: "Festival Lollapalooza",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1740&auto=format&fit=crop",
    date: "18-19 juillet 2025",
    time: "14:00",
    location: "Hippodrome de Longchamp, Paris",
    category: "Rock",
    price: "À partir de 89€"
  },
  {
    id: 5,
    title: "Exposition Van Gogh",
    image: "https://images.unsplash.com/photo-1577083552462-4aeb740319d1?q=80&w=1632&auto=format&fit=crop",
    date: "10 juin - 15 sept 2025",
    time: "10:00 - 19:00",
    location: "Atelier des Lumières, Paris",
    category: "Exposition",
    price: "À partir de 15€"
  },
  {
    id: 6,
    title: "Techno Parade",
    image: "https://images.unsplash.com/photo-1571266028243-e1f00d3f45d0?q=80&w=1664&auto=format&fit=crop",
    date: "12 septembre 2025",
    time: "12:00",
    location: "Place de la République, Paris",
    category: "Électro",
    price: "Gratuit"
  }
];

const EventsSection = () => {
  const [visibleEvents, setVisibleEvents] = useState(6);

  return (
    <section className="py-24 bg-rich-black" id="events">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <h2 className="font-playfair text-4xl font-bold mb-4 text-gold">
              Événements à venir
            </h2>
            <p className="text-off-white/70 max-w-2xl">
              Découvrez notre sélection d'événements exclusifs et sécurisez vos
              billets dès maintenant.
            </p>
          </div>
          <Link to="/events">
            <Button
              className="mt-6 md:mt-0 bg-transparent border border-gold text-gold hover:bg-gold hover:text-rich-black transition-all duration-300"
            >
              Voir tous les événements
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockEvents.slice(0, visibleEvents).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {visibleEvents < mockEvents.length && (
          <div className="text-center mt-16">
            <Button
              onClick={() => setVisibleEvents(visibleEvents + 3)}
              className="bg-gold text-rich-black hover:bg-gold/80"
            >
              Charger plus
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
