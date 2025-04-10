import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, QrCode, Clock } from "lucide-react";
import { PaymentData, TicketData } from "@/pages/PurchaseTicket";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";

interface PaymentConfirmationProps {
  ticketData: TicketData;
  paymentData: PaymentData;
  onBack: () => void;
  onComplete: () => void;
}

const otpSchema = z.object({
  otp: z.string().min(6, "Le code OTP doit contenir 6 chiffres"),
});

const PaymentConfirmation: React.FC<PaymentConfirmationProps> = ({
  ticketData,
  paymentData,
  onBack,
  onComplete,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const handleSubmitOTP = (values: z.infer<typeof otpSchema>) => {
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Paiement réussi",
        description:
          "Votre réservation a été confirmée. Vous recevrez votre billet rapidement.",
      });
      onComplete();
    }, 2000);
  };

  const renderPaymentProvider = () => {
    if (paymentData.method === "card") {
      return (
        <div className="space-y-4 mt-6">
          <p className="text-off-white mb-4">
            Veuillez vérifier vos informations de paiement:
          </p>

          <div className="p-4 bg-black/30 rounded-md">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-off-white/70">Type de carte:</span>
              <span className="text-off-white font-medium">
                Visa/Mastercard
              </span>

              <span className="text-off-white/70">Numéro:</span>
              <span className="text-off-white font-medium">
                **** **** **** {paymentData.cardNumber?.slice(-4)}
              </span>

              <span className="text-off-white/70">Date d'expiration:</span>
              <span className="text-off-white font-medium">
                {paymentData.cardExpiry}
              </span>
            </div>
          </div>

          <Button
            className="w-full bg-bordeaux hover:bg-bordeaux/80 text-off-white mt-4"
            onClick={() => {
              setIsProcessing(true);
              setTimeout(() => {
                setIsProcessing(false);
                toast({
                  title: "Paiement réussi",
                  description:
                    "Votre réservation a été confirmée. Vous recevrez votre billet rapidement.",
                });
                onComplete();
              }, 2000);
            }}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Clock className="animate-spin mr-2 h-4 w-4" />
                Traitement en cours...
              </>
            ) : (
              "Confirmer le paiement"
            )}
          </Button>
        </div>
      );
    }

    switch (paymentData.provider) {
      case "wave":
        return (
          <div className="space-y-4 mt-6 text-center">
            <p className="text-off-white mb-4">
              Scannez ce QR code avec l'application Wave pour effectuer le
              paiement
            </p>

            <div className="flex justify-center">
              <div className="p-4 bg-white rounded-md inline-block">
                <QrCode size={200} className="text-black" />
              </div>
            </div>

            <Button
              className="w-full bg-bordeaux hover:bg-bordeaux/80 text-off-white mt-4"
              onClick={() => {
                setIsProcessing(true);
                setTimeout(() => {
                  setIsProcessing(false);
                  toast({
                    title: "Paiement réussi",
                    description:
                      "Votre réservation a été confirmée. Vous recevrez votre billet rapidement.",
                  });
                  onComplete();
                }, 2000);
              }}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Clock className="animate-spin mr-2 h-4 w-4" />
                  Vérification du paiement...
                </>
              ) : (
                "J'ai effectué le paiement"
              )}
            </Button>
          </div>
        );

      default:
        // For Orange, MTN, Moov (OTP based)
        return (
          <div className="space-y-4 mt-6">
            <p className="text-off-white mb-4">
              Entrez le code OTP reçu par SMS pour confirmer le paiement avec{" "}
              {paymentData.provider}
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmitOTP)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-off-white">Code OTP</FormLabel>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            {Array.from({ length: 6 }).map((_, index) => (
                              <InputOTPSlot key={index} index={index} />
                            ))}
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-bordeaux hover:bg-bordeaux/80 text-off-white"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Clock className="animate-spin mr-2 h-4 w-4" />
                      Traitement en cours...
                    </>
                  ) : (
                    "Confirmer le paiement"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        );
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-playfair font-bold text-gold mb-6">
        Confirmation de paiement
      </h2>

      <div className="p-4 bg-black/30 rounded-md mb-6">
        <h3 className="font-medium text-gold mb-3">
          Récapitulatif de la commande
        </h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span className="text-off-white/70">Type de billet:</span>
          <span className="text-off-white">{ticketData.ticketType}</span>

          <span className="text-off-white/70">Quantité:</span>
          <span className="text-off-white">{ticketData.quantity}</span>

          <span className="text-off-white/70">Méthode de paiement:</span>
          <span className="text-off-white capitalize">
            {paymentData.method === "mobile_money"
              ? `${paymentData.provider
                  ?.charAt(0)
                  .toUpperCase()}${paymentData.provider?.slice(1)}`
              : "Carte bancaire"}
          </span>

          <span className="text-off-white/70">Réception du billet:</span>
          <span className="text-off-white">
            {paymentData.deliveryMethod === "email"
              ? `Email (${paymentData.email})`
              : `SMS (${paymentData.phoneNumber})`}
          </span>

          <span className="text-off-white/70 font-medium pt-2 border-t border-titanium/20 mt-2">
            Total:
          </span>
          <span className="text-bordeaux font-bold pt-2 border-t border-titanium/20 mt-2">
            {ticketData.totalPrice}€
          </span>
        </div>
      </div>

      {renderPaymentProvider()}

      <div className="mt-6">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="border-bordeaux/30 text-off-white hover:bg-bordeaux"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Retour
        </Button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
