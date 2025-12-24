import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Raveena S | Data Scientist & Business Analyst Portfolio</title>
        <meta
          name="description"
          content="Raveena S - Aspiring Data Scientist and Business Analyst. Explore my portfolio featuring machine learning projects, data analytics, and business intelligence solutions."
        />
        <meta
          name="keywords"
          content="Data Scientist, Business Analyst, Machine Learning, Python, SQL, Data Analytics, Portfolio"
        />
        <meta property="og:title" content="Raveena S | Data Scientist Portfolio" />
        <meta
          property="og:description"
          content="Explore the data science portfolio of Raveena S featuring ML projects and analytics solutions."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
