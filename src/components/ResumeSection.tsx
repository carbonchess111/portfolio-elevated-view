
import React, { useEffect, useRef } from 'react';
import { Download, FileText } from 'lucide-react';

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'Tech Company',
    period: 'Jan 2022 - Present',
    description: 'Led the frontend development of a SaaS platform serving over 10,000 users. Implemented new features, optimized performance, and mentored junior developers.'
  },
  {
    id: 2,
    role: 'Web Developer',
    company: 'Digital Agency',
    period: 'Mar 2020 - Dec 2021',
    description: 'Developed responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect designs and ensure optimal user experience.'
  },
  {
    id: 3,
    role: 'Junior Developer',
    company: 'Startup',
    period: 'Jun 2018 - Feb 2020',
    description: 'Assisted in building and maintaining web applications. Gained hands-on experience with modern web technologies and agile development methodologies.'
  }
];

const education: Education[] = [
  {
    id: 1,
    degree: 'Master of Computer Science',
    institution: 'University Name',
    period: '2016 - 2018'
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Information Technology',
    institution: 'University Name',
    period: '2012 - 2016'
  }
];

const ResumeSection: React.FC = () => {
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
    <section id="resume" className="py-20">
      <div className="section-container" ref={sectionRef}>
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Resume
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's a summary of my professional experience and educational background.
            For a more detailed version, you can download my full resume.
          </p>
          <div className="mt-8">
            <a 
              href="/path-to-your-resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover-lift"
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                <FileText size={24} />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            <div className="space-y-10">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-border">
                  <div className="absolute w-4 h-4 rounded-full bg-primary left-[-9px] top-1"></div>
                  <h4 className="text-xl font-semibold">{exp.role}</h4>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <span>{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-10">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-8 border-l-2 border-border">
                  <div className="absolute w-4 h-4 rounded-full bg-primary left-[-9px] top-1"></div>
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <span>{edu.institution}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                <div className="pl-8">
                  <h4 className="text-lg font-semibold">AWS Certified Developer</h4>
                  <p className="text-muted-foreground">Amazon Web Services • 2022</p>
                </div>
                <div className="pl-8">
                  <h4 className="text-lg font-semibold">Professional Web Developer</h4>
                  <p className="text-muted-foreground">Web Development Institute • 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
