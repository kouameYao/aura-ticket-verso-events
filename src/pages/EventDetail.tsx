
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CalendarDays, 
  Clock, 
  MapPin, 
  Tag, 
  ArrowLeft,
  Share2,
  Heart,
  Image
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventTimer from '@/components/EventTimer';
import TicketSelection from '@/components/TicketSelection';
import RelatedEvents from '@/components/RelatedEvents';
import { EventProps } from '@/components/EventCard';
import ImageGallery from '@/components/ImageGallery';

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
    featured: true,
    additionalImages: [
      "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ],
    description: "Plongez dans l'univers envoûtant du jazz et de la soul lors de ce festival exceptionnel. Des artistes de renommée mondiale se réunissent pour vous offrir des performances inoubliables dans une ambiance chaleureuse et conviviale."
  },
  {
    id: 2,
    title: "Tournoi International de Tennis",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "5 Juillet 2025",
    time: "14:00",
    location: "Lyon",
    category: "Sport",
    price: "120€",
    additionalImages: [
      "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1562552052-c2a9512c9b38?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ],
    description: "Assistez à ce tournoi international de tennis où les meilleurs joueurs du monde s'affrontent dans des matchs palpitants. Vivez l'excitation de chaque échange et soutenez vos joueurs favoris dans cette compétition de haut niveau."
  },
  {
    id: 3,
    title: "Exposition d'Art Moderne",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "18 Août 2025",
    time: "10:00",
    location: "Marseille",
    category: "Culture",
    price: "25€",
    additionalImages: [
      "https://images.unsplash.com/photo-1594971475674-bea5c94272c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ],
    description: "Découvrez les œuvres fascinantes d'artistes contemporains lors de cette exposition d'art moderne. Une immersion dans l'univers créatif qui repousse les limites de l'expression artistique et vous invite à réfléchir sur notre monde actuel."
  },
  {
    id: 4,
    title: "Concert de Rock Live",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "29 Mai 2025",
    time: "21:00",
    location: "Bordeaux",
    category: "Concert",
    price: "75€",
    additionalImages: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ],
    description: "Laissez-vous emporter par l'énergie électrisante de ce concert de rock live. Des guitares enflammées, des rythmes puissants et une atmosphère survoltée vous attendent pour une soirée inoubliable pleine d'émotions et de passion musicale."
  },
  {
    id: 5,
    title: "Spectacle Cirque du Monde",
    image: "https://images.unsplash.com/photo-1573480813647-552e9b7b5394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "10 Juin 2025",
    time: "19:30",
    location: "Lille",
    category: "Spectacle",
    price: "45€",
    additionalImages: [
      "https://images.unsplash.com/photo-1566840570210-d9cad6e40266?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1572959654331-21d3c7f5a7c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ],
    description: "Émerveillez-vous devant les prouesses extraordinaires des artistes du Cirque du Monde. Acrobaties vertigineuses, numéros poétiques et performances à couper le souffle se succèdent dans ce spectacle féérique qui ravira petits et grands."
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
    featured: true,
    additionalImages: [
      "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1571741443338-33ab6b9d6670?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ],
    description: "Vivez l'excitation de la finale de la Coupe de Football Nationale. L'ambiance électrique du stade, les actions décisives et la tension palpable d'un match qui promet d'entrer dans l'histoire du sport français."
  },
  {
    id: 7,
    title: "Festival Électronique de Nuit",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "4 Août 2025",
    time: "22:00",
    location: "Nice",
    category: "Festival",
    price: "65€",
    additionalImages: [
      "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1642137928093-accdb425c4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ],
    description: "Dansez jusqu'au bout de la nuit lors de ce festival électronique incontournable. Les meilleurs DJs internationaux, des jeux de lumières spectaculaires et une ambiance survoltée vous promettent une expérience sensorielle complète."
  },
  {
    id: 8,
    title: "Conférence Tech Future",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "15 Juin 2025",
    time: "09:00",
    location: "Toulouse",
    category: "Conférence",
    price: "150€",
    additionalImages: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ],
    description: "Explorez les technologies de demain lors de cette conférence animée par des experts visionnaires. Intelligence artificielle, réalité virtuelle et innovations disruptives sont au programme de cet événement incontournable pour les passionnés de tech."
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
    featured: true,
    additionalImages: [
      "https://images.unsplash.com/photo-1616355426572-7e89f2ac5637?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ],
    description: "Laissez-vous transporter par la grâce et l'élégance des danseurs de ce ballet classique international. Des chorégraphies emblématiques interprétées par des artistes d'exception dans un cadre somptueux pour une soirée placée sous le signe de la beauté."
  }
];

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const eventId = parseInt(id || "0");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const event = events.find(event => event.id === eventId);
  
  if (!event) {
    return (
      <div className="min-h-screen bg-rich-black flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-20 flex-1 flex items-center justify-center">
          <div className="text-center glassmorphism p-10 rounded-lg">
            <h1 className="text-3xl font-bold text-off-white mb-4">Événement non trouvé</h1>
            <p className="text-off-white/70 mb-8">L'événement que vous recherchez n'existe pas ou a été déplacé.</p>
            <Link to="/">
              <Button className="bg-gold text-rich-black hover:bg-gold/80">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const allImages = [event.image, ...(event.additionalImages || [])];
  
  return (
    <div className="min-h-screen bg-rich-black flex flex-col">
      <Navbar />
      
      {/* Event Header */}
      <div className="bg-gradient-to-b from-black to-rich-black pt-24 pb-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-off-white/70 hover:text-gold mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux événements
          </Link>
          
          <div className="flex justify-between items-center mb-4">
            <Badge className="bg-bordeaux hover:bg-bordeaux/80">
              {event.category}
            </Badge>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full bg-transparent border-titanium/30 hover:bg-titanium/20">
                <Heart className="h-4 w-4 text-off-white" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent border-titanium/30 hover:bg-titanium/20">
                <Share2 className="h-4 w-4 text-off-white" />
              </Button>
            </div>
          </div>
          
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-off-white mb-4">
            {event.title}
          </h1>
        </div>
      </div>
      
      {/* Event Detail */}
      <div className="py-12 flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Event Details */}
            <div className="flex flex-col gap-6">
              <div className="glassmorphism rounded-lg p-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-off-white/80 text-lg">{event.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CalendarDays className="h-5 w-5 text-gold" />
                      <div>
                        <p className="text-sm text-off-white/60">Date</p>
                        <p className="text-off-white">{event.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-gold" />
                      <div>
                        <p className="text-sm text-off-white/60">Heure</p>
                        <p className="text-off-white">{event.time}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-gold" />
                      <div>
                        <p className="text-sm text-off-white/60">Lieu</p>
                        <p className="text-off-white">{event.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Tag className="h-5 w-5 text-gold" />
                      <div>
                        <p className="text-sm text-off-white/60">Prix à partir de</p>
                        <p className="text-off-white font-bold">{event.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Event Timer */}
              <EventTimer eventDate={event.date} eventTime={event.time} />
              
              {/* Ticket Selection */}
              <TicketSelection basePrice={event.price} />
            </div>
            
            {/* Right Column - Event Image Gallery */}
            <div>
              <div className="rounded-lg overflow-hidden shadow-xl mb-6">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105"
                  onClick={() => setSelectedImage(event.image)}
                />
              </div>
              
              {/* Additional Images Gallery */}
              {event.additionalImages && event.additionalImages.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {event.additionalImages.map((image, index) => (
                    <div 
                      key={index} 
                      className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img 
                        src={image} 
                        alt={`${event.title} - ${index + 1}`}
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Full Image Gallery */}
          {selectedImage && (
            <ImageGallery 
              images={allImages}
              selectedImage={selectedImage}
              onClose={() => setSelectedImage(null)}
              onSelect={(image) => setSelectedImage(image)}
            />
          )}
        </div>
      </div>
      
      {/* Related Events Section */}
      <RelatedEvents 
        category={event.category}
        currentEventId={event.id}
        events={events}
      />
      
      <Footer />
    </div>
  );
};

export default EventDetail;
