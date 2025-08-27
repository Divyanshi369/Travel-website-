import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Users, MapPin, Phone, Mail, CreditCard } from "lucide-react";

const Booking = () => {
  const destinations = [
    "Maldives - Tropical Paradise",
    "Switzerland - Alpine Adventure",
    "Japan - Cultural Discovery",
    "Iceland - Northern Lights",
    "Bali - Island Paradise",
    "Norway - Fjord Explorer",
    "Custom Destination"
  ];

  const packages = [
    "Economy Package",
    "Premium Package",
    "Luxury Package",
    "Custom Package"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Book Your Adventure
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Ready to explore the world? Let's plan your perfect getaway together.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Booking Steps */}
              <div className="flex items-center justify-center mb-12 space-x-4 md:space-x-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="ml-2 text-sm md:text-base">Trip Details</span>
                </div>
                <div className="w-8 md:w-16 h-px bg-border"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="ml-2 text-sm md:text-base">Personal Info</span>
                </div>
                <div className="w-8 md:w-16 h-px bg-border"></div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="ml-2 text-sm md:text-base">Confirmation</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Booking Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Trip Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Destination</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select destination" />
                            </SelectTrigger>
                            <SelectContent>
                              {destinations.map((destination) => (
                                <SelectItem key={destination} value={destination}>
                                  {destination}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Package Type</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select package" />
                            </SelectTrigger>
                            <SelectContent>
                              {packages.map((pkg) => (
                                <SelectItem key={pkg} value={pkg}>
                                  {pkg}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Departure Date</label>
                          <Input type="date" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Return Date</label>
                          <Input type="date" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Adults</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="0" />
                            </SelectTrigger>
                            <SelectContent>
                              {[1,2,3,4,5,6,7,8].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Children</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="0" />
                            </SelectTrigger>
                            <SelectContent>
                              {[0,1,2,3,4,5,6].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Infants</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="0" />
                            </SelectTrigger>
                            <SelectContent>
                              {[0,1,2,3].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Special Requests</label>
                        <Textarea 
                          placeholder="Any special requirements, dietary restrictions, or preferences..."
                          rows={3}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name</label>
                          <Input placeholder="Enter first name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name</label>
                          <Input placeholder="Enter last name" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Email Address</label>
                          <Input type="email" placeholder="Enter email" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone Number</label>
                          <Input type="tel" placeholder="Enter phone number" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Address</label>
                        <Input placeholder="Enter full address" />
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">City</label>
                          <Input placeholder="City" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">State/Province</label>
                          <Input placeholder="State" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Zip/Postal Code</label>
                          <Input placeholder="Zip code" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Booking Summary */}
                <div>
                  <Card className="sticky top-24">
                    <CardHeader>
                      <CardTitle>Booking Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Destination:</span>
                          <span className="font-medium">Not selected</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration:</span>
                          <span className="font-medium">-</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Travelers:</span>
                          <span className="font-medium">-</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Package:</span>
                          <span className="font-medium">Not selected</span>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center text-lg font-bold">
                          <span>Total:</span>
                          <span className="text-primary">$--.--</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Final price will be calculated after selection
                        </p>
                      </div>

                      <Button variant="hero" size="lg" className="w-full">
                        Continue to Payment
                      </Button>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4" />
                          <span>Secure payment processing</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          <span>24/7 customer support</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span>Instant booking confirmation</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-16 p-8 bg-gradient-sky rounded-2xl text-white">
                <h2 className="text-2xl font-bold mb-4">Need Help with Your Booking?</h2>
                <p className="mb-6 opacity-90">
                  Our travel experts are available to assist you with your booking
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="sunset" size="lg">
                    Call Now: (555) 123-4567
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    Live Chat Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;