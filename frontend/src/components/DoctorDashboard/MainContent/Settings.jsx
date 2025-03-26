// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateDoctorProfile } from "@/redux/doctorSlice";

// const Settings = () => {
//   const dispatch = useDispatch();
//   const doctorInfo = useSelector((state) => state.doctor.doctorInfo);

//   const handleUpdateProfile = (e) => {
//     e.preventDefault();
//     const updatedDoctor = {
//       name: e.target.name.value,
//       specialty: e.target.specialty.value,
//       fees: e.target.fees.value,
//       contact: e.target.contact.value,
//       address: e.target.address.value,
//     };
//     dispatch(updateDoctorProfile(updatedDoctor));
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold mb-4">Settings</h2>

//       {/* Update Profile */}
//       <form onSubmit={handleUpdateProfile} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           defaultValue={doctorInfo?.name || ""}
//           className="w-full p-2 border rounded"
//           autoComplete="name"
//         />
//         <input
//           type="text"
//           name="specialty"
//           placeholder="Specialization"
//           defaultValue={doctorInfo?.specialty || ""}
//           className="w-full p-2 border rounded"
//           autoComplete="organization"
//         />
//         <input
//           type="number"
//           name="fees"
//           placeholder="Fees"
//           defaultValue={doctorInfo?.fees || ""}
//           className="w-full p-2 border rounded"
//           autoComplete="off"
//         />
//         <input
//           type="text"
//           name="contact"
//           placeholder="Contact"
//           defaultValue={doctorInfo?.contact || ""}
//           className="w-full p-2 border rounded"
//           autoComplete="tel"
//         />
//         <input
//           type="text"
//           name="address"
//           placeholder="Address"
//           defaultValue={doctorInfo?.address || ""}
//           className="w-full p-2 border rounded"
//           autoComplete="street-address"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//         >
//           Update Profile
//         </button>
//       </form>

//       {/* Change Password */}
//       <div className="mt-6">
//         <h3 className="text-lg font-semibold mb-2">Change Password</h3>
//         <form className="space-y-2">
//           {/* ✅ Hidden Username Field */}
//           <input
//             type="text"
//             name="username"
//             autoComplete="username"
//             value={doctorInfo?.contact || ""}
//             hidden
//             readOnly
//           />
//           <input
//             type="password"
//             placeholder="New Password"
//             className="w-full p-2 border rounded"
//             autoComplete="new-password"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//           >
//             Update Password
//           </button>
//         </form>
//       </div>

//       {/* Notification Settings */}
//       <div className="mt-6">
//         <h3 className="text-lg font-semibold mb-2">Notification Settings</h3>
//         <label className="flex items-center mb-2">
//           <input type="checkbox" className="mr-2" /> Appointment Reminders
//         </label>
//         <label className="flex items-center mb-2">
//           <input type="checkbox" className="mr-2" /> Feedback Alerts
//         </label>
//       </div>

//       {/* Privacy Settings */}
//       <div className="mt-6">
//         <h3 className="text-lg font-semibold mb-2">Privacy Settings</h3>
//         <label className="flex items-center mb-2">
//           <input type="checkbox" className="mr-2" /> Allow patients to view profile
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Settings;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDoctorProfile } from "@/redux/doctorSlice";
import axios from "axios";
import { toast } from "sonner";
import { DOCTOR_API_END_POINT } from "@/components/utils/constant";

const Settings = () => {
  const dispatch = useDispatch();
  const doctorInfo = useSelector((state) => state.doctor.doctorInfo);

  const [formData, setFormData] = useState({
    name: doctorInfo?.name || "",
    specialty: doctorInfo?.specialty || "",
    fees: doctorInfo?.fees || "",
    contact: doctorInfo?.contact || "",
    address: doctorInfo?.address || "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `${DOCTOR_API_END_POINT}/${doctorInfo?._id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(updateDoctorProfile(res.data.data));
        toast.success(res.data.message || "Profile updated successfully!");
      }
    } catch (error) {
      console.error("Failed to update doctor:", error);
      toast.error(
        error.response?.data?.message || "Failed to update profile. Please try again."
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>

      {/* Update Profile */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          autoComplete="name"
        />
        <input
          type="text"
          name="specialty"
          placeholder="Specialization"
          value={formData.specialty}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          autoComplete="organization"
        />
        <input
          type="number"
          name="fees"
          placeholder="Fees"
          value={formData.fees}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          autoComplete="off"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          autoComplete="tel"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          autoComplete="street-address"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Update Profile
        </button>
      </form>

      {/* Change Password */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Change Password</h3>
        <form onSubmit={handleSubmit} className="space-y-2">
          {/* ✅ Hidden Username Field for Accessibility */}
          <input
            type="text"
            name="username"
            autoComplete="username"
            value={formData.contact || ""}
            hidden
            readOnly
          />
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            autoComplete="new-password"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Update Password
          </button>
        </form>
      </div>

      {/* Notification Settings */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Notification Settings</h3>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" /> Appointment Reminders
        </label>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" /> Feedback Alerts
        </label>
      </div>

      {/* Privacy Settings */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Privacy Settings</h3>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" /> Allow patients to view profile
        </label>
      </div>
    </div>
  );
};

export default Settings;

