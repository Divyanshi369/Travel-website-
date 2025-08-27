import AirplaneAnimation from "@/components/AirplaneAnimation";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import NewsletterSection from "@/components/NewsletterSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AirplaneAnimation />
      <HeroSection />
      <FeaturedDestinations />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;