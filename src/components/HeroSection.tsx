import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Explore the World
            <span className="block bg-gradient-sunset bg-clip-text text-transparent">
              With Us
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover breathtaking destinations, create unforgettable memories, 
            and embark on the adventure of a lifetime with our expertly crafted travel experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="hero" size="xl" asChild>
              <Link to="/booking">
                Book Your Adventure
              </Link>
            </Button>
            <Button variant="hero" size="xl"  border-white text-white asChild>
              <Link to="/destinations">
                Explore Destinations
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
      </div>

      {/* Floating Elements */}
      {/* <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-2xl float"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-primary/20 rounded-full blur-lg float" style={{ animationDelay: '1s' }}></div> */}
    </section>
  );
};

export default HeroSection;