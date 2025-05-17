
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LocationInput from "./LocationInput";

const RouteFinder = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleFindRoutes = () => {
    // This would be implemented with actual route finding logic
    console.log("Finding routes from", origin, "to", destination);
  };

  const handleUseCurrentLocation = (inputType: "origin" | "destination") => {
    // This would be implemented with geolocation API
    console.log("Using current location for", inputType);
    if (inputType === "origin") {
      setOrigin("Current Location");
    } else {
      setDestination("Current Location");
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 nepal-shadow">
      <h2 className="text-lg font-semibold text-transit-blue mb-4">Find Your Route</h2>
      
      <div className="space-y-4">
        <LocationInput
          label="From"
          placeholder="Enter starting point"
          value={origin}
          onChange={setOrigin}
          onLocationClick={() => handleUseCurrentLocation("origin")}
        />
        
        <LocationInput
          label="To"
          placeholder="Enter destination"
          value={destination}
          onChange={setDestination}
          onLocationClick={() => handleUseCurrentLocation("destination")}
        />
        
        <Button 
          onClick={handleFindRoutes} 
          className="w-full mt-2 bg-transit-orange hover:bg-transit-orange/90 text-white"
          disabled={!origin || !destination}
        >
          Find Routes
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default RouteFinder;
