import { useState } from "react";
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: 'Portfolio',
      description:
        'Developed a personal portfolio website to showcase projects, skills, and achievements with a modern and responsive user interface.',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      github: '',
      demo: ''
    },
    {
      id: 2,
      title: 'MeetCircle',
      description:
        'Built Meetcircle, an event-based web application that allows users to discover and manage events, with a focus on intuitive design and efficient functionality.',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/Srishty-cmd/meetcircle',
      demo: ''
    },
    {
      id: 3,
      title: 'Travel & Tourism',
      description:
        'Created a responsive travel and tourism website with a focus on clean UI, intuitive design, and seamless user experience using modern frontend technologies.',
      tags: ['Html', 'Css', 'Javascript'],
      github: 'https://github.com/Srishty-cmd/TravelTourism',
      demo: ''
    }
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
        Featured <span className="gradient-text">Projects</span>
      </h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {projectData.map(project => (
          <div 
            key={project.id} 
            className="glass" 
            style={{ 
              padding: '2rem', 
              borderRadius: '16px', 
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <h2 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '1rem', 
              color: 'var(--text-primary)' 
            }}>
              {project.title}
            </h2>

            <p style={{ 
              color: 'var(--text-secondary)', 
              marginBottom: '1.5rem', 
              minHeight: '80px' 
            }}>
              {project.description}
            </p>

            <div style={{ 
              display: 'flex', 
              gap: '0.8rem', 
              flexWrap: 'wrap', 
              marginBottom: '2rem' 
            }}>
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--accent-secondary)' 
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  textDecoration: 'none'
                }}
              >
                GitHub
              </a>

              <a
                href={project.demo || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-filled"
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  pointerEvents: project.demo ? 'auto' : 'none',
                  opacity: project.demo ? 1 : 0.5
                }}
              >
                {project.demo ? 'Live Demo' : 'Coming Soon'}
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;