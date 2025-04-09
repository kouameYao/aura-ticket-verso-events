
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Steps } from "@/components/ui/steps";
import TicketSelectionForm from "@/components/purchase/TicketSelectionForm";
import PaymentMethodForm from "@/components/purchase/PaymentMethodForm";
import PaymentConfirmation from "@/components/purchase/PaymentConfirmation";

export type TicketData = {
  eventId: number | string;
  ticketType: string;
  quantity: number;
  totalPrice: number;
};

export type PaymentData = {
  method: "mobile_money" | "card";
  provider?: "wave" | "orange" | "mtn" | "moov";
  deliveryMethod: "sms" | "email";
  phoneNumber?: string;
  email?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvv?: string;
};

const PurchaseTicket = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [ticketData, setTicketData] = useState<TicketData>({
    eventId: id || "",
    ticketType: "Standard",
    quantity: 1,
    totalPrice: 89,
  });
  const [paymentData, setPaymentData] = useState<PaymentData>({
    method: "mobile_money",
    provider: "wave",
    deliveryMethod: "email",
    email: "",
  });

  const steps = [
    { title: "Sélection des billets", description: "Choisir le type et quantité" },
    { title: "Méthode de paiement", description: "Choisir comment payer" },
    { title: "Confirmation", description: "Finaliser votre achat" },
  ];

  const handleTicketSubmit = (data: TicketData) => {
    setTicketData(data);
    setCurrentStep(1);
  };

  const handlePaymentMethodSubmit = (data: PaymentData) => {
    setPaymentData(data);
    setCurrentStep(2);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handlePaymentComplete = () => {
    navigate(`/event/${id}?purchase=success`);
  };

  return (
    <div className="min-h-screen bg-rich-black flex flex-col">
      <Navbar />

      <div className="flex-1 py-20 mt-2.5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glassmorphism rounded-lg p-8 border border-gold/10">
            <div className="mb-16">
              <h1 className="text-3xl font-playfair font-bold text-gold mb-6 text-center">Achat de billets</h1>
              <Steps currentStep={currentStep} steps={steps} className="mb-8" />
            </div>
            
            <div className="bg-black/30 rounded-lg p-8 border border-titanium/20 shadow-lg">
              {currentStep === 0 && (
                <TicketSelectionForm
                  initialData={ticketData}
                  onSubmit={handleTicketSubmit}
                />
              )}

              {currentStep === 1 && (
                <PaymentMethodForm
                  initialData={paymentData}
                  onSubmit={handlePaymentMethodSubmit}
                  onBack={handlePreviousStep}
                />
              )}

              {currentStep === 2 && (
                <PaymentConfirmation
                  ticketData={ticketData}
                  paymentData={paymentData}
                  onBack={handlePreviousStep}
                  onComplete={handlePaymentComplete}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PurchaseTicket;
