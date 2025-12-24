import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'raveena3121@gmail.com',
      href: 'mailto:raveena3121@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'raveena-s',
      href: 'https://www.linkedin.com/in/raveena-s-bb8230300',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'raveena-s',
      href: 'https://github.com',
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing data science projects, opportunities, or collaborations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="rounded-xl bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="rounded-xl bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    required
                    className="rounded-xl bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    required
                    className="rounded-xl bg-secondary/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card-glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="card-glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-secondary/50">
                    <div className="text-3xl font-bold gradient-text mb-1">5+</div>
                    <p className="text-sm text-muted-foreground">Projects</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-secondary/50">
                    <div className="text-3xl font-bold gradient-text mb-1">10+</div>
                    <p className="text-sm text-muted-foreground">Technologies</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-secondary/50">
                    <div className="text-3xl font-bold gradient-text mb-1">1</div>
                    <p className="text-sm text-muted-foreground">Internship</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-secondary/50">
                    <div className="text-3xl font-bold gradient-text mb-1">∞</div>
                    <p className="text-sm text-muted-foreground">Curiosity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
