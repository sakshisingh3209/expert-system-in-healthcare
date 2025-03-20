const AboutHero = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col items-center text-center p-16 bg-gradient-to-r from-gray-400 to-blue-700 text-white rounded-lg shadow-lg">
          <h2 className="text-5xl font-extrabold mb-4">
            {title}
          </h2>
          <p className="text-lg font-light max-w-2xl opacity-90">
            {subtitle}
          </p>
        </div>
      );
    
  };
  
  export default AboutHero;
  