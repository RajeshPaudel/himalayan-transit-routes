
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white nepal-shadow sticky top-0 z-10 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-5 w-5" />
        </Button>
        <Link to="/" className="flex items-center">
          <h1 className="text-transit-blue text-xl font-bold">यात्रा नेपाल</h1>
          <span className="text-transit-orange ml-2 text-xs font-medium">BETA</span>
        </Link>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm" className="hidden md:flex">
          <User className="h-4 w-4 mr-2" />
          <span>Login</span>
        </Button>
        <Button size="sm" className="bg-transit-blue hover:bg-transit-dark text-white">
          Get Started
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white nepal-shadow p-4 md:hidden animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-transit-blue font-medium px-3 py-2 rounded-md hover:bg-muted">
              Home
            </Link>
            <Link to="/routes" className="text-transit-blue font-medium px-3 py-2 rounded-md hover:bg-muted">
              Routes
            </Link>
            <Link to="/schedules" className="text-transit-blue font-medium px-3 py-2 rounded-md hover:bg-muted">
              Schedules
            </Link>
            <Link to="/login" className="text-transit-blue font-medium px-3 py-2 rounded-md hover:bg-muted">
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
