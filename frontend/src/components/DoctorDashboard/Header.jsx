import React from "react";
import { LogOut } from "lucide-react";

const Header = () => {
  const handleLogout = () => {
    console.log("Logged out");
    // Add logout logic here
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 shadow-md">
      <h1 className="text-2xl font-semibold">Doctor Dashboard</h1>
      <div className="flex items-center gap-4">
        {/* Profile Icon */}
        <img
          src="https://github.com/shadcn.png"
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
        {/* Logout Button */}
        <button onClick={handleLogout} className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
