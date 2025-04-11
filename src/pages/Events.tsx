
import React, { useState, useRef, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  CalendarIcon,
  Filter,
  MapPin,
  Search,
  SlidersHorizontal,
  Tag,
  Users,
  X,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { EventProps } from "@/components/EventCard";
import { Badge } from "@/components/ui/badge";
import { useInfiniteQuery } from "@tanstack/react-query";

// Données de test pour les événements
const mockEvents: EventProps[] = [
  {
    id: 1,
    title: "Festival de Jazz de Paris",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?q=80&w=1740&auto=format&fit=crop",
    date: "15 juin 2025",
    time: "19:00",
    location: "Parc de la Villette, Paris",
    category: "Jazz",
    price: "À partir de 45€",
    featured: true,
    description: "Le festival de jazz le plus renommé de France avec des artistes internationaux."
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
    price: "À partir de 120€",
    featured: true
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
    price: "Gratuit",
    featured: true
  }
];

// Catégories disponibles
const categories = [
  "Tous",
  "Jazz",
  "Pop",
  "Rock",
  "Classique",
  "Électro",
  "Hip-Hop",
  "Danse",
  "Théâtre",
  "Exposition",
  "Festival",
  "Opéra"
];

// Liste des artistes pour le filtre
const artists = [
  "Céline Dion",
  "Stromae",
  "David Guetta",
  "Angèle",
  "Mylène Farmer",
  "Orelsan",
  "Daft Punk",
  "Jean-Michel Jarre",
  "Ballet du Bolchoï",
  "Orchestre de Paris"
];

// Lieux pour le filtre
const venues = [
  "AccorHotels Arena",
  "Stade de France",
  "Zénith de Paris",
  "Parc de la Villette",
  "Olympia",
  "Bataclan",
  "Opéra Garnier",
  "Théâtre du Châtelet",
  "Hippodrome de Longchamp",
  "Atelier des Lumières"
];

// Simulated API function to fetch events with pagination
const fetchEvents = async ({ 
  pageParam = 0, 
  searchQuery = "", 
  category = "Tous", 
  location = "",
  selectedDate = undefined,
  priceRange = [0, 200],
  selectedArtists = [],
  selectedVenues = []
}) => {
  const PAGE_SIZE = 3;
  
  const filteredEvents = mockEvents.filter(event => {
    if (searchQuery && !event.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    if (category !== "Tous" && event.category !== category) {
      return false;
    }

    if (location && !event.location.includes(location)) {
      return false;
    }

    if (selectedArtists.length > 0 && !selectedArtists.some(artist => event.title.includes(artist))) {
      return false;
    }

    if (selectedVenues.length > 0 && !selectedVenues.some(venue => event.location.includes(venue))) {
      return false;
    }

    const priceMatch = event.price.match(/\d+/);
    if (priceMatch) {
      const price = parseInt(priceMatch[0]);
      if (price < priceRange[0] || price > priceRange[1]) {
        return false;
      }
    }

    return true;
  });

  const start = pageParam * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const paginatedEvents = filteredEvents.slice(start, end);
  
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return {
    events: paginatedEvents,
    nextPage: paginatedEvents.length === PAGE_SIZE ? pageParam + 1 : undefined,
    totalEvents: filteredEvents.length
  };
};

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<number[]>([0, 200]);
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
  const [selectedVenues, setSelectedVenues] = useState<string[]>([]);
  
  // First get the query data
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error
  } = useInfiniteQuery({
    queryKey: ['events', searchQuery, selectedCategory, selectedLocation, selectedDate, priceRange, selectedArtists, selectedVenues],
    queryFn: ({ pageParam }) => fetchEvents({
      pageParam,
      searchQuery,
      category: selectedCategory,
      location: selectedLocation,
      selectedDate,
      priceRange,
      selectedArtists,
      selectedVenues
    }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 0
  });
  
  // Then use the variables from the query in the observer hook
  const observer = useRef<IntersectionObserver | null>(null);
  const lastEventElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage || !node) return;
      
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
  
  const activeFilters = [
    ...(selectedCategory !== "Tous" ? [{ type: "category", value: selectedCategory }] : []),
    ...(searchQuery ? [{ type: "search", value: searchQuery }] : []),
    ...(selectedDate ? [{ type: "date", value: format(selectedDate, "dd MMM yyyy", { locale: fr }) }] : []),
    ...(selectedLocation ? [{ type: "location", value: selectedLocation }] : []),
    ...(priceRange[0] > 0 || priceRange[1] < 200 ? [{ type: "price", value: `${priceRange[0]}€ - ${priceRange[1]}€` }] : []),
    ...selectedArtists.map(artist => ({ type: "artist", value: artist })),
    ...selectedVenues.map(venue => ({ type: "venue", value: venue })),
  ];

  const allEvents = data?.pages.flatMap(page => page.events) || [];
  const totalEvents = data?.pages[0]?.totalEvents || 0;

  const toggleArtist = (artist: string) => {
    if (selectedArtists.includes(artist)) {
      setSelectedArtists(selectedArtists.filter(a => a !== artist));
    } else {
      setSelectedArtists([...selectedArtists, artist]);
    }
  };

  const toggleVenue = (venue: string) => {
    if (selectedVenues.includes(venue)) {
      setSelectedVenues(selectedVenues.filter(v => v !== venue));
    } else {
      setSelectedVenues([...selectedVenues, venue]);
    }
  };

  const resetFilters = () => {
    setSelectedCategory("Tous");
    setSearchQuery("");
    setSelectedDate(undefined);
    setSelectedLocation("");
    setPriceRange([0, 200]);
    setSelectedArtists([]);
    setSelectedVenues([]);
  };

  const removeFilter = (type: string, value: string) => {
    switch (type) {
      case "category":
        setSelectedCategory("Tous");
        break;
      case "search":
        setSearchQuery("");
        break;
      case "date":
        setSelectedDate(undefined);
        break;
      case "location":
        setSelectedLocation("");
        break;
      case "price":
        setPriceRange([0, 200]);
        break;
      case "artist":
        setSelectedArtists(selectedArtists.filter(a => a !== value));
        break;
      case "venue":
        setSelectedVenues(selectedVenues.filter(v => v !== value));
        break;
    }
  };

  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />

      <section className="pt-32 pb-20 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1740&auto=format&fit=crop')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black via-rich-black/90 to-rich-black"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Nos événements</span>
            </h1>
            <p className="text-off-white/80 text-lg mb-8">
              Découvrez tous les événements disponibles et trouvez celui qui vous
              correspond.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-rich-black/80">
        <div className="container mx-auto px-4">
          <div className="glassmorphism p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-off-white/50" />
                <Input
                  type="text"
                  placeholder="Rechercher un événement..."
                  className="pl-10 bg-transparent border-titanium/30 focus:border-gold"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-titanium/30 justify-start text-left font-normal"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    {selectedLocation || "Lieu"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-full" align="start">
                  <div className="p-4">
                    <div className="space-y-2">
                      {venues.map((venue) => (
                        <div
                          key={venue}
                          className="flex items-center cursor-pointer hover:text-gold"
                          onClick={() => setSelectedLocation(venue)}
                        >
                          {venue}
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="border-titanium/30 justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? (
                      format(selectedDate, "dd MMMM yyyy", { locale: fr })
                    ) : (
                      <span>Date (ex: Juin 2025)</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex items-center justify-between mt-4">
              <Button
                variant="ghost"
                className="text-gold hover:text-gold/80"
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                {showAdvancedFilters ? "Masquer les filtres avancés" : "Filtres avancés"}
              </Button>

              <Button
                className="bg-gold text-rich-black hover:bg-gold/80"
                onClick={resetFilters}
              >
                Réinitialiser les filtres
              </Button>
            </div>

            {showAdvancedFilters && (
              <div className="mt-6 space-y-6 animate-fade-in">
                <div>
                  <h3 className="text-gold mb-3 text-sm font-medium flex items-center">
                    <Tag className="h-4 w-4 mr-2" />
                    Catégories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <div key={category} className="shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          className={`border ${
                            selectedCategory === category
                              ? "border-gold bg-gold/20 text-gold"
                              : "border-titanium/30 hover:border-gold/50"
                          }`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="border-titanium/20" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-gold mb-3 text-sm font-medium flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Artistes
                    </h3>
                    <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                      {artists.map((artist) => (
                        <div key={artist} className="flex items-center space-x-2">
                          <Checkbox
                            id={`artist-${artist}`}
                            checked={selectedArtists.includes(artist)}
                            onCheckedChange={() => toggleArtist(artist)}
                            className="border-titanium/30 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                          />
                          <Label
                            htmlFor={`artist-${artist}`}
                            className="text-sm cursor-pointer hover:text-gold"
                          >
                            {artist}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-gold mb-3 text-sm font-medium flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Lieux spécifiques
                    </h3>
                    <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                      {venues.map((venue) => (
                        <div key={venue} className="flex items-center space-x-2">
                          <Checkbox
                            id={`venue-${venue}`}
                            checked={selectedVenues.includes(venue)}
                            onCheckedChange={() => toggleVenue(venue)}
                            className="border-titanium/30 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                          />
                          <Label
                            htmlFor={`venue-${venue}`}
                            className="text-sm cursor-pointer hover:text-gold"
                          >
                            {venue}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Separator className="border-titanium/20" />

                <div>
                  <h3 className="text-gold mb-3 text-sm font-medium">Gamme de prix (€)</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 200]}
                      max={200}
                      step={5}
                      minStepsBetweenThumbs={1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-6"
                    />
                    <div className="flex justify-between text-sm text-off-white/70">
                      <span>{priceRange[0]}€</span>
                      <span>{priceRange[1]}€</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeFilters.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {activeFilters.map((filter, i) => (
                  <Badge
                    key={`${filter.type}-${i}`}
                    variant="outline"
                    className="border-gold bg-gold/10 text-gold flex items-center gap-1"
                  >
                    {filter.value}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => removeFilter(filter.type, filter.value)}
                    />
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-rich-black">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-playfair text-3xl font-bold mb-6 text-gold">
              {totalEvents > 0
                ? `Événements trouvés (${totalEvents})`
                : "Aucun événement trouvé"}
            </h2>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-16">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-12 w-12 rounded-full border-4 border-t-gold border-r-gold/40 border-b-gold/10 border-l-gold/30 animate-spin"></div>
                <p className="mt-4 text-off-white/80">Chargement des événements...</p>
              </div>
            </div>
          ) : isError ? (
            <div className="text-center py-16">
              <p className="text-off-white/80 mb-4">
                Une erreur s'est produite lors du chargement des événements.
              </p>
              <Button
                onClick={() => window.location.reload()}
                className="bg-gold text-rich-black hover:bg-gold/80"
              >
                Réessayer
              </Button>
            </div>
          ) : allEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allEvents.map((event, index) => (
                <div 
                  key={`${event.id}-${index}`}
                  ref={index === allEvents.length - 1 ? lastEventElementRef : null}
                >
                  <EventCard event={event} />
                </div>
              ))}
              
              {isFetchingNextPage && (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center py-8">
                  <div className="h-8 w-8 rounded-full border-2 border-t-gold border-r-gold/40 border-b-gold/10 border-l-gold/30 animate-spin"></div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-off-white/80 mb-4">
                Aucun événement ne correspond à vos critères de recherche.
              </p>
              <Button
                onClick={resetFilters}
                className="bg-gold text-rich-black hover:bg-gold/80"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
