import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Doctor Panel</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/doctor/dashboard/appointments" className="hover:text-blue-400">
            Upcoming Appointments
          </Link>
        </li>
        <li>
          <Link to="/doctor/dashboard/patients" className="hover:text-blue-400">
            Patient List
          </Link>
        </li>
        <li>
          <Link to="/doctor/dashboard/profile" className="hover:text-blue-400">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/doctor/dashboard/settings" className="hover:text-blue-400">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
