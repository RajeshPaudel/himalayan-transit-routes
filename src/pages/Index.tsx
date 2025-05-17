
import { useState } from "react";
import Header from "@/components/Header";
import Map from "@/components/Map";
import RouteFinder from "@/components/RouteFinder";
import TransitOption from "@/components/TransitOption";
import { Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [selectedTab, setSelectedTab] = useState("routes");

  const transitOptions = [
    {
      icon: <Navigation className="h-4 w-4 text-transit-blue" />,
      title: "Local Bus",
      time: "30 min",
      price: "Rs. 25",
      stops: 3,
      onClick: () => console.log("Selected local bus"),
    },
    {
      icon: <Navigation className="h-4 w-4 text-transit-green" />,
      title: "Micro Bus",
      time: "20 min",
      price: "Rs. 40",
      stops: 1,
      onClick: () => console.log("Selected micro bus"),
    },
    {
      icon: <Navigation className="h-4 w-4 text-transit-orange" />,
      title: "Shared Taxi",
      time: "15 min",
      price: "Rs. 80",
      stops: 0,
      onClick: () => console.log("Selected shared taxi"),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container px-4 md:px-6 py-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-2xl font-bold text-transit-blue mb-2">यात्रा नेपाल</h1>
            <p className="text-muted-foreground mb-6">
              Find the best routes in Nepal's suburban areas
            </p>
            
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="routes">Find Routes</TabsTrigger>
                <TabsTrigger value="schedules">Schedules</TabsTrigger>
              </TabsList>
              <TabsContent value="routes" className="pt-4">
                <RouteFinder />
              </TabsContent>
              <TabsContent value="schedules" className="pt-4">
                <div className="bg-white rounded-lg p-6 nepal-shadow text-center">
                  <h3 className="font-semibold text-transit-blue mb-2">Schedules Coming Soon</h3>
                  <p className="text-muted-foreground mb-4">
                    We're working on bringing you accurate schedules for transit options in your area.
                  </p>
                  <Button
                    variant="outline"
                    className="border-transit-blue text-transit-blue hover:bg-transit-blue hover:text-white"
                  >
                    Notify Me
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
            
            {selectedTab === "routes" && (
              <div className="space-y-4 mt-4">
                <h2 className="text-lg font-semibold text-transit-blue">Available Options</h2>
                {transitOptions.map((option, index) => (
                  <TransitOption key={index} {...option} />
                ))}
              </div>
            )}
          </div>
          
          <div>
            <Map />
            <div className="mt-4 bg-white rounded-lg p-4 nepal-shadow">
              <h2 className="text-lg font-semibold text-transit-blue mb-2">Popular Destinations</h2>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="justify-start text-left">
                  <Navigation className="h-4 w-4 mr-2 text-transit-orange" />
                  Bhaktapur
                </Button>
                <Button variant="outline" className="justify-start text-left">
                  <Navigation className="h-4 w-4 mr-2 text-transit-orange" />
                  Lalitpur
                </Button>
                <Button variant="outline" className="justify-start text-left">
                  <Navigation className="h-4 w-4 mr-2 text-transit-orange" />
                  Patan
                </Button>
                <Button variant="outline" className="justify-start text-left">
                  <Navigation className="h-4 w-4 mr-2 text-transit-orange" />
                  Kirtipur
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-transit-blue text-white p-4 text-center mt-8">
        <p className="text-sm">© 2025 यात्रा नेपाल - Nepal Transit App</p>
      </footer>
    </div>
  );
};

export default Index;
