
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/80 backdrop-blur-md py-4 px-4 sticky top-0 z-50 border-b border-border/50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            UniTalent
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-full transition-colors ${isActive('/') ? 'text-primary' : 'text-foreground/70 hover:text-foreground hover:bg-secondary'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`px-4 py-2 rounded-full transition-colors ${isActive('/services') ? 'text-primary' : 'text-foreground/70 hover:text-foreground hover:bg-secondary'}`}
            >
              Services
            </Link>
            <Link 
              to="/freelancers" 
              className={`px-4 py-2 rounded-full transition-colors ${isActive('/freelancers') ? 'text-primary' : 'text-foreground/70 hover:text-foreground hover:bg-secondary'}`}
            >
              Freelancers
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-full transition-colors ${isActive('/about') ? 'text-primary' : 'text-foreground/70 hover:text-foreground hover:bg-secondary'}`}
            >
              About
            </Link>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Button size="sm">
              Sign Up
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground/70 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-2"
          >
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-md ${isActive('/') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`px-4 py-2 rounded-md ${isActive('/services') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/freelancers" 
                className={`px-4 py-2 rounded-md ${isActive('/freelancers') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Freelancers
              </Link>
              <Link 
                to="/about" 
                className={`px-4 py-2 rounded-md ${isActive('/about') ? 'bg-primary/10 text-primary' : 'text-foreground/70 hover:bg-secondary hover:text-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div className="pt-2 flex flex-col space-y-2">
                <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                  Log In
                </Button>
                <Button className="w-full" onClick={() => setIsOpen(false)}>
                  Sign Up
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
