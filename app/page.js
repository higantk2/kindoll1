import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Animation Wrapper */}
      <div className="animation-wrapper">
          <div className="particle p1"></div>
          <div className="particle p2"></div>
          <div className="particle p3"></div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="container">
          <div className="hero-content">
              <h1>KINDOLL HYACINTH</h1>
              <h2 className="typing-target">Frontend Developer</h2>
              <p>I build interactive, accessible, and responsive web applications. Currently an IT student at Holy Cross of Davao College passionate about solving problems with code.</p>
              
              <div className="tech-stack">
                  <h3>My Tech Stack</h3>
                  <div className="tags">
                      <span className="tag"><i className="fab fa-html5"></i> HTML</span>
                      <span className="tag"><i className="fab fa-css3-alt"></i> CSS</span>
                      <span className="tag"><i className="fab fa-js"></i> JavaScript</span>
                      <span className="tag"><i className="fab fa-react"></i> React</span>
                      <span className="tag"><i className="fas fa-database"></i> Database</span>
                      <span className="tag"><i className="fab fa-node-js"></i> Node.js</span>
                  </div>
              </div>

              <div className="cta-container">
                  <Link href="#contact" className="primary-btn">
                      Let's Talk <i className="fas fa-paper-plane"></i>
                  </Link>
                  <a href="/images/Kindoll_CV.pdf" download="Kindoll_CV.pdf" className="secondary-btn">
                      Download CV <i className="fas fa-download"></i>
                  </a>
              </div>

              <div className="social-links">
                  <a href="https://github.com/higantk2" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
                  <a href="https://vercel.com/kindoll-hyacinth-peraans-projects" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fas fa-code"></i></a>
                  <a href="https://www.facebook.com/damiankyzen" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook"></i></a>
              </div>
          </div>
          <div className="profile-image-container">
              <img src="https://i.pinimg.com/originals/5e/a0/fa/5ea0faff904b5289355ddf226d89193e.jpg" alt="KINDOLL HYACINTH" className="profile-image" />
          </div>
      </section>

      {/* Projects Section - FULLY EXPANDED */}
      <section id="projects" className="container">
          <h2>Featured Projects</h2>
          <div className="project-grid">
              
              {/* Project 1: Educational Tour */}
              <div className="project-card">
                  <img src="/images/image7.jpg" alt="Educational Tour" className="project-image" />
                  <div className="project-content">
                      <div className="project-header">
                          <h3 className="project-title">Educational Tour</h3>
                          <div className="project-links">
                              <a href="https://eductour.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                          </div>
                      </div>
                      <p className="project-description">An immersive travel journal website featuring photo galleries and daily logs.</p>
                      <div className="tags project-tags">
                          <span className="tag">HTML</span> <span className="tag">CSS</span> <span className="tag">JS</span>
                      </div>
                  </div>
              </div>

              {/* Project 2: Valentine Surprise */}
              <div className="project-card">
                  <img src="/images/image1.jpg" alt="Valentine Surprise" className="project-image" />
                  <div className="project-content">
                      <div className="project-header">
                          <h3 className="project-title">Valentine Surprise</h3>
                          <div className="project-links">
                              <a href="https://valentines-blush-delta.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                          </div>
                      </div>
                      <p className="project-description">A special animated dashboard project deployed on Vercel.</p>
                      <div className="tags project-tags">
                          <span className="tag">CSS</span> <span className="tag">JS</span> <span className="tag">SCSS</span>
                      </div>
                  </div>
              </div>

              {/* Project 3: Valorant Agent Tracker */}
              <div className="project-card">
                  <img src="/images/image2.jpg" alt="Valorant Agent Tracker" className="project-image" />
                  <div className="project-content">
                      <div className="project-header">
                          <h3 className="project-title">Valorant Agent Tracker</h3>
                          <div className="project-links">
                              <a href="https://valoraanttt.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                          </div>
                      </div>
                      <p className="project-description">A data tracking application for Valorant players using modern API integration.</p>
                      <div className="tags project-tags">
                          <span className="tag">React</span> <span className="tag">API</span>
                      </div>
                  </div>
              </div>

              {/* Project 4: Web Exercise 2 */}
              <div className="project-card">
                  <img src="/images/image4.jpg" alt="Web Exercise 2" className="project-image" />
                  <div className="project-content">
                      <div className="project-header">
                          <h3 className="project-title">Web Exercise 2</h3>
                          <div className="project-links">
                              <a href="https://exercise2-chi.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                          </div>
                      </div>
                      <p className="project-description">Class exercise focusing on layout and responsiveness.</p>
                      <div className="tags project-tags">
                          <span className="tag">HTML</span> <span className="tag">CSS</span>
                      </div>
                  </div>
              </div>

              {/* Project 5: Exercise 7 */}
              <div className="project-card">
                  <img src="/images/image5.jpg" alt="Exercise 7" className="project-image" />
                  <div className="project-content">
                      <div className="project-header">
                          <h3 className="project-title">Exercise 7</h3>
                          <div className="project-links">
                              <a href="https://exercise-7-taupe.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                          </div>
                      </div>
                      <p className="project-description">Frontend development practice and component structure.</p>
                      <div className="tags project-tags">
                          <span className="tag">React</span> <span className="tag">JS</span>
                      </div>
                  </div>
              </div>

              {/* Project 6: Adv102 Final Project */}
              <div className="project-card">
                  <img src="/images/image3.jpg" alt="Adv102 Final Project" className="project-image" />
                  <div className="project-content">
                      <div className="project-header">
                          <h3 className="project-title">Adv102 Final Project</h3>
                          <div className="project-links">
                              <a href="https://advfinals.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                          </div>
                      </div>
                      <p className="project-description">Final project submission showcasing advanced web techniques and databases.</p>
                      <div className="tags project-tags">
                          <span className="tag">Next.js</span> <span className="tag">DB</span>
                      </div>
                  </div>
              </div>

          </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container">
          <h2>Get In Touch</h2>
          <div className="contact-wrapper">
              <p>I&apos;m currently looking for internships and new opportunities. Send me a message below!</p>
              
              <form action="https://formspree.io/f/xqarljrb" method="POST" className="contact-form">
                  <div className="form-group">
                      <input type="text" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                      <input type="email" name="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                      <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                  </div>
                  <button type="submit" className="primary-btn">Send Message <i className="fas fa-paper-plane"></i></button>
              </form>
          </div>
      </section>
    </main>
  );
}