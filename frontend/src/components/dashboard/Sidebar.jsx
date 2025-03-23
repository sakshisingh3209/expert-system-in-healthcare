import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home, Calendar, FileText, Heart, Settings, User } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const user = useSelector((state) => state.user.user);
  const [showMenu, setShowMenu] = useState(false);

  const handleUpload = () => {
    console.log("Upload new profile picture");
    // Add upload logic here
    setShowMenu(false);
  };

  const handleRemove = () => {
    console.log("Remove profile picture");
    // Add remove logic here
    setShowMenu(false);
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed flex flex-col">
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

      {/* User Profile Section */}
      {user && (
        <div className="mt-auto border-t border-gray-700">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Profile Picture/Icon */}
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="rounded-full overflow-hidden border-2 border-white"
              >
                <User className="w-10 h-10 bg-gray-700 p-2 rounded-full cursor-pointer hover:bg-gray-600" />
              </button>

              {/* Dropdown Menu */}
              {showMenu && (
                <div className="absolute bottom-12 left-0 w-48 bg-gray-700 rounded-lg shadow-lg overflow-hidden z-10">
                  <button
                    onClick={handleUpload}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-600"
                  >
                    Upload New Picture
                  </button>
                  <button
                    onClick={handleRemove}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-600 text-red-400"
                  >
                    Remove Picture
                  </button>
                </div>
              )}
            </div>

            {/* User Info */}
            <div className="text-left">
              <p className="text-sm">Welcome,</p>
              <p className="text-lg font-bold">{user.username}</p>
              <p className="text-xs">{user.role}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
