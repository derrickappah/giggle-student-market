
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-10 md:mb-0">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-4">
              UniTalent
            </div>
            <p className="text-foreground/70 max-w-sm mb-6">
              Connecting university students with freelance opportunities to earn, learn, and grow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-semibold mb-4">For Students</h4>
              <ul className="space-y-2 text-foreground/70">
                <li><Link to="/students/find-work" className="hover:text-primary transition-colors">Find Work</Link></li>
                <li><Link to="/students/create-profile" className="hover:text-primary transition-colors">Create Profile</Link></li>
                <li><Link to="/students/resources" className="hover:text-primary transition-colors">Resources</Link></li>
                <li><Link to="/students/success-stories" className="hover:text-primary transition-colors">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Clients</h4>
              <ul className="space-y-2 text-foreground/70">
                <li><Link to="/clients/post-project" className="hover:text-primary transition-colors">Post a Project</Link></li>
                <li><Link to="/clients/find-talent" className="hover:text-primary transition-colors">Find Talent</Link></li>
                <li><Link to="/clients/enterprise" className="hover:text-primary transition-colors">Enterprise</Link></li>
                <li><Link to="/clients/success-stories" className="hover:text-primary transition-colors">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-foreground/70">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/company/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link to="/company/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link to="/company/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} UniTalent. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
