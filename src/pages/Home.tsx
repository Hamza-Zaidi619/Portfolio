import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import SocialLinks from '@/components/SocialLinks';
import heroImage from '@/assets/hero-workspace.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground tracking-tight">
                SYED
                <br />
                <span className="text-primary">HAMZA</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light tracking-wider">
                Graphic Designer
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="group">
                <Link to="/resume">
                  Resume
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Link to="/portfolio">
                  Portfolio
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <SocialLinks />
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroImage}
                alt="Modern workspace setup"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-md border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;