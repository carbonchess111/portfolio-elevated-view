
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin } from 'lucide-react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 pb-24"
      ref={sectionRef}
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="reveal order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block px-4 py-1 mb-6 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              Welcome to my portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hi, I'm <span className="text-primary">Your Name</span>
              <br />Web Developer
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              I build modern, responsive web applications with clean design and 
              exceptional user experience. Let's create something amazing together.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover-lift"
              >
                <Github size={24} className="text-foreground" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover-lift"
              >
                <Linkedin size={24} className="text-foreground" />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-secondary flex items-center justify-center">
                <span className="font-bold text-secondary-foreground">10+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
