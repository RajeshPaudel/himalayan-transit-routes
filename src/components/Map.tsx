
import React, { useState } from 'react';
import { Navigation } from 'lucide-react';

const Map = () => {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] bg-muted rounded-md overflow-hidden">
      {isLoading ? (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-8 h-8 border-4 border-transit-blue border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-2 text-sm text-muted-foreground">Loading map...</p>
        </div>
      ) : (
        <>
          {/* This is a placeholder for an actual map integration */}
          <div className="w-full h-full bg-[#e8f4f4] relative">
            {/* Map placeholder with stylized roads */}
            <div className="absolute top-1/4 left-0 right-0 h-2 bg-transit-blue opacity-20"></div>
            <div className="absolute top-2/3 left-0 right-0 h-3 bg-transit-blue opacity-20"></div>
            <div className="absolute left-1/3 top-0 bottom-0 w-2 bg-transit-blue opacity-20"></div>
            <div className="absolute left-2/3 top-0 bottom-0 w-1 bg-transit-blue opacity-20"></div>
            
            {/* Nepali locations */}
            <div className="absolute top-1/4 left-1/3 bg-transit-orange p-2 rounded-full">
              <Navigation className="h-4 w-4 text-white" />
            </div>
            <div className="absolute top-2/3 left-2/3 bg-transit-blue p-2 rounded-full">
              <Navigation className="h-4 w-4 text-white" />
            </div>
            <div className="absolute top-1/2 left-1/2 bg-transit-green p-2 rounded-full">
              <Navigation className="h-4 w-4 text-white" />
            </div>
          </div>
          
          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md nepal-shadow">
            <button className="text-transit-blue hover:text-transit-dark p-1 transition-colors">
              <Navigation className="h-5 w-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Map;
