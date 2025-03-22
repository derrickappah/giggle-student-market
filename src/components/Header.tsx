
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4
        ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            UniTalent
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/services" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Browse Services
          </Link>
          <Link to="/freelancers" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Find Talent
          </Link>
          <Link to="/about" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="rounded-full">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button variant="default" size="sm" className="rounded-full bg-primary hover:bg-primary/90">
            Sign In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 py-4">
            <Link 
              to="/" 
              className="px-4 py-2 font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="px-4 py-2 font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Browse Services
            </Link>
            <Link 
              to="/freelancers" 
              className="px-4 py-2 font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Find Talent
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start rounded-lg">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button className="w-full justify-center rounded-lg bg-primary hover:bg-primary/90">
                Sign In
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
