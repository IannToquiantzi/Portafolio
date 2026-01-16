function Hero() {
  return (
    <section style={{ padding: "80px 0", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
        Horacio Iann Toquiantzi
        <div className="text-red-500 text-4xl">
        Tailwind funcionando
        </div>
      </h1>

      <p style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
        Software Developer | Full Stack | Game Development Enthusiast
      </p>

      <p style={{ 
        maxWidth: "700px", 
        margin: "20px auto", 
        fontSize: "1.1rem", 
        lineHeight: "1.5" 
      }}>
        Passionate about building scalable applications, solving real-world
        problems and contributing to multidisciplinary teams. Experience in
        web apps, mobile development, backend systems and game projects.
      </p>

      <a
        href="https://github.com/TU_USUARIO"
        target="_blank"
        style={{
          padding: "10px 20px",
          background: "#000",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          marginTop: "20px",
          display: "inline-block"
        }}
      >
        View my GitHub
      </a>
    </section>
  )
}

export default Hero
