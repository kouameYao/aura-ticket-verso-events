
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
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight, CreditCard, Smartphone } from "lucide-react";
import { PaymentData } from "@/pages/PurchaseTicket";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PaymentMethodFormProps {
  initialData: PaymentData;
  onSubmit: (data: PaymentData) => void;
  onBack: () => void;
}

const formSchema = z.object({
  method: z.enum(["mobile_money", "card"]),
  provider: z.enum(["wave", "orange", "mtn", "moov"]).optional().nullable(),
  deliveryMethod: z.enum(["sms", "email"]),
  phoneNumber: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  cardNumber: z.string().optional().nullable(),
  cardExpiry: z.string().optional().nullable(),
  cardCvv: z.string().optional().nullable(),
}).refine((data) => {
  if (data.deliveryMethod === 'sms' && !data.phoneNumber) return false;
  if (data.deliveryMethod === 'email' && !data.email) return false;
  if (data.method === 'card' && (!data.cardNumber || !data.cardExpiry || !data.cardCvv)) return false;
  if (data.method === 'mobile_money' && !data.provider) return false;
  return true;
}, {
  message: "Veuillez remplir tous les champs obligatoires",
  path: ["deliveryMethod"]
});

const PaymentMethodForm: React.FC<PaymentMethodFormProps> = ({ initialData, onSubmit, onBack }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      method: initialData.method || "mobile_money",
      provider: initialData.provider || "wave",
      deliveryMethod: initialData.deliveryMethod || "email",
      phoneNumber: initialData.phoneNumber || "",
      email: initialData.email || "",
      cardNumber: initialData.cardNumber || "",
      cardExpiry: initialData.cardExpiry || "",
      cardCvv: initialData.cardCvv || "",
    },
  });

  const paymentMethod = form.watch("method");
  const deliveryMethod = form.watch("deliveryMethod");

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit({
      method: values.method,
      provider: values.provider as PaymentData["provider"],
      deliveryMethod: values.deliveryMethod,
      phoneNumber: values.phoneNumber || undefined,
      email: values.email || undefined,
      cardNumber: values.cardNumber || undefined,
      cardExpiry: values.cardExpiry || undefined,
      cardCvv: values.cardCvv || undefined,
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-playfair font-bold text-gold mb-6">
        Mode de paiement
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="method"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-off-white">Méthode de paiement</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="mobile_money" />
                      </FormControl>
                      <FormLabel className="font-normal flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        Mobile Money
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="card" />
                      </FormControl>
                      <FormLabel className="font-normal flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Carte bancaire
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {paymentMethod === "mobile_money" && (
            <FormField
              control={form.control}
              name="provider"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-off-white">Opérateur</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                    <FormControl>
                      <SelectTrigger className="bg-transparent border-titanium/30 focus:border-gold text-off-white">
                        <SelectValue placeholder="Choisir un opérateur" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-rich-black border border-titanium/30">
                      <SelectItem value="wave">Wave</SelectItem>
                      <SelectItem value="orange">Orange Money</SelectItem>
                      <SelectItem value="mtn">MTN Mobile Money</SelectItem>
                      <SelectItem value="moov">Moov Money</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {paymentMethod === "card" && (
            <>
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-off-white">Numéro de carte</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="1234 5678 9012 3456"
                        className="bg-transparent border-titanium/30 focus:border-gold text-off-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="cardExpiry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-off-white">Date d'expiration</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="MM/YY"
                          className="bg-transparent border-titanium/30 focus:border-gold text-off-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cardCvv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-off-white">CVV</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="123"
                          className="bg-transparent border-titanium/30 focus:border-gold text-off-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </>
          )}

          <FormField
            control={form.control}
            name="deliveryMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-off-white">Comment recevoir votre billet</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="sms" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        SMS
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="email" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Email
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {deliveryMethod === "sms" && (
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-off-white">Numéro de téléphone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+225 01 23 45 67 89"
                      className="bg-transparent border-titanium/30 focus:border-gold text-off-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {deliveryMethod === "email" && (
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-off-white">Adresse email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="votre@email.com"
                      className="bg-transparent border-titanium/30 focus:border-gold text-off-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <div className="flex justify-between">
            <Button 
              type="button" 
              variant="outline"
              onClick={onBack}
              className="border-titanium/30 text-off-white hover:bg-titanium/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Retour
            </Button>
            <Button 
              type="submit" 
              className="bg-bordeaux hover:bg-bordeaux/80 text-off-white flex items-center"
            >
              Continuer <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PaymentMethodForm;
