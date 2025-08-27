import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import testimonialBg from "@/assets/testimonial-bg.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "SkyVoyage made our honeymoon to Maldives absolutely perfect! Every detail was taken care of, and the overwater villa exceeded our expectations."
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      rating: 5,
      text: "The Japan cultural tour was incredible. Our guide was knowledgeable and the itinerary was perfectly balanced between temples, cities, and nature."
    },
    {
      id: 3,
      name: "Emma Williams",
      location: "London, UK",
      rating: 5,
      text: "Switzerland adventure package was a dream come true! The mountain railways, Alpine hiking, and Swiss hospitality were unforgettable."
    }
  ];

  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${testimonialBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Real experiences from real travelers who trusted us with their dream vacations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/95 backdrop-blur-sm hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;