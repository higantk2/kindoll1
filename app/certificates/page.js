'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import CardBackground from '@/components/CardBackground';

// Animation settings
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
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Close modal on "Escape" key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const certificates = [
    { 
      src: "/images/cert3.png", 
      alt: "English for Developers",
      issuer: "freeCodeCamp",
      date: "December 5, 2025",
      verifyLink: "https://www.freecodecamp.org/certification/kindoll1/a2-english-for-developers"
    },
    { 
      src: "/images/cert1.png", 
      alt: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "December 5, 2025",
      verifyLink: "https://www.freecodecamp.org/certification/kindoll1/javascript-v9"
    },
    { 
      src: "/images/cert2.png", 
      alt: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "December 5, 2025",
      verifyLink: "https://www.freecodecamp.org/certification/kindoll1/responsive-web-design-v9"
    },
    { 
      src: "/images/image6.jpg", 
      alt: "Educational Tour Completion",
      issuer: "World of Adventures Travel and Tours",
      date: "November 22, 2025",
      verifyLink: null 
    },
    { 
      src: "/images/cert4.png", 
      alt: "Operating Systems Basics",
      issuer: "Cisco Networking Academy",
      date: "December 1, 2025",
      verifyLink: null 
    },
    { 
      src: "/images/cert5.png", 
      alt: "Computer Hardware Basics",
      issuer: "Cisco Networking Academy",
      date: "December 1, 2025",
      verifyLink: null 
    },
  ];

  return (
    <section className="container cert-container">
        <CardBackground />

        <motion.div 
          className="cert-header"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
            <h1>My Certificates</h1>
            <p>Click on any certificate to view details & verify.</p>
        </motion.div>
        
        <motion.div 
          className="cert-grid"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
            {certificates.map((cert, index) => (
                <motion.div key={index} className="cert-wrapper" variants={fadeInUp}>
                    <motion.img 
                        layoutId={cert.src} // Start of morph animation
                        src={cert.src} 
                        alt={cert.alt} 
                        className="cert-image"
                        onClick={() => setSelectedImage(cert)}
                        whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.98 }}
                        style={{ cursor: 'pointer' }}
                    />
                </motion.div>
            ))}
        </motion.div>

        {/* Modal Overlay */}
        <AnimatePresence>
            {selectedImage && (
                <motion.div 
                    className="modal" 
                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedImage(null)}
                >
                    <span className="close-modal">&times;</span>
                    
                    <motion.div 
                        className="modal-card"
                        onClick={(e) => e.stopPropagation()} // Prevent clicking content from closing modal
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <motion.img 
                            layoutId={selectedImage.src} // End of morph animation
                            src={selectedImage.src} 
                            alt={selectedImage.alt} 
                            className="modal-image-content"
                        />
                        
                        <div className="modal-details">
                            <h2>{selectedImage.alt}</h2>
                            <div className="meta-info">
                                <p><i className="fas fa-certificate"></i> {selectedImage.issuer}</p>
                                <p><i className="fas fa-calendar-alt"></i> {selectedImage.date}</p>
                            </div>

                            {selectedImage.verifyLink ? (
                                <a 
                                    href={selectedImage.verifyLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="verify-btn"
                                >
                                    Verify Credential <i className="fas fa-external-link-alt"></i>
                                </a>
                            ) : (
                                <span className="no-link-badge">Credential Verified Offline</span>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

        <div className="fixed-bottom-nav">
            <Link href="/" className="back-btn"><i className="fas fa-arrow-left"></i> Go Back Home</Link>
        </div>
    </section>
  );
}