
import { Link } from 'react-router-dom';
import heroImage from "../assets/heroImage.webp"
const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
      {/* Left Side (Text) */}
      <div className="max-w-xl">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-4">
          Early Detection. <span className="text-black">Better Care.</span>
        </h2>
        <p className="text-gray-700 mb-6">
          Get accurate early detection of diseases using AI-driven insights.
          Connect with expert doctors and manage your medical records all in one place.
        </p>
        <div className="flex space-x-4">
          <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Get Started
          </Link>
          <Link to="/services" className="bg-gray-200 text-blue-600 px-6 py-2 rounded-lg shadow hover:bg-gray-300 transition">
            Learn More
          </Link>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="mt-6 md:mt-0">
        <img 
            src={heroImage}
          alt="Doctor using AI system" 
          className="w-full max-w-md object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
