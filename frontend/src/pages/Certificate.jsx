import { useState } from "react";
import './Certificate.css';

import SIH from '../assets/SIH.png';
import Rachi from '../assets/Rachi.png';
import Hack from '../assets/Hack.png';

const certificateData = [
  {
    // category: "Hackathon Achievements",
    items: [
      {
        img: Hack,
        title: "HACK HORIZON 2.0",
        desc: "Successfully Participated and secured a position among the top 30 teams."
      },
      {
        img: SIH,
        title: "SMART INDIA HACKATHON",
        desc: "Runner-up in Internal Hackathon Round , demonstrating strong teamwork skills."
      },
      {
        img: Rachi,
        title: "RACHI HACKS",
        desc: "Presented the project successfully and advanced to the screening round."
      }
    ]
  }
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container certificates-container animate-fade-in">

      <h1 className="certificates-title">
        My <span className="gradient-text">Certificates</span>
      </h1>

      {certificateData.map((group, index) => (
        <div key={index} className="certificate-group glass">

          <h2>{group.category}</h2>

          <div className="certificate-grid">
            {group.items.map((cert, i) => (
              <div key={i} className="certificate-card">

                {/* Image (no click now) */}
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="certificate-img"
                />

                <h3>{cert.title}</h3>
                <p>{cert.desc}</p>

                {/* 🔥 VIEW BUTTON ADDED */}
                <button
                  className="view-btn"
                  onClick={() => setSelectedImage(cert.img)}
                >
                  View
                </button>

              </div>
            ))}
          </div>

        </div>
      ))}

      {/* 🔥 MODAL WITH BLUR */}
      {selectedImage && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Full Certificate" />
          </div>
        </div>
      )}

    </div>
  );
};

export default Certificates;