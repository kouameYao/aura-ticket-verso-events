
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface EventTimerProps {
  eventDate: string; // Format: "DD Month YYYY"
  eventTime: string; // Format: "HH:MM"
}

const EventTimer: React.FC<EventTimerProps> = ({ eventDate, eventTime }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Parse the date and time
    const [day, month, year] = eventDate.split(' ');
    const [hour, minute] = eventTime.split(':');
    
    // French month names to numbers
    const monthMap: Record<string, number> = {
      'Janvier': 0, 'Février': 1, 'Mars': 2, 'Avril': 3, 'Mai': 4, 'Juin': 5,
      'Juillet': 6, 'Août': 7, 'Septembre': 8, 'Octobre': 9, 'Novembre': 10, 'Décembre': 11
    };
    
    const eventDateObj = new Date(
      parseInt(year),
      monthMap[month] || 0, // Default to January if not found
      parseInt(day),
      parseInt(hour),
      parseInt(minute)
    );

    const calculateTimeLeft = () => {
      const difference = eventDateObj.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Event has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [eventDate, eventTime]);

  return (
    <div className="glassmorphism p-4 rounded-lg flex flex-col items-center">
      <div className="flex items-center gap-2 mb-2">
        <Clock className="h-5 w-5 text-gold" />
        <h3 className="font-medium text-off-white">Temps restant</h3>
      </div>
      <div className="grid grid-cols-4 gap-3 text-center">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-gold">{timeLeft.days}</span>
          <span className="text-xs text-off-white/70">Jours</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-gold">{timeLeft.hours}</span>
          <span className="text-xs text-off-white/70">Heures</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-gold">{timeLeft.minutes}</span>
          <span className="text-xs text-off-white/70">Minutes</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-gold">{timeLeft.seconds}</span>
          <span className="text-xs text-off-white/70">Secondes</span>
        </div>
      </div>
    </div>
  );
};

export default EventTimer;
