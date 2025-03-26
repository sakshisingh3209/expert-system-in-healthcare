import React from 'react';

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="w-64 bg-blue-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Doctor Dashboard</h2>
      <nav>
        <button onClick={() => setActiveSection('appointments')} className="block py-2 hover:bg-blue-700">
          Upcoming Appointments
        </button>
        <button onClick={() => setActiveSection('patients')} className="block py-2 hover:bg-blue-700">
          Patient List
        </button>
        <button onClick={() => setActiveSection('profile')} className="block py-2 hover:bg-blue-700">
          Profile
        </button>
        <button onClick={() => setActiveSection('settings')} className="block py-2 hover:bg-blue-700">
          Settings
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
