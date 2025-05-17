
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TransitOptionProps {
  icon: React.ReactNode;
  title: string;
  time: string;
  price: string;
  stops: number;
  onClick: () => void;
}

const TransitOption = ({
  icon,
  title,
  time,
  price,
  stops,
  onClick,
}: TransitOptionProps) => {
  return (
    <div className="bg-white rounded-lg p-4 nepal-shadow hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="bg-muted rounded-full p-2 mr-3">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-transit-blue">{title}</h3>
            <p className="text-sm text-muted-foreground">
              {stops} {stops === 1 ? "stop" : "stops"}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-semibold">{time}</p>
          <p className="text-sm text-transit-green">{price}</p>
        </div>
      </div>
      <Button
        onClick={onClick}
        variant="outline"
        size="sm"
        className="w-full border-transit-blue text-transit-blue hover:bg-transit-blue hover:text-white"
      >
        Select
        <ArrowRight className="ml-2 h-3 w-3" />
      </Button>
    </div>
  );
};

export default TransitOption;
