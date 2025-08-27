import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import maldivesImg from "@/assets/destinations/maldives.jpg";
import switzerlandImg from "@/assets/destinations/switzerland.jpg";
import japanImg from "@/assets/destinations/japan.jpg";

const FeaturedDestinations = () => {
  const featuredDestinations = [
    {
      id: 1,
      name: "Maldives",
      description: "Crystal clear waters and overwater bungalows",
      image: maldivesImg,
      price: "From $2,500",
      duration: "7 days"
    },
    {
      id: 2,
      name: "Switzerland",
      description: "Alpine adventures and scenic mountain railways",
      image: switzerlandImg,
      price: "From $3,200",
      duration: "10 days"
    },
    {
      id: 3,
      name: "Japan",
      description: "Ancient temples and modern wonders",
      image: japanImg,
      price: "From $2,800",
      duration: "12 days"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-sky bg-clip-text text-transparent">
            Featured Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular travel destinations, carefully selected for unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredDestinations.map((destination) => (
            <Card key={destination.id} className="hover-lift group overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {destination.duration}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{destination.name}</h3>
                  <p className="text-lg opacity-90">{destination.price}</p>
                </div>
              </div>
              
              <CardHeader>
                <CardDescription className="text-base">
                  {destination.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/destinations">
                    Explore More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/destinations">
              View All Destinations
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;