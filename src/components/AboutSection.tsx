
import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
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
    <section id="about" className="py-20 bg-secondary/50">
      <div className="section-container" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center reveal">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Passionate Developer & Designer
          </h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="mb-6">
              I am a skilled web developer with a passion for creating beautiful, functional, and user-centered digital experiences. With a background in design and development, I bring a unique perspective to every project.
            </p>
            <p className="mb-6">
              Throughout my career, I've worked with a diverse range of clients from startups to large corporations, helping them achieve their goals through innovative web solutions. I believe in clean code, thoughtful design, and continuous learning.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the outdoors. I'm always open to new opportunities and challenges that allow me to grow both personally and professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
