
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
import { ArrowRight, Eye, EyeOff, LogIn } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const loginSchema = z.object({
  email: z.string().email({ message: "Veuillez entrer une adresse email valide" }),
  password: z.string().min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" })
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });
  
  const onSubmit = (data: LoginFormData) => {
    // This would normally connect to a backend API
    console.log("Login attempt:", data);
    
    toast({
      title: "Connexion réussie",
      description: "Vous êtes maintenant connecté à votre compte.",
      variant: "default",
    });
    
    // Navigate to home page after login
    setTimeout(() => navigate('/'), 1500);
  };
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div className="min-h-screen bg-rich-black flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto glassmorphism rounded-lg p-8">
            <div className="text-center mb-6">
              <h1 className="font-playfair text-3xl font-bold mb-2">
                <span className="text-gradient">Connexion</span>
              </h1>
              <p className="text-off-white/70">
                Accédez à votre compte pour gérer vos billets et événements
              </p>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-off-white">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="votre@email.com" 
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
                          onClick={toggleShowPassword}
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
                
                <div className="flex justify-between items-center text-sm">
                  <Link to="#" className="text-gold hover:underline">
                    Mot de passe oublié?
                  </Link>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gold text-rich-black hover:bg-gold/80 flex items-center justify-center gap-2"
                >
                  <LogIn className="h-4 w-4" />
                  Se connecter
                </Button>
              </form>
            </Form>
            
            <div className="mt-6 pt-6 border-t border-titanium/20 text-center">
              <p className="text-off-white/70 mb-4">
                Pas encore de compte?
              </p>
              <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold/20" asChild>
                <Link to="/register" className="flex items-center justify-center gap-2">
                  Créer un compte
                  <ArrowRight className="h-4 w-4" />
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

export default Login;
