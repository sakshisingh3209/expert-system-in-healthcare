import serviceImage from "../assets/serviceImage.webp";
import doctorPatientImage from '../assets/doctorPatient.webp';
import healthRecordsImage from '../assets/image3.webp';

const CategorySection = () => {
    const services = [
      {
        title: 'Early Diagnosis',
        description: 'AI-based diagnosis for early detection of heart disease, diabetes, and more.',
        image:serviceImage,
      },
      {
        title: 'Doctor Consultation',
        description: 'Connect with expert doctors for personalized health advice.',
        image: doctorPatientImage
      },
      {
        title: 'Medical Records',
        description: 'Securely store and manage your health records.',
        image: healthRecordsImage,
      },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h- object-contain rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default CategorySection;
  