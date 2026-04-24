import './About.css';

const About = () => {
  return (
    <div className="container about-container animate-fade-in">
      <h1 className="about-title">
        About <span className="gradient-text">Me</span>
      </h1>

      <div className="about-content">
        <div className="about-bio glass">
          <h2>Who I Am</h2>
          <p>
            I’m a MERN Stack Developer passionate about building user-friendly and efficient web applications. I enjoy working across both frontend and backend, creating smooth and reliable digital experiences.
          </p>
          <p>
            I write clean and efficient code to develop dependable applications. Currently, I'm pursuing BCA (2nd year) and actively seeking internship opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;