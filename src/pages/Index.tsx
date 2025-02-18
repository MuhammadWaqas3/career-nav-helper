
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Search, BookOpen, Brain, HelpCircle, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Find Universities",
      description: "Compare and explore top universities across Pakistan",
      link: "/universities",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Entry Test Prep",
      description: "Comprehensive preparation resources for all major tests",
      link: "/entry-test",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "CS Career Quiz",
      description: "Discover if Computer Science is the right path for you",
      link: "/cs-quiz",
    },
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Get Help",
      description: "Expert guidance and answers to all your questions",
      link: "/doubts",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-grow">
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-light to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8 animate-fadeIn">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary">
                Shape Your Future with
                <span className="text-primary block mt-2">Confidence</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-secondary/80">
                Your comprehensive guide to choosing the right career path and securing admission in your dream university.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  to="/universities"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors duration-200"
                >
                  Explore Universities
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/cs-quiz"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary-light transition-colors duration-200"
                >
                  Take CS Quiz
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.link}
                  className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="h-12 w-12 bg-primary-light rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-secondary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary/70">
                    {feature.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <GraduationCap className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="font-heading text-3xl font-bold text-secondary mb-2">100+</div>
                <div className="text-secondary/70">Universities Listed</div>
              </div>
              <div className="p-6">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="font-heading text-3xl font-bold text-secondary mb-2">1000+</div>
                <div className="text-secondary/70">Past Papers</div>
              </div>
              <div className="p-6">
                <HelpCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="font-heading text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-secondary/70">Expert Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
