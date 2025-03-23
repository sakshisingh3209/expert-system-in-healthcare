import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { APPOINTMENT_API_END_POINT} from "@/components/utils/constant";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get(`${APPOINTMENT_API_END_POINT}/`, {
          withCredentials: true,
        });
        setAppointments(res.data);
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
        toast.error("Failed to load appointments");
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
      {appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment) => (
            <li
              key={appointment._id}
              className="p-4 bg-gray-100 border rounded-lg mb-3 shadow-sm"
            >
              <p>
                <strong>Doctor:</strong> {appointment.doctorName}
              </p>
              <p>
                <strong>Date:</strong> {new Date(appointment.date).toDateString()}
              </p>
              <p>
                <strong>Time:</strong> {appointment.time}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`${
                    appointment.status === "Confirmed"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {appointment.status}
                </span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No appointments found.</p>
      )}
    </div>
  );
}

export default Appointments;
