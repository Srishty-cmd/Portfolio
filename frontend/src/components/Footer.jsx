import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/Srishty-cmd" className="social-link">GitHub</a>
          <a href="https://www.linkedin.com/in/srishty-3b6390324" className="social-link">LinkedIn</a>
          <a href="mailto:ksrishty639@gmail.com" className="social-link">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
