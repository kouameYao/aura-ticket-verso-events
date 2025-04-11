
import React, { useState, useRef, useCallback } from "react";
import EventCard, { EventProps } from "./EventCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";

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

// Simulated API function to fetch homepage events
const fetchHomeEvents = async ({ pageParam = 0 }) => {
  const PAGE_SIZE = 3;
  
  // Get page slice
  const start = pageParam * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const paginatedEvents = mockEvents.slice(start, end);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return {
    events: paginatedEvents,
    nextPage: end < mockEvents.length ? pageParam + 1 : undefined
  };
};

const EventsSection = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['homeEvents'],
    queryFn: fetchHomeEvents,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 0
  });

  // Observer for infinite scrolling - Now these variables are defined before they are used
  const observer = useRef<IntersectionObserver | null>(null);
  const lastEventElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node || isFetchingNextPage) return;
      
      if (observer.current) observer.current.disconnect();
      
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      
      observer.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage]
  );

  const events = data?.pages.flatMap(page => page.events) || [];

  return (
    <section className="py-16 bg-rich-black" id="events">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-gold">
              Les événements à ne pas manquer
            </h2>
            <p className="text-off-white/70 max-w-2xl">
              Réservez vos places pour les événements les plus attendus de l'année.
            </p>
          </div>
          <Link to="/events">
            <Button
              className="mt-6 md:mt-0 bg-gold hover:bg-gold/80 text-rich-black font-semibold transition-all duration-300"
            >
              Voir tous les événements
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={`${event.id}-${index}`} 
              ref={index === events.length - 1 ? lastEventElementRef : null}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>

        {isFetchingNextPage && (
          <div className="text-center mt-8">
            <div className="inline-block h-8 w-8 rounded-full border-2 border-t-gold border-r-gold/40 border-b-gold/10 border-l-gold/30 animate-spin"></div>
          </div>
        )}
        
        {status === 'error' && (
          <div className="text-center mt-16">
            <p className="text-off-white/70 mb-4">Une erreur s'est produite lors du chargement des événements.</p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-gold text-rich-black hover:bg-gold/80"
            >
              Réessayer
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
