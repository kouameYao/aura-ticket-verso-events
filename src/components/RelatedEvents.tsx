
import React from 'react';
import { ArrowRight } from 'lucide-react';
import EventCard, { EventProps } from './EventCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface RelatedEventsProps {
  category: string;
  currentEventId: number;
  events: EventProps[];
}

const RelatedEvents: React.FC<RelatedEventsProps> = ({ category, currentEventId, events }) => {
  // Filter events by category and exclude the current event
  const filteredEvents = events
    .filter(event => event.category === category && event.id !== currentEventId)
    .slice(0, 4); // Take maximum 4 events
  
  return (
    <section className="py-16 bg-rich-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold">
            <span className="text-gradient">Événements similaires</span>
          </h2>
          <Link to="/">
            <Button variant="link" className="text-gold hover:text-gold/80 gap-2">
              Voir tous les événements
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 glassmorphism-light rounded-lg">
            <p className="text-off-white/70">
              Aucun événement similaire n'est disponible pour le moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RelatedEvents;
