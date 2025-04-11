import { Star } from "lucide-react";
import React from "react";

export const Underliner = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-0.5 w-24 bg-gradient-to-r from-bordeaux to-gold"></div>
      {icon}
      <div className="h-0.5 w-24 bg-gradient-to-l from-bordeaux to-gold"></div>
    </div>
  );
};
