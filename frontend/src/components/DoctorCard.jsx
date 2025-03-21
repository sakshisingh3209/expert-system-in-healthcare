import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mb-4 border border-gray-200">
      <h3 className="text-xl font-semibold">{doctor.name}</h3>
      <p className="text-gray-600">{doctor.specialization}</p>
      <p className="text-gray-600">Rating: {doctor.rating}</p>
      <p className="text-gray-600">Fee: ${doctor.fee}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorCard;
