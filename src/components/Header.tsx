
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '@/contexts/AuthContext';
import { toast } from "sonner";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Successfully logged out");
    navigate("/");
    setIsMenuOpen(false);
  };

  const handleLoginClick = () => {
    navigate("/login");
    setIsMenuOpen(false);
  };

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
        {isAuthenticated ? (
          <>
            <div className="hidden md:flex items-center text-sm text-muted-foreground mr-2">
              <span>Hi, {user?.email.split('@')[0]}</span>
            </div>
            <Button variant="outline" size="sm" className="hidden md:flex" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              <span>Logout</span>
            </Button>
          </>
        ) : (
          <Button variant="outline" size="sm" className="hidden md:flex" onClick={handleLoginClick}>
            <User className="h-4 w-4 mr-2" />
            <span>Login</span>
          </Button>
        )}
        <Button 
          size="sm" 
          className="bg-transit-blue hover:bg-transit-dark text-white"
          onClick={() => isAuthenticated ? navigate("/profile") : navigate("/register")}
        >
          {isAuthenticated ? "My Profile" : "Get Started"}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white nepal-shadow p-4 md:hidden animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-transit-blue font-medium px-3 py-2 rounded-md hover:bg-muted" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/routes" className="text-transit-blue font-medium px-3 py-2 rounded-md hover:bg-muted" onClick={() => setIsMenuOpen(false)}>
              Routes
            </Link>
            <Link to="/schedules" className="text-transit-blue font-medium px-3 py-2 rounded-md hover:bg-muted" onClick={() => setIsMenuOpen(false)}>
              Schedules
            </Link>
            {isAuthenticated ? (
              <>
                <div className="px-3 py-2 text-sm text-muted-foreground">
                  Logged in as {user?.email}
                </div>
                <button 
                  className="flex items-center text-transit-blue font-medium px-3 py-2 rounded-md hover:bg-muted text-left"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" /> Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="text-transit-blue font-medium px-3 py-2 rounded-md hover:bg-muted" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
