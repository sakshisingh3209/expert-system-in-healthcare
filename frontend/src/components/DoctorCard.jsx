import { useNavigate } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/doctor/${doctor.id}`);
  };

  return (
    <div 
      onClick={handleClick} 
      className="p-4 bg-gray-100 shadow-md rounded-xl cursor-pointer hover:shadow-lg transition duration-200 border border-gray-300"
    >
      <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
      <p className="text-gray-600">{doctor.specialization}</p>
      <p className="text-gray-600">Rating: ⭐{doctor.rating}</p>
      <p className="text-gray-600">Fee: Rs {doctor.fee}</p>
    </div>
  );
};

export default DoctorCard;
