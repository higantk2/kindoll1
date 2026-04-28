'use client';

import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import CardBackground from '@/components/CardBackground'; 

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 } 
  }
};

export default function Home() {
  return (
    <main>
      {/* FETCHES REAL CARDS FROM API */}
      <CardBackground />

      {/* Hero Section */}
      <section id="hero" className="container" style={{ minHeight: '90vh' }}>
          <motion.div 
            className="hero-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} 
            variants={staggerContainer}
          >
              <motion.h1 variants={fadeInUp}>KINDOLL HYACINTH</motion.h1>
              
              <motion.div variants={fadeInUp} style={{ minHeight: '3rem' }}>
                  <h2 className="typing-target">
                    <TypeAnimation
                      sequence={[
                        'Tech Enthusiast', 1000,
                        'Frontend Developer', 1000,
                        'UI Designer', 1000
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </h2>
              </motion.div>

              <motion.p variants={fadeInUp}>
                I build interactive, accessible, and responsive web applications. Currently an IT student at Holy Cross of Davao College.
              </motion.p>
              
              <motion.div className="tech-stack" variants={fadeInUp}>
                  <h3>My Tech Stack</h3>
                  <div className="tags">
                      {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'MySQL', 'Node.js'].map((tech, i) => (
                          <span key={i} className="tag">{tech}</span>
                      ))}
                  </div>
              </motion.div>

              <motion.div className="cta-container" variants={fadeInUp}>
                  <Link href="#contact" className="primary-btn">Let&apos;s Talk</Link>
                  <a href="/images/Kindoll_CV.pdf" download className="secondary-btn">Download CV</a>
              </motion.div>

              <motion.div className="social-links" variants={fadeInUp}>
                  <a href="https://github.com/higantk2" target="_blank" className="social-icon"><i className="fab fa-github"></i></a>
                  <a href="https://facebook.com" target="_blank" className="social-icon"><i className="fab fa-facebook"></i></a>
                  <a href="https://www.instagram.com/_kindoll1/" target="_blank" className="social-icon"><i className="fab fa-instagram"></i></a>
                  <a href="https://vercel.com/" target="_blank" className="social-icon"><i className="fas fa-code"></i></a>
              </motion.div>
          </motion.div>

          <motion.div 
            className="profile-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            style={{ flexDirection: 'column', alignItems: 'center' }} 
          >
              {/* MORPHING PROFILE STRUCTURE */}
              <div className="profile-glow-container">
                  <img src="/images/profile.jpg" alt="KINDOLL HYACINTH" className="profile-image"/>  
              </div>

              {/* LATIN MOTTO TEXT - INCREASED SIZE */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ 
                  marginTop: '1.5rem', 
                  fontStyle: 'italic', 
                  fontSize: '1.1rem', // Increased from 0.9rem
                  color: 'var(--text-light)',
                  textAlign: 'center',
                  maxWidth: '350px'
                }}
              >
                &quot;Hystericus et inutilis, aliquando alas mihi crescent&quot;
              </motion.p>
          </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container" style={{ minHeight: '90vh', marginBottom: '15vh' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            Featured Projects
          </motion.h2>

          <motion.div 
            className="project-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
          >
              {[
                { title: "Educational Tour", img: "/images/image7.jpg", desc: "Immersive travel journal.", tags: ["HTML", "CSS", "JS"], link: "https://eductour.vercel.app/" },
                { title: "Valorant Tracker", img: "/images/image2.jpg", desc: "Valorant Agents Info", tags: ["React", "API"], link: "https://valoraanttt.vercel.app/" },
                { title: "Valentine Surprise", img: "/images/image1.jpg", desc: "Surprise Gift for Valentines", tags: ["SCSS", "JS"], link: "https://valentines-blush-delta.vercel.app/" },
                { title: "Web Exercise 2", img: "/images/image4.jpg", desc: "practice & first portfolio", tags: ["HTML", "CSS"], link: "https://exercise2-chi.vercel.app/" },
                { title: "Exercise 7", img: "/images/image5.jpg", desc: "Mini exercise game project", tags: ["React", "JS"], link: "https://exercise-7-taupe.vercel.app/" },
                { title: "Adv102 Final", img: "/images/image3.jpg", desc: "Site to save your favorite books", tags: ["Next.js", "DB"], link: "https://advfinals.vercel.app/" }
              ].map((project, index) => (
                <motion.div key={index} className="project-card" variants={fadeInUp} whileHover={{ y: -10 }}>
                    <img src={project.img} alt={project.title} className="project-image" />
                    <div className="project-content">
                        <h3 className="project-title">{project.title}</h3>
                        <p>{project.desc}</p>
                        <div className="tags project-tags">
                            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                        </div>
                        <div className="project-links">
                             <a href={project.link} target="_blank"><i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </motion.div>
              ))}
          </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container" style={{ minHeight: '80vh' }}>
          <motion.div 
            className="contact-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
              <h2>Get In Touch</h2>
              <p>I&apos;m currently looking for internships. Send me a message below!</p>
              
              <form action="https://formspree.io/f/xqarljrb" method="POST" className="contact-form">
                  <div className="form-group"><input type="text" name="name" placeholder="Your Name" required /></div>
                  <div className="form-group"><input type="email" name="email" placeholder="Your Email" required /></div>
                  <div className="form-group"><textarea name="message" rows="5" placeholder="Your Message" required></textarea></div>
                  <button type="submit" className="primary-btn">Send Message <i className="fas fa-paper-plane" style={{marginLeft: '8px'}}></i></button>
              </form>
          </motion.div>
      </section>
    </main>
  );
}