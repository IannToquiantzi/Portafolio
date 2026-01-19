function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact</h2>

      <p className="contact-description">
        I'm always open to new opportunities, collaborations, and professional challenges.
        Feel free to reach out to me through any of the platforms below:
      </p>

      <div className="contact-links">
        <a href="mailto:ianntoquiantzi020419@hotmail.com" className="contact-btn email">
          Email Me
        </a>

        <a href="https://github.com/IannToquiantzi" target="_blank" className="contact-btn github">
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/horacio-iann/" target="_blank" className="contact-btn linkedin">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;

