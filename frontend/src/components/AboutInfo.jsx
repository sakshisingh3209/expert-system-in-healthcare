const AboutInfo = ({ title, description }) => {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200">
          <h3 className="text-3xl font-semibold text-blue-600 mb-3">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      );
    
  };
  
  export default AboutInfo;
  