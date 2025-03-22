import ServiceList from './ServiceList';
import HowItWorks from './HowItWorks';
import Testimonial from './Testimonial';
import CTA from './CTA';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';

const ServiceSection = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-600 mt-4">
            We provide AI-based healthcare solutions to make your life easier.
          </p>
        </div>

        {/* Services */}
        <ServiceList />

        {/* How It Works */}
        <HowItWorks />

        {/* Testimonials */}
        <Testimonial />

        {/* CTA */}
        <CTA />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ServiceSection;
