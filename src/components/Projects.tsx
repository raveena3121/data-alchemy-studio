import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  tags: string[];
  techStack: string[];
  color: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: 'Rice Leaf Disease Detection',
    description: 'CNN-based deep learning model to classify rice leaf diseases for early detection and improved crop management.',
    tags: ['Deep Learning', 'CNN', 'Image Classification'],
    techStack: ['TensorFlow', 'Keras', 'Python', 'OpenCV'],
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Concrete Compressive Strength',
    description: 'Regression model to predict concrete strength based on mixture components using advanced ML techniques.',
    tags: ['Regression', 'Feature Engineering', 'Prediction'],
    techStack: ['Scikit-learn', 'XGBoost', 'Pandas', 'NumPy'],
    color: 'from-slate-500/20 to-zinc-500/20',
  },
  {
    title: 'FIFA 20 Player Analysis',
    description: 'Comprehensive EDA and statistical analysis of FIFA 20 player attributes to uncover performance insights.',
    tags: ['EDA', 'Visualization', 'Sports Analytics'],
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'Skin Disorder Classification',
    description: 'Machine learning model to detect and classify different types of skin disorders using image analysis.',
    tags: ['ML', 'Healthcare', 'Classification'],
    techStack: ['TensorFlow', 'Python', 'Flask', 'CNN'],
    color: 'from-pink-500/20 to-rose-500/20',
    github: 'https://github.com/raveena3121/Skin-Disorder-Classification',
  },
  {
    title: 'Business Case PRCL-0015',
    description: 'End-to-end business analytics project analyzing real-world business data to derive actionable insights.',
    tags: ['Business Analytics', 'Dashboard', 'Insights'],
    techStack: ['Power BI', 'SQL', 'Excel', 'Python'],
    color: 'from-amber-500/20 to-orange-500/20',
    github: 'https://github.com/raveena3121/Business-Case-for-prcl-0015-',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world data science projects showcasing ML, analytics, and deployment skills
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group card-glass rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image/Gradient */}
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-foreground/10 group-hover:scale-110 transition-transform duration-500">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  
                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-background/90 backdrop-blur-sm text-foreground text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-secondary text-muted-foreground text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full rounded-lg group/btn"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 rounded-lg group/btn opacity-50 cursor-not-allowed"
                        disabled
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg group/btn"
                      disabled={!project.github}
                    >
                      View
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl px-8"
            >
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
