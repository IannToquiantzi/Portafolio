function About() {
  return (
    <section style={{ padding: "80px 0" }}>
      <h2 style={{ 
        fontSize: "2rem", 
        fontWeight: "bold", 
        marginBottom: "20px",
        textAlign: "center"
      }}>
        About Me
      </h2>

      <p style={{
        maxWidth: "900px",
        margin: "0 auto",
        fontSize: "1.1rem",
        lineHeight: "1.6",
        textAlign: "center"
      }}>
        I am a Computer Science and Technology student at Tecnológico de Monterrey
        (ITESM) with hands-on experience in software development, backend systems,
        web applications, mobile development and game development.
        <br /><br />
        I have worked in real-world projects including a WhatsApp chatbot for 
        “Justicia Ciudadana A.C”, a mobile app for waste collection management, 
        a donation inventory web system using React, Docker and Django, and 
        POS software development with Java and MySQL as part of my internships.
        <br /><br />
        I enjoy learning new technologies, working in collaborative environments 
        and developing solutions that create real value for users and organizations.
      </p>
    </section>
  )
}

export default About
