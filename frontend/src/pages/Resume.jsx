import './Resume.css';
import resumePDF from '../assets/resume.pdf';

const Resume = () => {
  return (
    <div className="resume-container">

      <h1 className="resume-title">
        My <span className="gradient-text">Resume</span>
      </h1>

      <div className="resume-card glass">

        {/* Blurred Preview */}
        <div className="resume-preview-box">
          <img
            src="/resume-preview.png"
            alt="Resume Preview"
            className="resume-preview"
          />
        </div>

        {/* Buttons BELOW */}
        <div className="resume-actions">
          <a href={resumePDF} target="_blank" rel="noreferrer">
            <button className="resume-btn view">View</button>
          </a>

          <a href={resumePDF} download>
            <button className="resume-btn download">Download</button>
          </a>
        </div>

      </div>

    </div>
  );
};

export default Resume;