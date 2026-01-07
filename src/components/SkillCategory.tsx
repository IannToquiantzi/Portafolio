type SkillCategoryProps = {
  title: string;
  items: string[];
};

function SkillCategory({ title, items }: SkillCategoryProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3 style={{ fontSize: "1.3rem", fontWeight: "bold" }}>{title}</h3>

      <div style={{ marginTop: "10px" }}>
        {items.map((skill) => (
          <span
            key={skill}
            style={{
              display: "inline-block",
              padding: "6px 12px",
              background: "#eee",
              borderRadius: "6px",
              marginRight: "8px",
              marginBottom: "8px"
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;
