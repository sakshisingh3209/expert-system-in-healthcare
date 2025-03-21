import { useParams, Link } from 'react-router-dom';

const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialization: 'Cardiologist',
    image: '/images/doctor-1.jpg',
    contact: '+123-456-7890',
    availability: 'Mon - Fri, 9 AM - 5 PM',
    about: 'Dr. John Doe has over 15 years of experience in cardiology and has helped thousands of patients with heart health.'
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialization: 'Dermatologist',
    image: '/images/doctor-2.jpg',
    contact: '+987-654-3210',
    availability: 'Tue - Sat, 10 AM - 4 PM',
    about: 'Dr. Jane Smith specializes in skin health and cosmetic treatments with over a decade of experience.'
  },
  {
    id: 3,
    name: 'Dr. Emily Johnson',
    specialization: 'Pediatrician',
    image: '/images/doctor-3.jpg',
    contact: '+456-123-7890',
    availability: 'Mon - Thu, 8 AM - 3 PM',
    about: 'Dr. Emily Johnson is a board-certified pediatrician with a passion for child health and wellness.'
  }
];

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return <div className="text-center py-10 text-red-500">Doctor not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <img 
        src={doctor.image} 
        alt={doctor.name} 
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h2 className="text-3xl font-bold text-gray-800">{doctor.name}</h2>
      <p className="text-gray-600 mt-2">{doctor.specialization}</p>
      <p className="text-gray-500 mt-2">📞 {doctor.contact}</p>
      <p className="text-gray-500">🕒 {doctor.availability}</p>
      <p className="text-gray-700 mt-4">{doctor.about}</p>

      {/* Book Appointment Button */}
      <Link to={`/book/${doctor.id}`}>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          Book Appointment
        </button>
      </Link>
    </div>
  );
};

export default DoctorProfile;
