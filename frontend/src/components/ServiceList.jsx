import { FaUserMd, FaHeartbeat, FaCalendarCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from './shared/Navbar';

const services = [
  {
    icon: <FaHeartbeat />,
    title: 'Symptom Checker',
    description: 'AI-based symptom analysis to help you identify potential issues.',
    path: '/symptom-checker',
  },
  {
    icon: <FaUserMd />,
    title: 'Doctor Consultation',
    description: 'Book a consultation with a verified doctor.',
    path: '/doctors',
  },
  {
    icon: <FaCalendarCheck />,
    title: 'Manage Appointments',
    description: 'Manage your appointments with ease using our platform.',
    path: '/bookings', // Link to Booking List
  },
];

const ServiceList = () => {
  const navigate = useNavigate();

  return (
  
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          onClick={() => navigate(service.path)}
          className="p-6 bg-white shadow-md rounded-lg cursor-pointer border border-gray-200 hover:shadow-lg transition duration-300"
        >
          <div className="text-4xl text-blue-500 mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
