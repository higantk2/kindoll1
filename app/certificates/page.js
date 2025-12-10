'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CardBackground from '@/components/CardBackground'; // Import Cards

// Smoother animation settings
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.2, // Increased stagger for "smoother" cascade
      delayChildren: 0.1
    }
  }
};

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
    <section className="container cert-container">
        {/* ADD THE BACKGROUND CARDS HERE */}
        <CardBackground />

        <motion.div 
          className="cert-header"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
            <h1>My Certificates</h1>
            <p>Click on any certificate to view it in full size.</p>
        </motion.div>
        
        <motion.div 
          className="cert-grid"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
            {certificates.map((cert, index) => (
                <motion.img 
                    key={index}
                    src={cert.src} 
                    alt={cert.alt} 
                    className="cert-image"
                    onClick={() => setSelectedImage(cert)}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                    whileTap={{ scale: 0.98 }}
                />
            ))}
        </motion.div>

        {selectedImage && (
            <div 
                className="modal" 
                style={{ display: 'flex', backgroundColor: 'rgba(0,0,0,0.95)' }} 
                onClick={() => setSelectedImage(null)}
            >
                <span className="close-modal">&times;</span>
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