
import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-4">
              <span className="font-display text-xl font-semibold">Portfolio</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Web developer focused on creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-secondary hover:border-primary transition-colors"
              >
                <Github size={20} className="text-foreground" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-secondary hover:border-primary transition-colors"
              >
                <Linkedin size={20} className="text-foreground" />
              </a>
              <a 
                href="mailto:youremail@example.com" 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-secondary hover:border-primary transition-colors"
              >
                <Mail size={20} className="text-foreground" />
              </a>
              <a 
                href="https://yourwebsite.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-border hover:bg-secondary hover:border-primary transition-colors"
              >
                <Globe size={20} className="text-foreground" />
              </a>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
                  </li>
                  <li>
                    <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
                  </li>
                  <li>
                    <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
                  </li>
                  <li>
                    <a href="#tech" className="text-muted-foreground hover:text-foreground transition-colors">Technologies</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">More</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#resume" className="text-muted-foreground hover:text-foreground transition-colors">Resume</a>
                  </li>
                  <li>
                    <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
