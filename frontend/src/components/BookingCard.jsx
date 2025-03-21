import React from 'react';

const BookingCard = ({ booking, onClick }) => {
  return (
    <div 
      className="p-4 bg-white shadow-md rounded-lg mb-4 border border-gray-200 hover:shadow-lg transition duration-300 cursor-pointer"
      onClick={() => onClick(booking.id)}
    >
      <h3 className="text-xl font-semibold text-gray-800">
        {booking.doctorName}
      </h3>
      <p className="text-gray-600">Date: {booking.date}</p>
      <p className="text-gray-600">Time: {booking.time}</p>
      <p className={`mt-2 font-bold ${
        booking.status === 'Pending'
          ? 'text-yellow-500'
          : booking.status === 'Approved'
            ? 'text-green-500'
            : 'text-red-500'
      }`}>
        Status: {booking.status}
      </p>
    </div>
  );
};

export default BookingCard;
