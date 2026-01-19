import { skills } from "../data/skills";
import SkillCategory from "../components/SkillCategory";

export default function Skills() {
  return (
    <section className="skills-section" data-aos="fade-up" data-aos-duration="1400">
      <h2 className="skills-title">Skills</h2>

      <SkillCategory title="Programming Languages" items={skills.languages} />
      <SkillCategory title="Web Development" items={skills.web} />
      <SkillCategory title="Tools & Engines" items={skills.tools} />
      <SkillCategory title="Soft Skills" items={skills.softSkills} />
    </section>
  );
}
