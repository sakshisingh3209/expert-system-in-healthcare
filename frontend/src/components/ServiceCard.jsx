const ServiceCard = ({ icon, title, description }) => {
    return (
      <div className="p-6 bg-white shadow-md rounded-xl flex items-start space-x-4 border hover:shadow-lg transition duration-300">
        <div className="text-4xl text-blue-500">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ServiceCard;
  