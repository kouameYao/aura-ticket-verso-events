import React from "react";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export interface EventProps {
  id: number;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  category: string;
  price: string;
  featured?: boolean;
  description?: string;
  additionalImages?: string[];
}

const EventCard = ({ event }: { event: EventProps }) => {
  return (
    <Link to={`/events/${event.id}`} className="block">
      <Card
        className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 ${
          event.featured ? "border border-gold/30" : "border-titanium/20"
        }`}
      >
        <div className="relative">
          <div className="h-48 w-full relative overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            {event.featured && (
              <div className="absolute top-0 right-0 bg-gold text-rich-black text-xs font-bold px-3 py-1">
                PREMIUM
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-rich-black to-transparent"></div>
          </div>
          <Badge className="absolute bottom-2 left-2 bg-bordeaux hover:bg-bordeaux/80">
            {event.category}
          </Badge>
        </div>

        <div className="p-4">
          <h3 className="font-playfair text-lg font-bold mb-2 text-off-white line-clamp-1">
            {event.title}
          </h3>

          <div className="space-y-2 text-sm text-off-white/80">
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-2 text-gold" />
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

          <div className="mt-4 pt-4 border-t border-titanium/20 flex items-center justify-between">
            <span className="font-bold text-gold">{event.price}</span>
            <div className="px-3 py-1 bg-bordeaux hover:bg-bordeaux/80 text-off-white text-sm rounded transition-colors">
              Réserver
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default EventCard;
