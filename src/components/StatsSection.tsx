import { Users, MapPin, Star, Calendar } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Happy Travelers",
      description: "Satisfied customers worldwide"
    },
    {
      icon: MapPin,
      number: "120+",
      label: "Destinations",
      description: "Countries and cities covered"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average Rating",
      description: "Based on customer reviews"
    },
    {
      icon: Calendar,
      number: "15+",
      label: "Years Experience",
      description: "In the travel industry"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Our numbers speak for themselves - join the community of satisfied travelers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-white/80">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;