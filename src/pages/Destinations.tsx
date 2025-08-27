import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import maldivesImg from "@/assets/destinations/maldives.jpg";
import switzerlandImg from "@/assets/destinations/switzerland.jpg";
import japanImg from "@/assets/destinations/japan.jpg";
import icelandImg from "@/assets/destinations/iceland.jpg";
import baliImg from "@/assets/destinations/bali.jpg";
import norwayImg from "@/assets/destinations/norway.jpg";

const Destinations = () => {
  const destinations = [
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
    },
    {
      id: 4,
      name: "Iceland",
      description: "Northern lights and natural hot springs",
      image: icelandImg,
      price: "From $2,400",
      duration: "8 days"
    },
    {
      id: 5,
      name: "Bali",
      description: "Tropical paradise with rich culture",
      image: baliImg,
      price: "From $1,800",
      duration: "9 days"
    },
    {
      id: 6,
      name: "Norway",
      description: "Majestic fjords and midnight sun",
      image: norwayImg,
      price: "From $3,500",
      duration: "11 days"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-sky bg-clip-text text-transparent">
            Popular Destinations
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing places around the world. From tropical paradises to snowy mountains, 
            we have the perfect destination for your next adventure.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="hover-lift group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {destination.duration}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{destination.name}</CardTitle>
                <CardDescription className="text-lg">
                  {destination.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  {destination.price}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button variant="default" className="flex-1">
                  View More
                </Button>
                <Button variant="hero" className="flex-1">
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-12 bg-gradient-sky rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Can't Find Your Dream Destination?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us create a custom travel package just for you
          </p>
          <Button variant="sunset" size="xl">
            Contact Our Travel Experts
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Destinations;