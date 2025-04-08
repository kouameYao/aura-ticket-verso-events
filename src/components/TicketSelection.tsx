
import React, { useState } from 'react';
import { Ticket, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface TicketSelectionProps {
  basePrice: string; // Format: "89€"
  categories?: { name: string; price: string }[];
}

const TicketSelection: React.FC<TicketSelectionProps> = ({ 
  basePrice, 
  categories = [
    { name: "Standard", price: basePrice },
    { name: "VIP", price: `${parseInt(basePrice) * 2}€` },
    { name: "Premium", price: `${parseInt(basePrice) * 3}€` }
  ] 
}) => {
  const [ticketType, setTicketType] = useState<string>("Standard");
  const [quantity, setQuantity] = useState<number>(1);
  
  const selectedCategory = categories.find(cat => cat.name === ticketType) || categories[0];
  const price = parseInt(selectedCategory.price);
  const total = price * quantity;

  return (
    <div className="glassmorphism p-6 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Ticket className="h-5 w-5 text-gold" />
        <h3 className="font-medium text-lg text-off-white">Réservez votre billet</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm text-off-white/80 mb-1 block">Type de billet</label>
          <Select onValueChange={setTicketType} defaultValue="Standard">
            <SelectTrigger className="bg-transparent border-titanium/30 focus:border-gold w-full">
              <SelectValue placeholder="Type de billet" />
            </SelectTrigger>
            <SelectContent className="bg-rich-black border border-titanium/30">
              {categories.map((category) => (
                <SelectItem key={category.name} value={category.name}>
                  {category.name} - {category.price}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm text-off-white/80 mb-1 block">Quantité</label>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="bg-transparent border-titanium/30 hover:bg-titanium/20"
            >
              <Minus className="h-4 w-4 text-off-white" />
            </Button>
            <span className="w-10 text-center text-off-white">{quantity}</span>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setQuantity(quantity + 1)}
              className="bg-transparent border-titanium/30 hover:bg-titanium/20"
            >
              <Plus className="h-4 w-4 text-off-white" />
            </Button>
          </div>
        </div>
        
        <div className="pt-4 border-t border-titanium/20">
          <div className="flex justify-between mb-4">
            <span className="text-off-white/80">Total:</span>
            <span className="font-bold text-gold">{total}€</span>
          </div>
          
          <Button className="w-full bg-bordeaux hover:bg-bordeaux/80 text-off-white gap-2">
            <ShoppingCart className="h-4 w-4" />
            Réserver maintenant
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
