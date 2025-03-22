import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home, Calendar, FileText, Heart, Settings } from "lucide-react";

const Sidebar = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold">HealthCare+</h1>
      </div>

      {/* Navigation */}
      <div className="flex flex-col mt-6 space-y-4">
        <Link to="/dashboard" className="flex items-center px-6 py-3 hover:bg-gray-700">
          <Home className="mr-3" /> Dashboard
        </Link>
        <Link to="/dashboard/appointments" className="flex items-center px-6 py-3 hover:bg-gray-700">
          <Calendar className="mr-3" /> Appointments
        </Link>
        <Link to="/dashboard/medical-history" className="flex items-center px-6 py-3 hover:bg-gray-700">
          <FileText className="mr-3" /> Medical History
        </Link>
        <Link to="/dashboard/reports" className="flex items-center px-6 py-3 hover:bg-gray-700">
          <Heart className="mr-3" /> Reports
        </Link>
        <Link to="/dashboard/settings" className="flex items-center px-6 py-3 hover:bg-gray-700">
          <Settings className="mr-3" /> Settings
        </Link>
      </div>

      {/* User Info */}
      {user && (
        <div className="mt-auto p-6 border-t border-gray-700">
          <p className="text-sm">Welcome,</p>
          <p className="text-lg font-bold">{user.username}</p>
          <p className="text-xs">{user.role}</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
