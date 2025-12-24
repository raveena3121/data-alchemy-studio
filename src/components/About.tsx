import { Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Goal-Driven',
      description: 'Transitioning into Data Analyst & Business Analyst roles with a passion for uncovering actionable insights.',
    },
    {
      icon: Lightbulb,
      title: 'Domain Interests',
      description: 'Focused on finance, e-commerce, and social data projects that create real-world impact.',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Open to mentorship, collaboration, and continuous learning to grow in the data science field.',
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Passionate About <span className="gradient-text">Data-Driven Solutions</span>
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-16">
            {/* Left - Text Content */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-semibold">Raveena S</span>, an aspiring Data Scientist and Business Analyst with a deep passion for transforming raw data into meaningful insights. My journey in data science began with curiosity about how numbers tell stories, and it has evolved into a mission to drive business decisions through analytical thinking.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in building machine learning models, creating insightful visualizations, and developing end-to-end data solutions. My interests span across <span className="text-foreground font-medium">finance analytics</span>, <span className="text-foreground font-medium">e-commerce optimization</span>, and <span className="text-foreground font-medium">social media data analysis</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently seeking opportunities to apply my skills in real-world scenarios, I'm always eager to collaborate on innovative projects and learn from industry experts. Let's connect and explore how data can drive your next big decision!
              </p>
            </div>

            {/* Right - Image/Avatar */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                  <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center overflow-hidden border border-border/50">
                    <div className="text-center p-8">
                      <div className="text-6xl lg:text-7xl font-bold gradient-text mb-4">RS</div>
                      <p className="text-muted-foreground text-sm">Data Enthusiast</p>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
