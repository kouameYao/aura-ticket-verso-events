
import React from 'react';
import { EventProps } from './EventCard';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedEvents = () => {
  // Sample featured events
  const featuredEvents: EventProps[] = [
    {
      id: 1,
      title: "Festival Jazz & Soul",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "12 Juin 2025",
      time: "20:00",
      location: "Paris",
      category: "Concert",
      price: "89€",
      featured: true
    },
    {
      id: 6,
      title: "Coupe de Football Nationale",
      image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "23 Juillet 2025",
      time: "16:00",
      location: "Paris",
      category: "Sport",
      price: "95€",
      featured: true
    },
    {
      id: 9,
      title: "Ballet Classique International",
      image: "https://images.unsplash.com/photo-1537365587684-f490dff69498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "2 Juillet 2025",
      time: "20:30",
      location: "Strasbourg",
      category: "Spectacle",
      price: "110€",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-rich-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Événements à la une</span>
          </h2>
          <p className="text-off-white/70 max-w-2xl mx-auto">
            Découvrez nos sélections exclusives et réservez vos places pour ces expériences exceptionnelles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredEvents.map((event, index) => (
            <Link to={`/event/${event.id}`} key={event.id} className="group">
              <div className="bg-black/30 rounded-lg overflow-hidden glassmorphism-light hover:border-gold transition-all h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-rich-black text-xs font-bold uppercase py-1 px-2 rounded">
                    {event.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-playfair text-xl font-semibold mb-3 group-hover:text-gold transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-off-white/70 mb-4 flex-grow">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gold" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gold" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gold" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gold font-semibold">{event.price}</span>
                    <Button variant="ghost" size="sm" className="text-gold group-hover:text-bordeaux">
                      Détails <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-bordeaux hover:bg-bordeaux/80 text-off-white" asChild>
            <Link to="/#events">
              Voir tous les événements <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
