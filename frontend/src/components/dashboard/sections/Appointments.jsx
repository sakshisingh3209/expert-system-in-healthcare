
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { APPOINTMENT_API_END_POINT } from "@/components/utils/constant";
import { setAppointments,updateAppointment,cancelAppointment } from "@/redux/appointmentSlice";

function Appointments() {
  const dispatch = useDispatch();
  const { appointments } = useSelector((state) => state.appointments); // ✅ Get state from Redux
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        if (!user || !token) {
          console.error("User or token not available");
          return;
        }

        const patientId = user?._id;
        const res = await axios.get(
          `${APPOINTMENT_API_END_POINT}/patient/${patientId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // ✅ Fixed template string
            },
            withCredentials: true,
          }
        );

        dispatch(setAppointments(res.data)); // ✅ Save fetched data to Redux
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
        toast.error("Failed to load appointments");
      }
    };

    if (user && token) {
      fetchAppointments();
    }
  }, [dispatch, user, token]);

  // ✅ Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${APPOINTMENT_API_END_POINT}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Ensure authorization on delete
        },
        withCredentials: true,
      });
      dispatch(cancelAppointment(id));
      toast.success("Appointment deleted successfully");
    } catch (error) {
      console.error("Failed to delete appointment:", error);
      toast.error("Failed to delete appointment");
    }
  };

  // ✅ Handle status update
  const handleUpdate = async (id, status) => {
    try {
      const res = await axios.put(
        `${APPOINTMENT_API_END_POINT}/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Ensure authorization on update
          },
          withCredentials: true,
        }
      );
      dispatch(updateAppointment(res.data));
      toast.success("Appointment updated successfully");
    } catch (error) {
      console.error("Failed to update appointment:", error);
      toast.error("Failed to update appointment");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
      {appointments?.length > 0 ? (
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
                <strong>Date:</strong>{" "}
                {new Date(appointment.date).toLocaleDateString()}
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
              {/* ✅ Update button */}
              {appointment.status !== "Confirmed" && (
                <button
                  onClick={() => handleUpdate(appointment._id, "Confirmed")}
                  className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
                >
                  Confirm
                </button>
              )}
              {/* ✅ Delete button */}
              <button
                onClick={() => handleDelete(appointment._id)}
                className="bg-red-500 text-white px-3 py-1 rounded mt-2 ml-2"
              >
                Delete
              </button>
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
