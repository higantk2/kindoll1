'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    { src: "/images/cert3.png", alt: "English for Developers" },
    { src: "/images/cert1.png", alt: "JavaScript Algorithms" },
    { src: "/images/cert2.png", alt: "Responsive Web Design" },
    { src: "/images/image6.jpg", alt: "WATT" },
    { src: "/images/cert4.png", alt: "OS Basics" },
    { src: "/images/cert5.png", alt: "Hardware Basics" },
  ];

  return (
    <section className="container cert-container" style={{ paddingTop: '100px' }}>
        <div className="cert-header">
            <h1>My Certificates</h1>
            <p>Click on any certificate to view it in full size.</p>
        </div>
        
        <div className="cert-grid">
            {certificates.map((cert, index) => (
                <img 
                    key={index}
                    src={cert.src} 
                    alt={cert.alt} 
                    className="cert-image"
                    onClick={() => setSelectedImage(cert)}
                />
            ))}
        </div>

        {/* Modal Logic */}
        {selectedImage && (
            <div id="cert-modal" className="modal" style={{ display: 'block' }} onClick={() => setSelectedImage(null)}>
                <span className="close-modal" onClick={() => setSelectedImage(null)}>&times;</span>
                <img className="modal-content" src={selectedImage.src} alt={selectedImage.alt} />
                <div id="caption">{selectedImage.alt}</div>
            </div>
        )}

        <div className="fixed-bottom-nav">
            <Link href="/" className="back-btn"><i className="fas fa-arrow-left"></i> Go Back Home</Link>
        </div>
    </section>
  );
}