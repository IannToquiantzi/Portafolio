import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" data-aos="fade-up" data-aos-duration="1200">
      <h2 className="contact-title">Contact</h2>

      <p className="contact-description">
        I'm always open to new opportunities, collaborations, and professional challenges.
        Feel free to reach out to me through any of the platforms below:
      </p>

      <div className="contact-links">
        <a href="mailto:ianntoquiantzi020419@hotmail.com" className="contact-btn email">
          <FaEnvelope size={18} style={{ marginRight: "8px" }} />
          Email Me
        </a>

        <a href="https://github.com/IannToquiantzi" target="_blank" className="contact-btn github">
          <FaGithub size={18} style={{ marginRight: "8px" }} />
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/horacio-iann/" target="_blank" className="contact-btn linkedin">
          <FaLinkedin size={18} style={{ marginRight: "8px" }} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;


