
import React, { useState, useEffect } from 'react';
import EventCard, { EventProps } from './EventCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const EventsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [locationFilter, setLocationFilter] = useState<string>('');
  const [dateFilter, setDateFilter] = useState<string>('');
  
  const events: EventProps[] = [
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
      id: 2,
      title: "Tournoi International de Tennis",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "5 Juillet 2025",
      time: "14:00",
      location: "Lyon",
      category: "Sport",
      price: "120€"
    },
    {
      id: 3,
      title: "Exposition d'Art Moderne",
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "18 Août 2025",
      time: "10:00",
      location: "Marseille",
      category: "Culture",
      price: "25€"
    },
    {
      id: 4,
      title: "Concert de Rock Live",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "29 Mai 2025",
      time: "21:00",
      location: "Bordeaux",
      category: "Concert",
      price: "75€"
    },
    {
      id: 5,
      title: "Spectacle Cirque du Monde",
      image: "https://images.unsplash.com/photo-1573480813647-552e9b7b5394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "10 Juin 2025",
      time: "19:30",
      location: "Lille",
      category: "Spectacle",
      price: "45€"
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
      id: 7,
      title: "Festival Électronique de Nuit",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "4 Août 2025",
      time: "22:00",
      location: "Nice",
      category: "Festival",
      price: "65€"
    },
    {
      id: 8,
      title: "Conférence Tech Future",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "15 Juin 2025",
      time: "09:00",
      location: "Toulouse",
      category: "Conférence",
      price: "150€"
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
  
  // Get unique categories
  const categories = ['all', ...new Set(events.map(event => event.category.toLowerCase()))];
  
  // Get unique locations
  const locations = [...new Set(events.map(event => event.location))];
  
  // Filter events based on active filters
  const filteredEvents = events.filter(event => {
    const matchesCategory = activeFilter === 'all' || event.category.toLowerCase() === activeFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !locationFilter || event.location === locationFilter;
    const matchesDate = !dateFilter || event.date.includes(dateFilter);
    return matchesCategory && matchesSearch && matchesLocation && matchesDate;
  });
  
  return (
    <section id="events" className="py-20 bg-rich-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Événements à venir</span>
          </h2>
          <p className="text-off-white/70 max-w-2xl mx-auto">
            Découvrez notre sélection d'événements exceptionnels et réservez vos places pour des expériences inoubliables.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-10 glassmorphism p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-off-white/50" />
              <Input
                placeholder="Rechercher un événement..."
                className="pl-10 bg-transparent border-titanium/30 focus:border-gold"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div>
              <Select onValueChange={setLocationFilter} value={locationFilter}>
                <SelectTrigger className="bg-transparent border-titanium/30 focus:border-gold">
                  <SelectValue placeholder="Lieu" />
                </SelectTrigger>
                <SelectContent className="bg-rich-black border border-titanium/30">
                  <SelectItem value="">Tous les lieux</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-off-white/50" />
              <Input
                type="text"
                placeholder="Date (ex: Juin 2025)"
                className="pl-10 bg-transparent border-titanium/30 focus:border-gold"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              />
            </div>
            
            <Button 
              className="bg-gold text-rich-black hover:bg-gold/80"
              onClick={() => {
                setSearchTerm('');
                setLocationFilter('');
                setDateFilter('');
                setActiveFilter('all');
              }}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        </div>
        
        {/* Category tabs */}
        <Tabs
          defaultValue="all"
          value={activeFilter}
          onValueChange={setActiveFilter}
          className="mb-10"
        >
          <TabsList className="bg-transparent border border-titanium/30 p-1 w-full overflow-x-auto flex flex-nowrap max-w-full">
            {categories.map(category => (
              <TabsTrigger
                key={category}
                value={category}
                className={cn(
                  "flex-1 capitalize whitespace-nowrap",
                  activeFilter === category ? "bg-bordeaux text-off-white data-[state=active]:bg-bordeaux data-[state=active]:text-off-white" : ""
                )}
              >
                {category === 'all' ? 'Tous' : category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map(category => (
            <TabsContent 
              key={category} 
              value={category}
              className="mt-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))
                ) : (
                  <div className="col-span-3 text-center py-10">
                    <p className="text-off-white/70 text-lg">
                      Aucun événement ne correspond à vos critères de recherche.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <Button className="bg-gold text-rich-black hover:bg-gold/80 px-8 py-6">
            Voir tous les événements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
