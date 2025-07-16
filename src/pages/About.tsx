import profileImage from '@/assets/profile-photo.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                ABOUT
              </h1>
              <p className="text-lg text-primary font-medium">
                https://github.com/Hamza-Zaidi619
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Graphic Designer with over 10 years of experience 
                specializing in IT Department management for 
                international logistics companies.
              </p>
              
              <p>
                I enjoy helping clients achieve their projects at local 
                and global levels. My greatest strength is 
                business awareness, which enables me to 
                effectively accommodate corporate requirements 
                and applications.
              </p>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Based in</p>
                <p className="text-lg font-medium text-foreground">
                  Karachi, Pakistan
                  <br />
                  32829 State Road 436
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative lg:order-last">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={profileImage}
                alt="Jason Martin - Graphic Designer"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;