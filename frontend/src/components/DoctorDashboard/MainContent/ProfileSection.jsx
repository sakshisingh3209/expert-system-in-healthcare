import React from 'react';

const ProfileSection = ({ doctor }) => {
  if (!doctor) return <p>Loading...</p>;

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center space-x-4">
        <img
          src={doctor.profilePicture || '/default-profile.png'}
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold">{doctor.name}</h2>
          <p className="text-gray-600">@{doctor.username}</p>
        </div>
      </div>

      <div className="mt-4">
        <p><strong>Email:</strong> {doctor.email}</p>
        <p><strong>Phone:</strong> {doctor.phoneNumber}</p>
        <p><strong>Gender:</strong> {doctor.gender}</p>
        <p><strong>DOB:</strong> {new Date(doctor.DOB).toLocaleDateString()}</p>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Professional Details</h3>
        <p><strong>Specialization:</strong> {doctor.specialization}</p>
        <p><strong>License Number:</strong> {doctor.licenseNumber}</p>
        <p><strong>Experience:</strong> {doctor.experience} years</p>
        <p><strong>Consultation Fee:</strong> ₹{doctor.consultationFee}</p>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold">Availability</h3>
        {doctor.availability?.days?.length > 0 ? (
          <ul>
            {doctor.availability.days.map((day, index) => (
              <li key={index}>
                {day}: {doctor.availability.timeSlots.join(', ')}
              </li>
            ))}
          </ul>
        ) : (
          <p>No availability info provided</p>
        )}
      </div>
    </div>
  );
};

export default ProfileSection;
