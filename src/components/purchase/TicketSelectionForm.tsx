
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Ticket, ArrowRight } from "lucide-react";
import { TicketData } from "@/pages/PurchaseTicket";

interface TicketSelectionFormProps {
  initialData: TicketData;
  onSubmit: (data: TicketData) => void;
}

const ticketCategories = [
  { name: "Standard", price: 89 },
  { name: "VIP", price: 179 },
  { name: "Premium", price: 269 }
];

const formSchema = z.object({
  ticketType: z.string(),
  quantity: z.coerce.number().min(1).max(10),
});

const TicketSelectionForm: React.FC<TicketSelectionFormProps> = ({ initialData, onSubmit }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticketType: initialData.ticketType,
      quantity: initialData.quantity,
    },
  });

  const selectedType = form.watch("ticketType");
  const quantity = form.watch("quantity");

  const selectedCategory = ticketCategories.find(cat => cat.name === selectedType) || ticketCategories[0];
  const totalPrice = selectedCategory.price * quantity;

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit({
      ...initialData,
      ticketType: values.ticketType,
      quantity: values.quantity,
      totalPrice: totalPrice
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-playfair font-bold text-gold mb-6 flex items-center">
        <Ticket className="h-6 w-6 mr-2 text-gold" />
        Sélection de billets
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="ticketType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-off-white text-lg">Type de billet</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-rich-black/60 border-gold/30 focus:border-gold text-off-white h-14">
                        <SelectValue placeholder="Choisir un type de billet" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-rich-black border border-gold/20">
                      {ticketCategories.map((category) => (
                        <SelectItem key={category.name} value={category.name} className="focus:bg-bordeaux/40 focus:text-gold">
                          {category.name} - {category.price}€
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-off-white text-lg">Quantité</FormLabel>
                  <Select onValueChange={(value) => field.onChange(parseInt(value))} defaultValue={field.value.toString()}>
                    <FormControl>
                      <SelectTrigger className="bg-rich-black/60 border-gold/30 focus:border-gold text-off-white h-14">
                        <SelectValue placeholder="Choisir une quantité" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-rich-black border border-gold/20">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()} className="focus:bg-bordeaux/40 focus:text-gold">
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-8 pt-6 border-t border-gold/20">
            <div className="flex justify-between items-center mb-6">
              <span className="text-off-white/80 text-xl">Total:</span>
              <span className="font-bold text-gold text-3xl">{totalPrice}€</span>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-bordeaux hover:bg-bordeaux/90 text-off-white flex items-center justify-center gap-2 py-6 text-lg"
          >
            Continuer
            <ArrowRight className="h-5 w-5" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TicketSelectionForm;
