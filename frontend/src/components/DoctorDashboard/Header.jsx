import React from 'react';

const Header = () => {
  return (
    <div className="bg-white p-4 shadow flex justify-between items-center">
      <h1 className="text-xl font-bold">Welcome, Doctor!</h1>
      <div className="flex items-center gap-4">
        {/* Profile Icon */}
        <img 
          src="/doctor-profile.png" 
          alt="Profile" 
          className="w-10 h-10 rounded-full border border-gray-300"
        />
        {/* Logout Button */}
        <button className="text-red-500 font-semibold hover:text-red-700">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
