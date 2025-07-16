import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
  Monitor, 
  Palette, 
  Layers, 
  Zap,
  Building,
  Calendar,
  GraduationCap,
  Coffee,
  Gamepad2,
  Camera,
  Plane
} from 'lucide-react';

const Resume = () => {
  const softwareSkills = [
    { name: 'Photoshop', level: 95, icon: Monitor },
    { name: 'Illustrator', level: 90, icon: Palette },
    { name: 'InDesign', level: 85, icon: Layers },
    { name: 'After Effect', level: 80, icon: Zap },
  ];

  const languages = [
    { name: 'Urdu', level: 100 },
    { name: 'English', level: 75 },
    // { name: 'Turkish', level: 60 },
  ];

  const personalSkills = [
    'Creativity',
    'Team Work',
    'Organization'
  ];

  const experience = [
    {
      company: 'WHITE FISH ADVERTISING CO.',
      role: 'Senior Graphic Designer',
      year: '2018',
      icon: Building
    },
    {
      company: 'PYRAMIDS SUN ADVERTISING CO.',
      role: 'Senior Graphic Designer',
      year: '2017',
      icon: Building
    },
    {
      company: 'PLANET STATIONARY & PRINTING SERVICES CO.',
      role: 'Senior Graphic Designer',
      year: '2016',
      icon: Building
    },
    {
      company: 'PLAY GRAPHIC ADVERTISING AGENCY.',
      role: 'Graphic Designer',
      year: '2015',
      icon: Building
    },
    {
      company: 'MARCO FLORIDA INTERNET & COMPUTER SERVICES CO.',
      role: 'Graphic Designer',
      year: '2014',
      icon: Building
    }
  ];

  const services = [
    'Logo • Stationery • Branding',
    'Newsletter • Flyers • Catalogs',
    'Strategy • Advertisements'
  ];

  const designSkills = [
    'Creativity • Planning & Strategy',
    'Signs & Typography • Layout',
    'Grid • Color sense • Inspiration'
  ];

  const hobbies = [
    { name: 'Coffee', icon: Coffee },
    { name: 'Gaming', icon: Gamepad2 },
    { name: 'Photography', icon: Camera },
    { name: 'Travel', icon: Plane }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <div className="py-20">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-4">
              RESUME
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="space-y-12">
              {/* Software Skills */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">SOFTWARE SKILLS</h2>
                <div className="space-y-6">
                  {softwareSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-medium text-foreground">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">LANGUAGES</h2>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{lang.name}</span>
                        <span className="text-sm text-muted-foreground">{lang.level}%</span>
                      </div>
                      <Progress value={lang.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Skills */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">PERSONAL SKILLS</h2>
                <div className="space-y-2">
                  {personalSkills.map((skill, index) => (
                    <p key={index} className="text-muted-foreground">
                      {skill} • Team Work • Organization
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Column */}
            <div className="space-y-12">
              {/* Experience */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">EXPERIENCE</h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => {
                    const Icon = exp.icon;
                    return (
                      <Card key={index} className="p-4 bg-card border-border">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">
                              {exp.company}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">{exp.role}</p>
                            <Badge variant="secondary" className="text-xs">
                              {exp.year}
                            </Badge>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">EDUCATION</h2>
                <Card className="p-4 bg-card border-border">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        BS in Computer Science,
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Dawood University
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* What Can I Do */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">WHAT CAN I DO ?</h2>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <p key={index} className="text-muted-foreground">
                      {service}
                    </p>
                  ))}
                </div>
              </div>

              {/* Design Skills */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">DESIGN SKILLS</h2>
                <div className="space-y-3">
                  {designSkills.map((skill, index) => (
                    <p key={index} className="text-muted-foreground">
                      {skill}
                    </p>
                  ))}
                </div>
              </div>

              {/* Hobbies & Interests */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">HOBBIES & INTERESTS</h2>
                <div className="grid grid-cols-2 gap-4">
                  {hobbies.map((hobby, index) => {
                    const Icon = hobby.icon;
                    return (
                      <div key={index} className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg">
                        <Icon className="w-8 h-8 text-primary mb-2" />
                        <span className="text-sm font-medium text-foreground">{hobby.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;