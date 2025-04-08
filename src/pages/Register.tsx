import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ArrowLeft, Eye, EyeOff, UserPlus } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Checkbox } from '@/components/ui/checkbox';

const registerSchema = z.object({
  firstName: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
  lastName: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
  password: z.string().min(8, { 
    message: "Le mot de passe doit contenir au moins 8 caractères" 
  }),
  confirmPassword: z.string(),
  isOrganizer: z.boolean().default(false),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "Vous devez accepter les conditions générales",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

const Register = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isOrganizer: false,
      acceptTerms: false,
    }
  });
  
  const onSubmit = (data: RegisterFormData) => {
    console.log("Registration data:", data);
    
    toast({
      title: "Compte créé avec succès",
      description: data.isOrganizer 
        ? "Votre compte organisateur a été créé. Vous pouvez maintenant vous connecter."
        : "Votre compte a été créé. Vous pouvez maintenant vous connecter.",
      variant: "default",
    });
    
    setTimeout(() => navigate('/login'), 1500);
  };
  
  return (
    <div className="min-h-screen bg-rich-black flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto glassmorphism rounded-lg p-8">
            <div className="text-center mb-6">
              <h1 className="font-playfair text-3xl font-bold mb-2">
                <span className="text-gradient">Créer un compte</span>
              </h1>
              <p className="text-off-white/70">
                Rejoignez AuraTickets pour réserver ou créer vos propres événements
              </p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-off-white">Prénom</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Jean" 
                            {...field} 
                            className="bg-black/30 border-titanium/30 text-off-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-off-white">Nom</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Dupont" 
                            {...field} 
                            className="bg-black/30 border-titanium/30 text-off-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-off-white">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="votre@email.com" 
                          type="email"
                          {...field} 
                          className="bg-black/30 border-titanium/30 text-off-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-off-white">Mot de passe</FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input 
                              type={showPassword ? "text" : "password"} 
                              placeholder="••••••••" 
                              {...field} 
                              className="bg-black/30 border-titanium/30 text-off-white pr-10"
                            />
                          </FormControl>
                          <Button 
                            type="button"
                            variant="ghost" 
                            size="sm"
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-off-white/70 hover:text-gold"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-off-white">Confirmer le mot de passe</FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input 
                              type={showConfirmPassword ? "text" : "password"} 
                              placeholder="••••••••" 
                              {...field} 
                              className="bg-black/30 border-titanium/30 text-off-white pr-10"
                            />
                          </FormControl>
                          <Button 
                            type="button"
                            variant="ghost" 
                            size="sm"
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-off-white/70 hover:text-gold"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="isOrganizer"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-off-white">
                          Je souhaite créer des événements (compte organisateur)
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="acceptTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-off-white">
                          J'accepte les <Link to="/cgu" className="text-gold hover:underline">conditions générales</Link> et la <Link to="/privacy" className="text-gold hover:underline">politique de confidentialité</Link>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gold text-rich-black hover:bg-gold/80 flex items-center justify-center gap-2"
                >
                  <UserPlus className="h-4 w-4" />
                  Créer mon compte
                </Button>
              </form>
            </Form>
            
            <div className="mt-6 pt-6 border-t border-titanium/20 text-center">
              <p className="text-off-white/70 mb-4">
                Vous avez déjà un compte?
              </p>
              <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold/20" asChild>
                <Link to="/login" className="flex items-center justify-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Se connecter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
