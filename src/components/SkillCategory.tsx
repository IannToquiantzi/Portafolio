type SkillCategoryProps = {
  title: string;
  items: string[];
};

function SkillCategory({ title, items }: SkillCategoryProps) {
  return (
    <div className="skill-category">
      <h3 className="skill-category-title">{title}</h3>

      <div className="skill-tags">
        {items.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;
