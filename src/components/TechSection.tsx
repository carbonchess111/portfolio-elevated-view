
import React, { useEffect, useRef } from 'react';

interface TechCategory {
  title: string;
  skills: string[];
}

const categories: TechCategory[] = [
  {
    title: 'Frontend',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'Nest.js', 'REST APIs', 'GraphQL', 'SQL', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'GitHub', 'Figma', 'VS Code', 'Jest', 'Webpack', 'Docker', 'AWS']
  }
];

const TechSection: React.FC = () => {
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
    <section id="tech" className="py-20 bg-secondary/50">
      <div className="section-container" ref={sectionRef}>
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies & Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies, frameworks, and tools I work with on a regular basis.
            I'm always learning and expanding my skillset to stay up-to-date with the latest trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.title} 
              className="glass rounded-xl p-8 reveal" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium hover-lift"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
