import AboutHero from "./AboutHero";
import AboutInfo from "./AboutInfo";
import AboutText from "./AboutText";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
const AboutPage = () => {
    return (
        <div>
          <Navbar/>
      <div className="bg-gray-50 min-h-screen p-6">
       
        {/* Hero Section */}
        <AboutHero
          title="About Us"
          subtitle="We aim to provide AI-based healthcare solutions for early diagnosis and expert medical care."
        />
  
        <div className="mt-12">
          {/* Info Section */}
          <AboutInfo
            title="Our Mission"
            description="To empower patients and healthcare providers with AI-driven insights and seamless medical solutions."
          />
  
          <div className="max-w-3xl mx-auto mt-8">
            <AboutText
              title="Our Vision"
              text="Our vision is to revolutionize healthcare by combining cutting-edge AI technology with human expertise to enable early and accurate diagnosis, ensuring that patients receive timely and effective treatment, ultimately improving overall health outcomes."

            />
            <AboutText 
              title="Our Goal"
              text="Our goal is to create a comprehensive healthcare platform that integrates AI and ML technologies to provide seamless access to medical care, improve diagnosis accuracy, and enhance patient experience by simplifying the healthcare journey from diagnosis to treatment."
            />
          </div>
        </div>
      
      </div>
      <Footer/>
      </div>
    );
  };
  
  export default AboutPage;
  