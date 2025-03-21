import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancelAppointment } from '../redux/appointmentSlice';

const ManageBooking = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.booking.appointments);

  console.log('Appointments:', appointments); // Debug log

  const handleCancel = (id) => {
    console.log(`Cancelling appointment with id: ${id}`); // Debug log
    dispatch(cancelAppointment(id));
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Manage Your Appointments</h2>
      {appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              className="p-4 bg-white shadow-md rounded-lg mb-4 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {appointment.doctorName}
              </h3>
              <p className="text-gray-600">
                {appointment.date} at {appointment.time}
              </p>
              <button
                onClick={() => handleCancel(appointment.id)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Cancel Appointment
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No appointments found.</p>
      )}
    </div>
  );
};

export default ManageBooking;
