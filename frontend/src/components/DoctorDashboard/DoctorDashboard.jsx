// import React, { useState } from "react";
// import { Navigate, Outlet, useNavigate } from "react-router-dom";
// import Sidebar from "../../components/DoctorDashboard/Sidebar";
// import  Header from "../../components/DoctorDashboard/Header";
// import UpcomingAppointments from "./MainContent/UpcomingAppointments";
// import PatientList from "./MainContent/PatientList";
// import ProfileSection from "./MainContent/ProfileSection";
// import Settings from "./MainContent/Settings";
// import { FaCalendarAlt, FaCog, FaList, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { logoutDoctor, setActiveSection } from "@/redux/doctorSlice";
// import { DOCTOR_API_END_POINT } from "../utils/constant";

// const DoctorDashboard = () => {
//   const dispatch = useDispatch();
//   const activeSection = useSelector((state) => state.doctor.activeSection);
//   const doctorInfo = useSelector((state) => state.doctor.doctorInfo);
// const navigate= useNavigate();

//   console.log("Doctor Info:", doctorInfo);
//   const handleLogout = () => {
//     dispatch(logoutDoctor());
//     localStorage.clear(); // Clear persisted state
//     navigate('/login'); // Redirect using React Router
//   };
//   const handleUpdate = async (updatedData) => {
//     try {
//       dispatch(setLoading(true));
      
//       const res = await axios.put(`${DOCTOR_API_END_POINT}/${doctorInfo.id}`, updatedData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//         withCredentials: true, // ✅ Handle cookies/session
//       });
  
//       if (res.data.success) {
//         dispatch(updateDoctorProfile(res.data.data)); // ✅ Update Redux state with new doctor info
//         toast.success(res.data.message || 'Profile updated successfully!');
//       }
//     } catch (error) {
//       console.error('Failed to update doctor:', error);
//       toast.error(error.response?.data?.message || 'Failed to update profile. Please try again.');
//     } finally {
//       dispatch(setLoading(false));
//     }
  

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-900 text-white flex flex-col justify-between p-4">
//         <div>
//           <div className="flex items-center mb-6">
//             <FaUserCircle size={48} className="mr-3" />
//             <div>
//               <p className="text-lg font-semibold">
//                 {doctorInfo?.username }
//               </p>
//               <p className="text-sm text-gray-400">
//                 {doctorInfo?.specialty}
//               </p>
//             </div>
//           </div>
//           <nav className="mt-6">
//             <button
//               className={`flex items-center px-4 py-2 hover:bg-gray-800 rounded w-full ${
//                 activeSection === 'appointments' ? 'bg-gray-800' : ''
//               }`}
//               onClick={() => dispatch(setActiveSection('appointments'))}
//             >
//               <FaCalendarAlt className="mr-3" /> Appointments
//             </button>
//             <button
//               className={`flex items-center px-4 py-2 hover:bg-gray-800 rounded w-full ${
//                 activeSection === 'patients' ? 'bg-gray-800' : ''
//               }`}
//               onClick={() => dispatch(setActiveSection('patients'))}
//             >
//               <FaList className="mr-3" /> Patients
//             </button>
//             <button
//               className={`flex items-center px-4 py-2 hover:bg-gray-800 rounded w-full ${
//                 activeSection === 'profile' ? 'bg-gray-800' : ''
//               }`}
//               onClick={() => dispatch(setActiveSection('profile'))}
//             >
//               <FaUserCircle className="mr-3" /> Profile
//             </button>
//             <button
//               className={`flex items-center px-4 py-2 hover:bg-gray-800 rounded w-full ${
//                 activeSection === 'settings' ? 'bg-gray-800' : ''
//               }`}
//               onClick={() => dispatch(setActiveSection('settings'))}
//             >
//               <FaCog className="mr-3" /> Settings
//             </button>
//           </nav>
//         </div>
//         <div>
//           <button
//             className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 rounded w-full"
//             onClick={handleLogout} // ✅ Connected Logout function
//           >
//             <FaSignOutAlt className="mr-3" /> Logout
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-auto p-4 bg-gray-100">
//         {activeSection === 'appointments' && <UpcomingAppointments />}
//         {activeSection === 'patients' && <PatientList />}
//         {activeSection === 'profile' && <ProfileSection />}
//         {activeSection === 'settings' && <Settings />}
//       </div>
//     </div>
//   );
// };

// export default DoctorDashboard;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { logoutDoctor, setActiveSection, setLoading, updateDoctorProfile } from "@/redux/doctorSlice";
import { FaCalendarAlt, FaCog, FaList, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import UpcomingAppointments from "./MainContent/UpcomingAppointments";
import PatientList from "./MainContent/PatientList";
import ProfileSection from "./MainContent/ProfileSection";
import Settings from "./MainContent/Settings";
import { DOCTOR_API_END_POINT } from "../utils/constant";

const DoctorDashboard = () => {
  const dispatch = useDispatch();
  const activeSection = useSelector((state) => state.doctor.activeSection);
  const doctorInfo = useSelector((state) => state.doctor.doctorInfo);
  const navigate = useNavigate();

  console.log("Doctor Info:", doctorInfo);

  const handleLogout = () => {
    dispatch(logoutDoctor());
    localStorage.clear(); 
    navigate('/login'); 
  };

 

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col justify-between p-4">
        <div>
          <div className="flex items-center mb-6">
            <FaUserCircle size={48} className="mr-3" />
            <div>
              <p className="text-lg font-semibold">
                {doctorInfo?.username}
              </p>
              <p className="text-sm text-gray-400">
                {doctorInfo?.specialization}
              </p>
            </div>
          </div>
          <nav className="mt-6">
            <button
              className={`flex items-center px-4 py-2 hover:bg-gray-800 rounded w-full ${
                activeSection === 'appointments' ? 'bg-gray-800' : ''
              }`}
              onClick={() => dispatch(setActiveSection('appointments'))}
            >
              <FaCalendarAlt className="mr-3" /> Appointments
            </button>
            <button
              className={`flex items-center px-4 py-2 hover:bg-gray-800 rounded w-full ${
                activeSection === 'patients' ? 'bg-gray-800' : ''
              }`}
              onClick={() => dispatch(setActiveSection('patients'))}
            >
              <FaList className="mr-3" /> Patients
            </button>
            <button
              className={`flex items-center px-4 py-2 hover:bg-gray-800 rounded w-full ${
                activeSection === 'profile' ? 'bg-gray-800' : ''
              }`}
              onClick={() => dispatch(setActiveSection('profile'))}
            >
              <FaUserCircle className="mr-3" /> Profile
            </button>
            <button
              className={`flex items-center px-4 py-2 hover:bg-gray-800 rounded w-full ${
                activeSection === 'settings' ? 'bg-gray-800' : ''
              }`}
              onClick={() => dispatch(setActiveSection('settings'))}
            >
              <FaCog className="mr-3" /> Settings
            </button>
          </nav>
        </div>
        <div>
          <button
            className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 rounded w-full"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="mr-3" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4 bg-gray-100">
        {activeSection === 'appointments' && <UpcomingAppointments />}
        {activeSection === 'patients' && <PatientList />}
        {activeSection === 'profile' && <ProfileSection />}
        {activeSection === 'settings' && <Settings />}
      </div>
    </div>
  );
};

export default DoctorDashboard;
