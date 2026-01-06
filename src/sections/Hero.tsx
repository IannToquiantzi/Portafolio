function Hero() {
  return (
    <section style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
        Horacio Iann Toquiantzi
      </h1>
      <p style={{ fontSize: "1.5rem", marginTop: "10px" }}>
        Software Developer | Full Stack | Game Development Enthusiast
      </p>

      <p style={{ maxWidth: "600px", margin: "20px auto", fontSize: "1.1rem" }}>
        Passionate about building scalable applications, solving real-world
        problems and contributing to multidisciplinary teams. Experience in 
        web apps, mobile development, backend systems and game projects.
      </p>

      <div style={{ marginTop: "20px" }}>
        <a
          href="https://github.com/IannToquiantzi"
          target="_blank"
          style={{
            padding: "10px 20px",
            background: "#000",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          View my GitHub
        </a>
      </div>
    </section>
  )
}

export default Hero