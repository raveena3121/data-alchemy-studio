import { useState } from 'react';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'SQL', icon: '🗃️' },
    ],
  },
  {
    title: 'Data Science & ML',
    skills: [
      { name: 'Scikit-learn', icon: '🔬' },
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'Keras', icon: '⚡' },
      { name: 'XGBoost', icon: '🚀' },
      { name: 'Random Forest', icon: '🌲' },
      { name: 'Regression', icon: '📈' },
      { name: 'Clustering', icon: '🎯' },
      { name: 'NLP', icon: '💬' },
      { name: 'EDA', icon: '🔍' },
      { name: 'Statistical Modeling', icon: '📊' },
    ],
  },
  {
    title: 'Data Analysis',
    skills: [
      { name: 'Pandas', icon: '🐼' },
      { name: 'NumPy', icon: '🔢' },
      { name: 'Excel (Advanced)', icon: '📗' },
      { name: 'Power BI', icon: '📉' },
      { name: 'Data Cleaning', icon: '🧹' },
      { name: 'Visualization', icon: '📊' },
      { name: 'Dashboard Dev', icon: '🖥️' },
    ],
  },
  {
    title: 'MLOps & Deployment',
    skills: [
      { name: 'Flask', icon: '🌶️' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'Streamlit', icon: '🌊' },
      { name: 'Docker', icon: '🐳' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'PostgreSQL', icon: '🐘' },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git & GitHub', icon: '🔀' },
      { name: 'Jupyter Notebook', icon: '📓' },
      { name: 'VS Code', icon: '💻' },
      { name: 'API Development', icon: '🔗' },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory
    ? skillCategories.filter((cat) => cat.title === activeCategory)
    : skillCategories;

  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary/30 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building end-to-end data science solutions
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/80 text-muted-foreground'
              }`}
            >
              All
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.title
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80 text-muted-foreground'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="space-y-10">
            {filteredCategories.map((category, catIndex) => (
              <div key={category.title} className="animate-fade-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="card-glass rounded-xl p-4 flex flex-col items-center gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default"
                      style={{ animationDelay: `${skillIndex * 0.05}s` }}
                    >
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-foreground text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
