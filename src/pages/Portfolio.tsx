import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Brand Identity Design',
      category: 'Branding',
      description: 'Complete brand identity system including logo, color palette, and typography guidelines.',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
      tags: ['Illustrator', 'Photoshop', 'Branding']
    },
    {
      title: 'Marketing Campaign',
      category: 'Print Design',
      description: 'Multi-channel marketing campaign with print advertisements and digital assets.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tags: ['InDesign', 'Print', 'Marketing']
    },
    {
      title: 'Product Packaging',
      category: 'Package Design',
      description: 'Innovative packaging design that increased product visibility by 40%.',
      image: 'https://images.unsplash.com/photo-1586953983027-d7508a64f4bb?w=800&h=600&fit=crop',
      tags: ['Packaging', ' 3D Design', 'Product']
    },
    {
      title: 'Digital Illustrations',
      category: 'Illustration',
      description: 'Series of digital illustrations for mobile app interface and marketing materials.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['Illustration', 'Digital Art', 'UI']
    },
    {
      title: 'Website Redesign',
      category: 'Web Design',
      description: 'Complete website redesign focusing on user experience and conversion optimization.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['Web Design', 'UX/UI', 'Responsive']
    },
    {
      title: 'Annual Report Design',
      category: 'Editorial',
      description: 'Annual report design with infographics and data visualization elements.',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop',
      tags: ['Editorial', 'Data Viz', 'Print']
    }
  ];

  const categories = ['All', 'Branding', 'Print Design', 'Web Design', 'Illustration', 'Package Design', 'Editorial'];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <div className="py-20">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-4">
              PORTFOLIO
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of creative projects spanning brand identity, digital design, 
              and innovative marketing solutions.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <Github className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Interested in working together?
            </p>
            <button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground px-8 py-3 rounded-lg font-medium">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;