import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, MapPin } from "lucide-react";
import maldivesImg from "@/assets/destinations/maldives.jpg";
import switzerlandImg from "@/assets/destinations/switzerland.jpg";
import japanImg from "@/assets/destinations/japan.jpg";
import icelandImg from "@/assets/destinations/iceland.jpg";
import baliImg from "@/assets/destinations/bali.jpg";
import norwayImg from "@/assets/destinations/norway.jpg";

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Tropical Paradise Escape",
      destination: "Maldives",
      price: 2499,
      originalPrice: 2999,
      duration: "7 days, 6 nights",
      maxPeople: 4,
      featured: true,
      image: maldivesImg,
      inclusions: [
        "Round-trip flights",
        "Overwater villa accommodation",
        "All meals included",
        "Snorkeling equipment",
        "Spa treatments",
        "Airport transfers"
      ]
    },
    {
      id: 2,
      name: "European Adventure",
      destination: "Switzerland & Austria",
      price: 3199,
      originalPrice: 3799,
      duration: "10 days, 9 nights",
      maxPeople: 6,
      featured: false,
      image: switzerlandImg,
      inclusions: [
        "Round-trip flights",
        "4-star hotel accommodation",
        "Daily breakfast",
        "Train passes",
        "Guided city tours",
        "Cable car rides"
      ]
    },
    {
      id: 3,
      name: "Cultural Discovery",
      destination: "Japan",
      price: 2799,
      originalPrice: 3299,
      duration: "12 days, 11 nights",
      maxPeople: 8,
      featured: true,
      image: japanImg,
      inclusions: [
        "Round-trip flights",
        "Traditional ryokan stays",
        "JR Pass included",
        "Tea ceremony experience",
        "Temple visits",
        "English-speaking guide"
      ]
    },
    {
      id: 4,
      name: "Northern Lights Quest",
      destination: "Iceland",
      price: 2399,
      originalPrice: 2899,
      duration: "8 days, 7 nights",
      maxPeople: 5,
      featured: false,
      image: icelandImg,
      inclusions: [
        "Round-trip flights",
        "Hotel accommodation",
        "Northern lights tours",
        "Blue Lagoon entry",
        "Golden Circle tour",
        "Winter gear rental"
      ]
    },
    {
      id: 5,
      name: "Island Hopping Adventure",
      destination: "Bali & Lombok",
      price: 1799,
      originalPrice: 2199,
      duration: "9 days, 8 nights",
      maxPeople: 6,
      featured: false,
      image: baliImg,
      inclusions: [
        "Round-trip flights",
        "Beach resort stays",
        "Island transfers",
        "Volcano trekking",
        "Cultural performances",
        "Cooking classes"
      ]
    },
    {
      id: 6,
      name: "Fjord Explorer",
      destination: "Norway",
      price: 3499,
      originalPrice: 3999,
      duration: "11 days, 10 nights",
      maxPeople: 4,
      featured: true,
      image: norwayImg,
      inclusions: [
        "Round-trip flights",
        "Premium accommodation",
        "Fjord cruises",
        "Train journeys",
        "Northern lights hunt",
        "Glacier walks"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ocean bg-clip-text text-transparent">
            Travel Packages
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully curated travel experiences with everything included. 
            Choose from our premium packages or let us customize one for you.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`hover-lift overflow-hidden ${pkg.featured ? 'ring-2 ring-primary' : ''}`}>
              {pkg.featured && (
                <div className="bg-gradient-hero text-white text-center py-2 font-semibold">
                  ⭐ Featured Package
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90">
                    {pkg.destination}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl flex justify-between items-start">
                  <span>{pkg.name}</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      ${pkg.price}
                    </div>
                    {pkg.originalPrice > pkg.price && (
                      <div className="text-sm text-muted-foreground line-through">
                        ${pkg.originalPrice}
                      </div>
                    )}
                  </div>
                </CardTitle>
                
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">Up to {pkg.maxPeople} people</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">What's Included:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {pkg.inclusions.slice(0, 4).map((inclusion, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{inclusion}</span>
                      </div>
                    ))}
                    {pkg.inclusions.length > 4 && (
                      <div className="text-sm text-muted-foreground">
                        +{pkg.inclusions.length - 4} more inclusions
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>

              <div className="p-6 pt-0 flex gap-3">
                <Button variant="outline" className="flex-1">
                  View Details
                </Button>
                <Button variant="hero" className="flex-1">
                  Book Package
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="text-center mt-16 p-12 bg-gradient-sunset rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Need Something Different?</h2>
          <p className="text-xl mb-8 opacity-90">
            We create personalized travel packages tailored to your preferences and budget
          </p>
          <Button variant="ocean" size="xl">
            Create Custom Package
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Packages;