import { skills } from "../data/skills";
import SkillCategory from "../components/SkillCategory";

function Skills() {
  return (
    <section style={{ padding: "60px 20px" }}>
      <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "20px" }}>
        Skills
      </h2>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SkillCategory title="Programming Languages" items={skills.languages} />
        <SkillCategory title="Web Development" items={skills.web} />
        <SkillCategory title="Tools & Engines" items={skills.tools} />
        <SkillCategory title="Soft Skills" items={skills.softSkills} />
      </div>
    </section>
  );
}

export default Skills;
