import React, { useState, useEffect } from "react";
import { Menu, X, User, ShoppingBag, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";
import ThemeToggle from "./customs/ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set up auth state listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, currentSession) => {
      setSession(currentSession);
    });

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
    });

    return () => subscription.unsubscribe();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { name: "Événements", href: "/events" },
    { name: "Comment ça marche", href: "/how-it-works" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Partenaires", href: "/partners" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 glassmorphism" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-playfair font-bold text-2xl md:text-3xl">
                <span className="text-bordeaux">Aura</span>
                <span className="text-gold">Tickets</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-montserrat text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-gold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-gold"
                      : "hover:text-gold"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {session ? (
              <>
                <Button variant="ghost" size="icon" className="hover:text-gold">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-gold">
                  <ShoppingBag className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-rich-black"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" /> Déconnexion
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-rich-black"
                onClick={() => navigate("/login")}
              >
                Connexion
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          {isMobile && (
            <div className="md:hidden flex items-center">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden glassmorphism mt-4 p-4 rounded-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-3 py-2 text-base font-medium ${
                    isActive(link.href)
                      ? "text-gold relative after:content-[''] after:absolute after:-bottom-1 after:left-3 after:w-[calc(100%-24px)] after:h-0.5 after:bg-gold"
                      : "hover:text-gold"
                  }`}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                {session ? (
                  <>
                    <ThemeToggle />

                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-gold"
                    >
                      <User className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-gold"
                    >
                      <ShoppingBag className="h-5 w-5" />
                    </Button>
                    <Button
                      className="bg-gold text-rich-black hover:bg-gold/80"
                      onClick={handleLogout}
                    >
                      Déconnexion
                    </Button>
                  </>
                ) : (
                  <Button
                    className="bg-gold text-rich-black hover:bg-gold/80"
                    onClick={() => {
                      navigate("/login");
                      toggleMenu();
                    }}
                  >
                    Connexion
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
