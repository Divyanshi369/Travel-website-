import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Globe, Heart } from "lucide-react";

import sarahImg from "@/assets/image.png";
import michaelImg from "@/assets/image.png";
import emmaImg from "@/assets/image.png";
import davidImg from "@/assets/image.png";

const About = () => {
  const stats = [
    { icon: Users, value: "50,000+", label: "Happy Travelers" },
    { icon: Globe, value: "150+", label: "Destinations" },
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: Heart, value: "99%", label: "Customer Satisfaction" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: sarahImg,
      bio: "With 25 years in the travel industry, Sarah founded  to make world-class travel accessible to everyone."
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: michaelImg,
      bio: "Michael ensures every trip runs smoothly with his expertise in logistics and customer service excellence."
    },
    {
      name: "Emma Rodriguez",
      role: "Travel Experience Designer",
      image: emmaImg,
      bio: "Emma crafts unique travel experiences that create lasting memories for our adventurous travelers."
    },
    {
      name: "David Thompson",
      role: "Customer Relations Manager",
      image: davidImg,
      bio: "David is dedicated to providing exceptional support and ensuring every customer has an amazing journey."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-sky text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Bankaii Travels
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              We're passionate about creating extraordinary travel experiences 
              that inspire, educate, and connect people from around the world.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-sky rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  At Bankaii Travels , we believe that travel has the power to transform lives, 
                  broaden perspectives, and create connections that last a lifetime. 
                  Our mission is to make exceptional travel experiences accessible to everyone, 
                  while promoting sustainable and responsible tourism practices.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Why Choose Bankaii Travels?</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Expert travel planning with personalized attention to detail</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>24/7 customer support throughout your journey</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Sustainable travel practices and local community support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Competitive pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Carefully vetted accommodations and experiences</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-ocean rounded-2xl p-8 text-white">
                  <h4 className="text-xl font-bold mb-4">Our Values</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold">Adventure</h5>
                      <p className="text-sm opacity-90">Embracing new experiences and pushing boundaries</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Authenticity</h5>
                      <p className="text-sm opacity-90">Genuine connections with local cultures and communities</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Sustainability</h5>
                      <p className="text-sm opacity-90">Protecting the places we visit for future generations</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Excellence</h5>
                      <p className="text-sm opacity-90">Delivering exceptional service in every interaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our passionate team of travel experts is dedicated to making your dream vacation a reality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover-lift">
                  <CardHeader>
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-primary font-semibold">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;