import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 80 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'Node.js', level: 70 },
        { name: 'Express', level: 70 },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 75 },
      ]
    }
  ];

  return (
    <div className="container skills-container animate-fade-in"style={{ padding: '4rem 2rem' }}>
      <h1 className="skills-title">
        My <span className="gradient-text">Skills</span>
      </h1>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card glass">
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill, sIndex) => (
                <div key={sIndex} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>

                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{ '--target-width': `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;