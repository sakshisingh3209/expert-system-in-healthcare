import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelBooking, rescheduleBooking } from '../redux/bookingSlice';

const BookingDetails = () => {
  const dispatch = useDispatch();
  const { appointments } = useSelector((state) => state.booking);

  const handleCancel = (id) => {
    dispatch(cancelBooking(id));
  };

  const handleReschedule = (id) => {
    dispatch(rescheduleBooking(id));
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Bookings</h2>
      {appointments && appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              className="p-4 bg-white shadow-md rounded-lg mb-4 border border-gray-200 hover:shadow-lg transition duration-300"
            >
              {/* Doctor Info */}
              <h3 className="text-xl font-semibold text-gray-800">
                {appointment.doctorName} ({appointment.specialization})
              </h3>

              {/* Appointment Details */}
              <p className="text-gray-600 mt-1">
                Date: {appointment.date} | Time: {appointment.time} | Duration: {appointment.duration}
              </p>

              {/* Patient Info */}
              <p className="text-gray-600 mt-1">
                Patient: {appointment.patientName} (Age: {appointment.age}) | Contact: {appointment.contactNumber}
              </p>

              {/* Health Concern */}
              <p className="text-gray-600 mt-1">Concern: {appointment.healthConcern}</p>

              {/* Payment & Status */}
              <p className="text-gray-600 mt-1">
                Payment: {appointment.paymentStatus} | Status: {appointment.status}
              </p>

              {/* Action Buttons */}
              <div className="mt-4 flex gap-3">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                  onClick={() => handleCancel(appointment.id)}
                >
                  Cancel
                </button>
                {appointment.status === 'Confirmed' && (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    onClick={() => handleReschedule(appointment.id)}
                  >
                    Reschedule
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No appointments available.</p>
      )}
    </div>
  );
};

export default BookingDetails;
