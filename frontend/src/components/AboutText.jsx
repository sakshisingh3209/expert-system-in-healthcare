const AboutText = ({ title, text }) => {
    return (
        <div className="mb-6">
          <h4 className="text-2xl font-medium text-blue-700 mb-1">
            {title}
          </h4>
          <p className="text-gray-600 leading-relaxed">
            {text}
          </p>
        </div>
      );
    
  };
  
  export default AboutText;
  