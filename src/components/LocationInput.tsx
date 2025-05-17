
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";

interface LocationInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onLocationClick: () => void;
}

const LocationInput = ({
  label,
  placeholder,
  value,
  onChange,
  onLocationClick,
}: LocationInputProps) => {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-muted-foreground mb-1">
        {label}
      </label>
      <div className="flex items-center">
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pr-10"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-0 top-[24px]"
          onClick={onLocationClick}
        >
          <Navigation className="h-4 w-4 text-transit-blue" />
        </Button>
      </div>
    </div>
  );
};

export default LocationInput;
