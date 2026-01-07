function Contact() {
  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "20px" }}>
        Contact
      </h2>

      <p style={{ fontSize: "1.1rem", marginBottom: "30px" }}>
        I'm always open to new opportunities, collaborations, and professional challenges.
        Feel free to reach out to me through any of the platforms below:
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        <a
          href="mailto:ianntoquiantzi020419@hotmail.com"
          style={{
            padding: "10px 20px",
            background: "#000",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            minWidth: "140px",
            textAlign: "center"
          }}
        >
          Email Me
        </a>

        <a
          href="https://github.com/IannToquiantzi"
          target="_blank"
          style={{
            padding: "10px 20px",
            background: "#333",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            minWidth: "140px",
            textAlign: "center"
          }}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/horacio-iann/"
          target="_blank"
          style={{
            padding: "10px 20px",
            background: "#0a66c2",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            minWidth: "140px",
            textAlign: "center"
          }}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
