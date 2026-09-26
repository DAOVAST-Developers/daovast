const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js']

export default function Page() {
  return (
    <main className="portfolio-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Sachin home">
          <span className="wordmark-mark">D</span>
          <span>DAOVAST</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">What I do</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero-section" aria-labelledby="hero-title">
        <p className="eyebrow">AI ENGINEER / FRONTEND ENGINEER</p>
        <h1 id="hero-title">Hey, I&apos;m <em>Sachin.</em></h1>
        <p className="hero-copy">
          I design and build polished AI-native products, creative developer experiences, and premium websites that feel fast, personal, and alive from the first second.
        </p>
        <a className="text-link" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
        <div className="scroll-note" aria-hidden="true"><span /> Scroll to explore</div>
      </section>

      <section id="work" className="content-section split-section" aria-labelledby="work-title">
        <div className="section-index">01</div>
        <div>
          <p className="eyebrow">CURRENT FOCUS</p>
          <h2 id="work-title">Building intelligent<br /><span>web experiences.</span></h2>
          <p className="section-copy">AI tools, immersive portfolios, product storytelling, and smooth interfaces.</p>
          <div className="skill-list" aria-label="Skills">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section id="about" className="content-section split-section" aria-labelledby="about-title">
        <div className="section-index">02</div>
        <div>
          <p className="eyebrow">A LITTLE MORE</p>
          <h2 id="about-title">Care about the details<br /><span>that make a difference.</span></h2>
          <p className="section-copy">Hello! My name is Sachin and I enjoy building things that live on the internet. I care about the intersection of clean design, smooth interaction, and maintainable frontend engineering.</p>
          <p className="section-copy">These days, I focus on crafting modern websites and product experiences with Next.js, TypeScript, and motion systems that feel deliberate instead of distracting.</p>
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <p className="eyebrow">03 / HOW TO REACH ME</p>
        <h2 id="contact-title">Have something<br /><em>in mind?</em></h2>
        <a className="contact-email" href="mailto:daovast.web@gmail.com">daovast.web@gmail.com <span aria-hidden="true">↗</span></a>
      </section>

      <footer className="footer"><span>© {new Date().getFullYear()} DAOVAST</span><span>Designed & built by Sachin</span></footer>
    </main>
  )
}

