import { useState } from 'react';
import axios from 'axios';
import BookingConfirmation from './BookingConfirmation';

const BookingForm = ({ doctorId }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [success, setSuccess] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/v1/appointments`, {
        doctorId,
        date,
        time
      });
      console.log(response.data);
      setSuccess(true);
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  if (success) {
    return <BookingConfirmation />;
  }

  return (
    <form onSubmit={handleBooking} className="mt-6">
      <label className="block text-gray-700">Select Date:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border rounded-md p-2 w-full"
        required
      />

      <label className="block text-gray-700 mt-4">Select Time:</label>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border rounded-md p-2 w-full"
        required
      />

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Confirm Booking
      </button>
    </form>
  );
};

export default BookingForm;
