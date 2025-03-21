import React from 'react';

const bookings = [
  {
    id: 1,
    doctorName: 'Dr. John Doe',
    specialization: 'Cardiologist',
    date: '2025-03-25',
    time: '10:00 AM',
  },
  {
    id: 2,
    doctorName: 'Dr. Jane Smith',
    specialization: 'Dermatologist',
    date: '2025-03-26',
    time: '2:30 PM',
  },
  {
    id: 3,
    doctorName: 'Dr. Emily Johnson',
    specialization: 'Pediatrician',
    date: '2025-03-27',
    time: '9:15 AM',
  },
];

const BookingList = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Bookings</h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking) => (
            <li
              key={booking.id}
              className="p-4 bg-white shadow-md rounded-lg mb-4 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {booking.doctorName}
              </h3>
              <p className="text-gray-600">
                {booking.specialization}
              </p>
              <p className="text-gray-600">
                Date: {booking.date} | Time: {booking.time}
              </p>
              <button
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={() => handleCancel(booking.id)}
              >
                Cancel Booking
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No bookings found.</p>
      )}
    </div>
  );
};

export default BookingList;
