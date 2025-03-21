import { useState } from 'react';
import { useParams } from 'react-router-dom';

const DoctorBooking = () => {
  const { id } = useParams(); // Get doctor ID from URL
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    reason: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          doctorId: id,
          date: formData.date,
          time: formData.time,
          reason: formData.reason
        })
      });

      if (response.ok) {
        alert('Appointment booked successfully!');
        setFormData({ date: '', time: '', reason: '' }); // Clear form after submission
      } else {
        alert('Failed to book appointment.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while booking the appointment.');
    }
  };

  return (
    <div className="max-w-lg mx-auto py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Book Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Date */}
        <div>
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        {/* Time */}
        <div>
          <label className="block text-gray-700">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        {/* Reason */}
        <div>
          <label className="block text-gray-700">Reason</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            rows="3"
            required
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Describe your reason for the appointment..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default DoctorBooking;
