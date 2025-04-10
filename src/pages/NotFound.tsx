import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-rich-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-white/65 mb-4">Oops! Page not found</p>
        <Link to="/">
          <Button
            variant="outline"
            size="icon"
            className="border-titanium/30 w-full hover:bg-bordeaux hover:text-white transition-all duration-300"
          >
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
