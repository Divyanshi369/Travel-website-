import { Plane, Hotel, MapPin, Shield, Clock, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Best deals on domestic and international flights with flexible booking options"
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description: "Luxury accommodations and budget-friendly stays worldwide"
    },
    {
      icon: MapPin,
      title: "Guided Tours",
      description: "Expert local guides for immersive cultural and adventure experiences"
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive coverage for peace of mind during your travels"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need help during your journey"
    },
    {
      icon: Users,
      title: "Custom Packages",
      description: "Personalized itineraries tailored to your preferences and budget"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for the perfect trip, all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover-lift text-center group transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-sky rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;